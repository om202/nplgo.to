<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Your shortened URL is ready - Nepal URL Shortner">
    <title>URL Shortened | Nepal URL Shortner</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 50px 40px;
            max-width: 520px;
            width: 100%;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            text-align: center;
        }

        .success-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #28a745 0%, #218838 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
        }

        .success-icon svg {
            width: 40px;
            height: 40px;
            fill: white;
        }

        h1 {
            font-size: 1.8rem;
            color: #1a1a2e;
            margin-bottom: 10px;
        }

        .subtitle {
            color: #666;
            margin-bottom: 30px;
        }

        .url-box {
            background: #f8f9fa;
            border: 2px solid #e0e0e0;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
        }

        .short-url-label {
            font-size: 0.875rem;
            color: #888;
            margin-bottom: 8px;
        }

        .short-url {
            font-size: 1.5rem;
            font-weight: 700;
            color: #e94560;
            word-break: break-all;
        }

        .short-url a {
            color: #e94560;
            text-decoration: none;
        }

        .short-url a:hover {
            text-decoration: underline;
        }

        .original-url {
            font-size: 0.875rem;
            color: #666;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #e0e0e0;
            word-break: break-all;
        }

        .btn-group {
            display: flex;
            gap: 12px;
            margin-top: 25px;
        }

        .btn {
            flex: 1;
            padding: 14px 20px;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .btn-primary {
            background: linear-gradient(135deg, #e94560 0%, #0f3460 100%);
            color: white;
            border: none;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(233, 69, 96, 0.3);
        }

        .btn-secondary {
            background: #f8f9fa;
            color: #333;
            border: 2px solid #e0e0e0;
        }

        .btn-secondary:hover {
            background: #e9ecef;
        }

        .btn svg {
            width: 18px;
            height: 18px;
        }

        .copy-feedback {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: #1a1a2e;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 500;
            opacity: 0;
            transition: all 0.3s ease;
        }

        .copy-feedback.show {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="success-icon">
            <svg viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
        </div>

        <h1>URL Shortened!</h1>
        <p class="subtitle">Your short link is ready to use</p>

        <div class="url-box">
            <div class="short-url-label">Your shortened URL</div>
            <div class="short-url">
                <a href="{{ $shortUrl }}" target="_blank" rel="noopener">{{ $shortUrl }}</a>
            </div>
            <div class="original-url">
                <strong>Original:</strong> {{ Str::limit($originalUrl, 60) }}
            </div>
        </div>

        <div class="btn-group">
            <button class="btn btn-primary" onclick="copyToClipboard()">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg>
                Copy
            </button>
            <a href="{{ route('home') }}" class="btn btn-secondary">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                Shorten Another
            </a>
        </div>
    </div>

    <div class="copy-feedback" id="copyFeedback">✓ Copied to clipboard!</div>

    <script>
        function copyToClipboard() {
            const shortUrl = '{{ $shortUrl }}';
            navigator.clipboard.writeText(shortUrl).then(() => {
                const feedback = document.getElementById('copyFeedback');
                feedback.classList.add('show');
                setTimeout(() => {
                    feedback.classList.remove('show');
                }, 2000);
            }).catch(() => {
                // Fallback for older browsers
                const input = document.createElement('input');
                input.value = shortUrl;
                document.body.appendChild(input);
                input.select();
                document.execCommand('copy');
                document.body.removeChild(input);

                const feedback = document.getElementById('copyFeedback');
                feedback.classList.add('show');
                setTimeout(() => {
                    feedback.classList.remove('show');
                }, 2000);
            });
        }
    </script>
</body>

</html>