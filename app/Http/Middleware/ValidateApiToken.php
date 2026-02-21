<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ValidateApiToken
{
    /**
     * Validate the incoming API request has a valid service token.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->bearerToken();

        if (!$token || !hash_equals(config('services.api.token'), $token)) {
            return response()->json([
                'error' => 'Unauthorized',
                'message' => 'Invalid or missing API token.',
            ], 401);
        }

        return $next($request);
    }
}
