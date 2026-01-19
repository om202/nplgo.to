<?php

namespace App\Http\Controllers;

use App\Models\Url;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class RootAdminController extends Controller
{
    /**
     * The hardcoded root admin email.
     */
    private const ROOT_ADMIN_EMAIL = 'noblestack.io@gmail.com';

    /**
     * Display the root admin dashboard with all users and URLs.
     */
    public function index(): Response
    {
        // Only the hardcoded root admin can access this
        if (Auth::user()->email !== self::ROOT_ADMIN_EMAIL) {
            abort(403, 'Access denied. You are not the root administrator.');
        }

        // Get all users with their URL counts
        $users = User::withCount('urls')
            ->latest()
            ->get()
            ->map(function (User $user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'avatar' => $user->avatar,
                    'urls_count' => $user->urls_count,
                    'is_admin' => $user->is_admin,
                    'created_at' => $user->created_at->format('M j, Y'),
                ];
            });

        // Get all URLs with user info
        $urls = Url::with('user')
            ->latest()
            ->get()
            ->map(function (Url $url) {
                return [
                    'id' => $url->id,
                    'short_code' => $url->short_code,
                    'short_url' => config('app.url') . '/' . $url->short_code,
                    'display_url' => url('/' . $url->short_code),
                    'original_url' => $url->original_url,
                    'user_name' => $url->user?->name ?? 'Unknown',
                    'user_email' => $url->user?->email ?? 'Unknown',
                    'user_avatar' => $url->user?->avatar,
                    'created_at' => $url->created_at->format('M j, Y g:i A'),
                ];
            });

        return Inertia::render('RootAdmin', [
            'users' => $users,
            'urls' => $urls,
            'stats' => [
                'total_users' => $users->count(),
                'total_urls' => $urls->count(),
            ],
        ]);
    }
}
