<?php

namespace App\Http\Controllers;

use App\Http\Requests\ShortenUrlRequest;
use App\Services\UrlShortenerService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class UrlController extends Controller
{
    public function __construct(
        private UrlShortenerService $urlShortener
    ) {
    }

    /**
     * Show the homepage with URL input form.
     * Redirect authenticated users to admin.
     */
    public function create(): Response|RedirectResponse
    {
        if (Auth::check()) {
            return redirect()->route('admin');
        }

        return Inertia::render('Home');
    }

    /**
     * Process the URL shortening request.
     * If not authenticated, store URL in session and redirect to login.
     */
    public function store(ShortenUrlRequest $request): Response|RedirectResponse|\Symfony\Component\HttpFoundation\Response
    {
        $validatedUrl = $request->validated('url');

        // If not logged in, store pending URL and redirect to Google login
        // Use Inertia::location() for external redirect to avoid CORS issues
        if (!Auth::check()) {
            session(['pending_url' => $validatedUrl]);
            return Inertia::location(route('auth.google'));
        }

        // User is authenticated - shorten the URL
        return $this->shortenAndRedirect($validatedUrl);
    }

    /**
     * Process a pending URL after login.
     */
    public function processPending(): RedirectResponse
    {
        $pendingUrl = session('pending_url');

        if ($pendingUrl && Auth::check()) {
            session()->forget('pending_url');

            $url = $this->urlShortener->shorten($pendingUrl, Auth::id());

            // Redirect to admin with success flash
            return redirect()->route('admin')->with('new_url', [
                'short_code' => $url->short_code,
                'display_url' => url('/' . $url->short_code),
                'original_url' => $url->original_url,
            ]);
        }

        return redirect()->route('admin');
    }

    /**
     * Shorten URL and redirect to result.
     */
    private function shortenAndRedirect(string $originalUrl): RedirectResponse
    {
        $url = $this->urlShortener->shorten($originalUrl, Auth::id());

        return redirect()->route('admin')->with('new_url', [
            'short_code' => $url->short_code,
            'display_url' => url('/' . $url->short_code),
            'original_url' => $url->original_url,
        ]);
    }
}

