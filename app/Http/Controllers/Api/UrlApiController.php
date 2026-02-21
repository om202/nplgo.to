<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\UrlShortenerService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UrlApiController extends Controller
{
    /**
     * Hardcoded service account email.
     * All API-created URLs are owned by this account.
     */
    private const SERVICE_ACCOUNT_EMAIL = 'noblestack.io@gmail.com';

    public function __construct(
        private UrlShortenerService $urlShortener
    ) {
    }

    /**
     * Shorten a URL via API.
     *
     * POST /api/v1/shorten
     * Headers: Authorization: Bearer {token}
     * Body: { "url": "https://example.com/long-url" }
     *
     * Returns:
     * {
     *   "short_code": "abc123",
     *   "short_url": "https://npgo.to/abc123",
     *   "original_url": "https://example.com/long-url"
     * }
     */
    public function shorten(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'url' => ['required', 'url', 'max:2048'],
        ]);

        $serviceUser = User::where('email', self::SERVICE_ACCOUNT_EMAIL)->first();

        if (!$serviceUser) {
            return response()->json([
                'error' => 'Service Unavailable',
                'message' => 'Service account not found.',
            ], 503);
        }

        $url = $this->urlShortener->shorten($validated['url'], $serviceUser->id);

        // Auto-lock API-created URLs — they cannot be deleted via the admin panel
        if (!$url->is_locked) {
            $url->update(['is_locked' => true]);
        }

        return response()->json([
            'short_code' => $url->short_code,
            'short_url' => url('/' . $url->short_code),
            'original_url' => $url->original_url,
            'is_locked' => true,
        ], 201);
    }
}
