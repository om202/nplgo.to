<!DOCTYPE html>
<html lang="en-NP">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="icon" type="image/x-icon" href="/npgoto.ico">
    
    @php
        $meta = $page['props']['meta'] ?? [
            'title' => 'npgo.to - Free URL Shortener Nepal',
            'description' => 'Nepal\'s #1 free URL shortener, QR code generator & Link in Bio tool by Noble Stack. Create short links and bio pages instantly.',
            'image' => 'https://npgo.to/images/og-image.webp',
            'url' => 'https://npgo.to/',
        ];
    @endphp

    <title inertia>{{ $meta['title'] }}</title>
    <meta inertia name="description" content="{{ $meta['description'] }}">

    <!-- Open Graph / Facebook -->
    <meta inertia property="og:type" content="website">
    <meta inertia property="og:url" content="{{ $meta['url'] }}">
    <meta inertia property="og:title" content="{{ $meta['title'] }}">
    <meta inertia property="og:description" content="{{ $meta['description'] }}">
    <meta inertia property="og:image" content="{{ $meta['image'] }}">

    <!-- Twitter -->
    <meta inertia property="twitter:card" content="summary_large_image">
    <meta inertia property="twitter:url" content="{{ $meta['url'] }}">
    <meta inertia property="twitter:title" content="{{ $meta['title'] }}">
    <meta inertia property="twitter:description" content="{{ $meta['description'] }}">
    <meta inertia property="twitter:image" content="{{ $meta['image'] }}">

    <!-- Canonical URL -->
    <link inertia rel="canonical" href="{{ $meta['url'] }}">

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>