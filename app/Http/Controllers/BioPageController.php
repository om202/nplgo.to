<?php

namespace App\Http\Controllers;

use App\Models\BioLink;
use App\Models\BioPage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class BioPageController extends Controller
{
    /**
     * Show the bio page editor (create page on first visit if none exists).
     */
    public function edit(): Response
    {
        $user = Auth::user();
        $bioPage = $user->bioPage;

        if (!$bioPage) {
            // Auto-create a bio page with a default username from the user's name
            $baseUsername = preg_replace('/[^a-z0-9_]/', '', strtolower(str_replace(' ', '_', $user->name)));
            $username = $baseUsername ?: 'user_' . $user->id;

            // Ensure uniqueness
            $counter = 0;
            $candidateUsername = $username;
            while (BioPage::where('username', $candidateUsername)->exists()) {
                $counter++;
                $candidateUsername = $username . $counter;
            }

            $bioPage = $user->bioPage()->create([
                'username' => $candidateUsername,
                'display_name' => $user->name,
                'avatar_url' => $user->avatar,
            ]);
        }

        $bioPage->load('links');

        return Inertia::render('BioEditor', [
            'bioPage' => [
                'id' => $bioPage->id,
                'username' => $bioPage->username,
                'display_name' => $bioPage->display_name,
                'bio' => $bioPage->bio,
                'avatar_url' => $bioPage->avatar_url,
                'theme' => $bioPage->theme,
                'show_nepali_badge' => (bool) $bioPage->show_nepali_badge,
                'public_url' => url('/@' . $bioPage->username),
                'links' => $bioPage->links->map(fn (BioLink $link) => [
                    'id' => $link->id,
                    'title' => $link->title,
                    'url' => $link->url,
                    'icon' => $link->icon,
                    'position' => $link->position,
                    'is_active' => $link->is_active,
                ]),
            ],
        ]);
    }

    /**
     * Update profile info (display_name, bio, username, theme).
     */
    public function update(Request $request): RedirectResponse
    {
        $user = Auth::user();
        $bioPage = $user->bioPage;

        $validated = $request->validate([
            'username' => [
                'required',
                'string',
                'min:3',
                'max:30',
                'regex:/^[a-z0-9_]+$/',
                Rule::unique('bio_pages', 'username')->ignore($bioPage->id),
            ],
            'display_name' => 'required|string|max:50',
            'bio' => 'nullable|string|max:160',
            'theme' => 'required|string|in:default,dark,crimson,minimal,gradient,glass,sunset,neon,elegant,facebook,x,instagram,youtube,tiktok,linkedin',
            'show_nepali_badge' => 'boolean',
        ]);

        $bioPage->update($validated);

        return redirect()->route('bio.edit')->with('success', 'Bio page updated successfully.');
    }

    /**
     * Upload a custom avatar image.
     */
    public function uploadAvatar(Request $request): RedirectResponse
    {
        $request->validate([
            'avatar' => 'required|image|mimes:jpeg,png,gif,webp|max:2048',
        ]);

        $user = Auth::user();
        $bioPage = $user->bioPage;
        $disk = $this->avatarDisk();

        // Delete old custom avatar if it exists on disk
        if ($bioPage->avatar_url && str_contains($bioPage->avatar_url, 'bio-avatars/')) {
            $oldPath = $this->extractStoragePath($bioPage->avatar_url);
            if ($oldPath) {
                Storage::disk($disk)->delete($oldPath);
            }
        }

        // Store new avatar
        $path = $request->file('avatar')->store(
            'bio-avatars/' . $bioPage->id,
            $disk
        );

        $bioPage->update([
            'avatar_url' => Storage::disk($disk)->url($path),
        ]);

        return redirect()->route('bio.edit')->with('success', 'Profile photo updated.');
    }

    /**
     * Remove custom avatar (revert to Google avatar or none).
     */
    public function removeAvatar(): RedirectResponse
    {
        $user = Auth::user();
        $bioPage = $user->bioPage;
        $disk = $this->avatarDisk();

        // Delete the custom avatar file if it exists
        if ($bioPage->avatar_url && str_contains($bioPage->avatar_url, 'bio-avatars/')) {
            $oldPath = $this->extractStoragePath($bioPage->avatar_url);
            if ($oldPath) {
                Storage::disk($disk)->delete($oldPath);
            }
        }

        // Revert to Google avatar or null
        $bioPage->update([
            'avatar_url' => $user->avatar,
        ]);

        return redirect()->route('bio.edit')->with('success', 'Profile photo removed.');
    }

    /**
     * Get the storage disk for avatars.
     * Uses 'public' disk for local dev, 's3' for production.
     */
    private function avatarDisk(): string
    {
        $default = config('filesystems.default');
        return $default === 'local' ? 'public' : $default;
    }

    /**
     * Extract the storage path from a full avatar URL.
     * Handles both local (/storage/bio-avatars/...) and S3 (https://...bio-avatars/...) URLs.
     */
    private function extractStoragePath(string $url): ?string
    {
        $pos = strpos($url, 'bio-avatars/');
        return $pos !== false ? substr($url, $pos) : null;
    }

    /**
     * Add a new link to the bio page.
     */
    public function storeLink(Request $request): RedirectResponse
    {
        $user = Auth::user();
        $bioPage = $user->bioPage;

        $validated = $request->validate([
            'title' => 'required|string|max:100',
            'url' => 'required|url|max:2048',
        ]);

        $maxPosition = $bioPage->links()->max('position') ?? -1;

        $bioPage->links()->create([
            'title' => $validated['title'],
            'url' => $validated['url'],
            'position' => $maxPosition + 1,
        ]);

        return redirect()->route('bio.edit')->with('success', 'Link added successfully.');
    }

    /**
     * Update an existing link.
     */
    public function updateLink(Request $request, BioLink $bioLink): RedirectResponse
    {
        $user = Auth::user();

        // Ensure user owns this link
        if ($bioLink->bioPage->user_id !== $user->id) {
            abort(403);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:100',
            'url' => 'required|url|max:2048',
            'is_active' => 'boolean',
        ]);

        $bioLink->update($validated);

        return redirect()->route('bio.edit')->with('success', 'Link updated successfully.');
    }

    /**
     * Delete a link.
     */
    public function destroyLink(BioLink $bioLink): RedirectResponse
    {
        $user = Auth::user();

        // Ensure user owns this link
        if ($bioLink->bioPage->user_id !== $user->id) {
            abort(403);
        }

        $bioLink->delete();

        return redirect()->route('bio.edit')->with('success', 'Link deleted successfully.');
    }

    /**
     * Reorder links by updating their positions.
     */
    public function reorderLinks(Request $request): RedirectResponse
    {
        $user = Auth::user();
        $bioPage = $user->bioPage;

        $validated = $request->validate([
            'order' => 'required|array',
            'order.*' => 'integer|exists:bio_links,id',
        ]);

        foreach ($validated['order'] as $position => $linkId) {
            BioLink::where('id', $linkId)
                ->where('bio_page_id', $bioPage->id)
                ->update(['position' => $position]);
        }

        return redirect()->route('bio.edit')->with('success', 'Links reordered successfully.');
    }
}
