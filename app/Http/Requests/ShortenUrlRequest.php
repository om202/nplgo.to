<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ShortenUrlRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Prepare the data for validation.
     * Normalize URL: add https://, convert to lowercase, remove trailing slashes.
     */
    protected function prepareForValidation(): void
    {
        $url = $this->input('url');

        if (!$url) {
            return;
        }

        $url = trim($url);

        // Add https:// if no protocol is present
        if (!preg_match('/^https?:\/\//i', $url)) {
            $url = 'https://' . $url;
        }

        // Convert to lowercase for consistency
        $url = strtolower($url);

        // Remove trailing slash (but keep if it's just the domain)
        if (preg_match('/^https?:\/\/[^\/]+\/.+\/$/', $url)) {
            $url = rtrim($url, '/');
        }

        $this->merge(['url' => $url]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'url' => [
                'required',
                'url',
                'max:2048',
                function ($attribute, $value, $fail) {
                    $parsedUrl = parse_url(strtolower($value));
                    $host = $parsedUrl['host'] ?? '';

                    // Check if the URL is from npgo.to domain
                    if (str_contains($host, 'npgo.to')) {
                        $fail('This URL is already shortened. You cannot shorten npgo.to links.');
                        return;
                    }

                    // Require at least one dot in the domain (TLD required)
                    // e.g., "bing" is invalid, "bing.com" is valid
                    if (!str_contains($host, '.')) {
                        $fail('Please enter a valid domain (e.g., example.com).');
                        return;
                    }

                    // Ensure domain has at least 2 parts (domain + TLD)
                    $parts = explode('.', $host);
                    if (count($parts) < 2 || strlen($parts[count($parts) - 1]) < 2) {
                        $fail('Please enter a valid domain with a proper extension (e.g., .com, .org).');
                    }
                },
            ],
        ];
    }

    /**
     * Get custom error messages for validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'url.required' => 'Please enter a URL to shorten.',
            'url.url' => 'Please enter a valid URL (e.g., https://example.com).',
            'url.max' => 'The URL is too long. Maximum length is 2048 characters.',
        ];
    }
}
