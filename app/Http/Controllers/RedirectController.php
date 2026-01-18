<?php

namespace App\Http\Controllers;

use App\Services\UrlShortenerService;
use Illuminate\Http\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;

class RedirectController extends Controller
{
    public function __construct(
        private UrlShortenerService $urlShortener
    ) {
    }

    /**
     * Redirect short code to original URL.
     */
    public function __invoke(string $code): RedirectResponse
    {
        $url = $this->urlShortener->resolve($code);

        if (!$url) {
            abort(Response::HTTP_NOT_FOUND, 'Short URL not found.');
        }

        return redirect()->away($url->original_url, Response::HTTP_MOVED_PERMANENTLY);
    }
}
