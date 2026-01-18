<?php

namespace App\Http\Controllers;

use App\Http\Requests\ShortenUrlRequest;
use App\Services\UrlShortenerService;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;

class UrlController extends Controller
{
    public function __construct(
        private UrlShortenerService $urlShortener
    ) {
    }

    /**
     * Show the homepage with URL input form.
     */
    public function create(): View
    {
        return view('home');
    }

    /**
     * Process the URL shortening request.
     */
    public function store(ShortenUrlRequest $request): View
    {
        $url = $this->urlShortener->shorten($request->validated('url'));

        $shortUrl = config('app.url') . '/' . $url->short_code;

        return view('result', [
            'shortUrl' => $shortUrl,
            'shortCode' => $url->short_code,
            'originalUrl' => $url->original_url,
        ]);
    }
}
