<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $routeName = \Illuminate\Support\Facades\Route::currentRouteName();
        $appName = 'npgo.to';
        
        $meta = [
            'title' => 'npgo.to - Free URL Shortener Nepal',
            'description' => 'Nepal\'s #1 free URL shortener, QR code generator & Link in Bio tool by Noble Stack. Create short links and bio pages instantly.',
            'image' => url('/images/og-image.webp'),
            'url' => url()->current(),
        ];

        // Override default meta for static SEO pages based on route name
        if ($routeName === 'about') {
            $meta['title'] = "About | $appName";
            $meta['description'] = "Learn about Noble Stack's mission to provide the best free URL shortener and digital tools for Nepal.";
        } elseif ($routeName === 'features') {
            $meta['title'] = "Features | $appName";
            $meta['description'] = "Explore features of Nepal's best free URL shortener: QR codes, link-in-bio, and analytics.";
        } elseif ($routeName === 'how-to-shorten') {
            $meta['title'] = "How to Shorten URL | $appName";
            $meta['description'] = "Learn how to instantly shorten long links and generate QR codes for free with npgo.to.";
        } elseif ($routeName === 'qr-code-generator') {
            $meta['title'] = "Free QR Code Generator | $appName";
            $meta['description'] = "Generate high-resolution QR codes for free in Nepal. Perfect for businesses, menus, and marketing.";
        } elseif ($routeName === 'url-shortener') {
            $meta['title'] = "Free URL Shortener | $appName";
            $meta['description'] = "The fastest, ad-free URL shortener designed for the Nepali digital ecosystem.";
        } elseif ($routeName === 'link-in-bio') {
            $meta['title'] = "Free Link in Bio for Creators | $appName";
            $meta['description'] = "Create a stunning personal landing page with unlimited links. The best free link-in-bio tool for Nepal.";
        }

        return [
            ...parent::share($request),
            'meta' => $meta,
            'auth' => [
                'user' => $request->user() ? [
                    'id' => $request->user()->id,
                    'name' => $request->user()->name,
                    'email' => $request->user()->email,
                    'avatar' => $request->user()->avatar,
                    // Hardcoded root admin - only this email has admin access
                    'is_admin' => $request->user()->email === 'noblestack.io@gmail.com',
                ] : null,
            ],
            'flash' => [
                'new_url' => fn() => $request->session()->get('new_url'),
                'success' => fn() => $request->session()->get('success'),
            ],
        ];
    }
}
