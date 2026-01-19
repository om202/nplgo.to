<?php

namespace App\Http\Controllers;

use App\Http\Requests\ShortenUrlRequest;
use App\Services\UrlShortenerService;
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
     */
    public function create(): Response
    {
        return Inertia::render('Home');
    }

    /**
     * Process the URL shortening request.
     */
    public function store(ShortenUrlRequest $request): Response
    {
        $url = $this->urlShortener->shorten($request->validated('url'));

        $shortCode = $url->short_code;
        $shortUrl = config('app.url') . '/' . $shortCode;

        // Display URL without protocol (cleaner look)
        $displayUrl = 'npgo.to/' . $shortCode;

        return Inertia::render('Result', [
            'shortUrl' => $shortUrl,
            'displayUrl' => $displayUrl,
            'originalUrl' => $url->original_url,
        ]);
    }
}
