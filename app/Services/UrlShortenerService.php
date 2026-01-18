<?php

namespace App\Services;

use App\Models\Url;
use Illuminate\Support\Str;

class UrlShortenerService
{
    /**
     * Base62 characters for encoding.
     */
    private const BASE62_CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    /**
     * Short code length.
     */
    private const CODE_LENGTH = 6;

    /**
     * Maximum retry attempts for collision handling.
     */
    private const MAX_RETRIES = 5;

    /**
     * Shorten a URL and return the Url model.
     */
    public function shorten(string $originalUrl): Url
    {
        // Check if URL already exists
        $existing = Url::where('original_url', $originalUrl)->first();
        if ($existing) {
            return $existing;
        }

        // Generate unique short code with collision handling
        $shortCode = $this->generateUniqueCode();

        return Url::create([
            'short_code' => $shortCode,
            'original_url' => $originalUrl,
        ]);
    }

    /**
     * Resolve a short code to its original URL.
     */
    public function resolve(string $shortCode): ?Url
    {
        return Url::where('short_code', $shortCode)->first();
    }

    /**
     * Generate a unique short code with collision handling.
     */
    private function generateUniqueCode(): string
    {
        $attempts = 0;

        do {
            $code = $this->generateCode();
            $exists = Url::where('short_code', $code)->exists();
            $attempts++;

            if (!$exists) {
                return $code;
            }
        } while ($attempts < self::MAX_RETRIES);

        // Fallback: append timestamp fragment
        return $this->generateCode() . Str::substr(base_convert((string) time(), 10, 36), -2);
    }

    /**
     * Generate a random Base62 code.
     */
    private function generateCode(): string
    {
        $code = '';
        $charsLength = strlen(self::BASE62_CHARS);

        for ($i = 0; $i < self::CODE_LENGTH; $i++) {
            $code .= self::BASE62_CHARS[random_int(0, $charsLength - 1)];
        }

        return $code;
    }
}
