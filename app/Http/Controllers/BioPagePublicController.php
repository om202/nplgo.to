<?php

namespace App\Http\Controllers;

use App\Models\BioPage;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\Response as HttpResponse;

class BioPagePublicController extends Controller
{
    /**
     * Display a public bio page.
     */
    public function show(string $username): Response
    {
        $bioPage = BioPage::findByUsername($username);

        if (!$bioPage) {
            abort(HttpResponse::HTTP_NOT_FOUND, 'Bio page not found.');
        }

        $bioPage->load(['links' => function ($query) {
            $query->where('is_active', true)->orderBy('position');
        }]);

        return Inertia::render('BioPagePublic', [
            'bioPage' => [
                'username' => $bioPage->username,
                'display_name' => $bioPage->display_name,
                'bio' => $bioPage->bio,
                'avatar_url' => $bioPage->avatar_url,
                'theme' => $bioPage->theme,
                'show_nepali_badge' => (bool) $bioPage->show_nepali_badge,
                'links' => $bioPage->links->map(fn ($link) => [
                    'id' => $link->id,
                    'title' => $link->title,
                    'url' => $link->url,
                    'icon' => $link->icon,
                ]),
            ],
            'meta' => [
                'title' => "{$bioPage->display_name} (@{$bioPage->username}) | Link in Bio",
                'description' => $bioPage->bio ?: "Check out {$bioPage->display_name}'s official Link in Bio page.",
                'image' => $bioPage->avatar_url ? url('/storage/' . $bioPage->avatar_url) : url('/images/og-image.webp'),
                'url' => url()->current(),
            ]
        ]);
    }
}
