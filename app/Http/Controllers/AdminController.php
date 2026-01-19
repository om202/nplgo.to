<?php

namespace App\Http\Controllers;

use App\Models\Url;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    /**
     * Display the admin dashboard with user's URLs.
     */
    public function index(): Response
    {
        $user = Auth::user();
        $urls = $user->urls()->latest()->get()->map(function (Url $url) {
            return [
                'id' => $url->id,
                'short_code' => $url->short_code,
                'short_url' => config('app.url') . '/' . $url->short_code,
                'display_url' => 'npgo.to/' . $url->short_code,
                'original_url' => $url->original_url,
                'created_at' => $url->created_at->format('M j, Y'),
            ];
        });

        return Inertia::render('Admin', [
            'urls' => $urls,
            'stats' => [
                'total_urls' => $urls->count(),
            ],
        ]);
    }

    /**
     * Delete a URL.
     */
    public function destroy(Url $url): RedirectResponse
    {
        // Ensure user owns this URL
        if ($url->user_id !== Auth::id()) {
            abort(403);
        }

        $url->delete();

        return redirect()->route('admin')->with('success', 'URL deleted successfully.');
    }
}
