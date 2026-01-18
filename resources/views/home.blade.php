<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Nepal URL Shortner - Shorten your long URLs instantly with npgo.to">
    <title>Nepal URL Shortner | npgo.to</title>
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
        }

        .logo {
            text-align: center;
            margin-bottom: 30px;
        }

        .logo h1 {
            font-size: 2.2rem;
            color: #1a1a2e;
            font-weight: 700;
        }

        .logo .domain {
            color: #e94560;
            font-weight: 800;
        }

        .logo p {
            color: #666;
            margin-top: 8px;
            font-size: 1rem;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #333;
            font-weight: 500;
        }

        .form-group input {
            width: 100%;
            padding: 16px 20px;
            border: 2px solid #e0e0e0;
            border-radius: 12px;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .form-group input:focus {
            outline: none;
            border-color: #e94560;
            box-shadow: 0 0 0 4px rgba(233, 69, 96, 0.1);
        }

        .form-group input.error {
            border-color: #dc3545;
        }

        .error-message {
            color: #dc3545;
            font-size: 0.875rem;
            margin-top: 8px;
        }

        .btn {
            width: 100%;
            padding: 16px;
            background: linear-gradient(135deg, #e94560 0%, #0f3460 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(233, 69, 96, 0.3);
        }

        .btn:active {
            transform: translateY(0);
        }

        .footer {
            text-align: center;
            margin-top: 30px;
            color: #888;
            font-size: 0.875rem;
        }

        .footer a {
            color: #e94560;
            text-decoration: none;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="logo">
            <h1>Nepal URL Shortner</h1>
            <p>Powered by <span class="domain">npgo.to</span></p>
        </div>

        <form action="{{ route('urls.store') }}" method="POST">
            @csrf
            <div class="form-group">
                <label for="url">Enter your long URL</label>
                <input type="text" id="url" name="url" placeholder="https://example.com/your-very-long-url"
                    value="{{ old('url') }}" class="{{ $errors->has('url') ? 'error' : '' }}" autofocus>
                @error('url')
                    <div class="error-message">{{ $message }}</div>
                @enderror
            </div>
            <button type="submit" class="btn">Shorten URL</button>
        </form>

        <div class="footer">
            <p>Free, fast & reliable URL shortening service</p>
        </div>
    </div>
</body>

</html>