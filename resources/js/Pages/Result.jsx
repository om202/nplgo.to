import { useState } from 'react';
import { Link } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

export default function Result({ shortUrl, originalUrl }) {
    const [copied, setCopied] = useState(false);

    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(shortUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // Fallback for older browsers
            const input = document.createElement('input');
            input.value = shortUrl;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    }

    return (
        <Layout title="URL Shortened">
            <div className="text-center">
                {/* Success Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full 
                    flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                </div>

                <h1 className="text-2xl font-bold text-dark-100 mb-2">URL Shortened!</h1>
                <p className="text-gray-500 mb-8">Your short link is ready to use</p>

                {/* URL Box */}
                <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-5 mb-5">
                    <p className="text-sm text-gray-400 mb-2">Your shortened URL</p>
                    <a
                        href={shortUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl font-bold text-primary hover:underline break-all"
                    >
                        {shortUrl}
                    </a>
                    <div className="border-t border-gray-200 mt-4 pt-4 text-sm text-gray-500 break-all">
                        <strong>Original:</strong> {originalUrl.length > 60
                            ? `${originalUrl.substring(0, 60)}...`
                            : originalUrl}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={copyToClipboard}
                        className="flex-1 py-3.5 px-5 bg-gradient-to-r from-primary to-primary-dark 
                            text-white rounded-xl font-semibold flex items-center justify-center gap-2
                            transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                    <Link
                        href="/"
                        className="flex-1 py-3.5 px-5 bg-gray-50 text-gray-700 border-2 border-gray-200 
                            rounded-xl font-semibold flex items-center justify-center gap-2
                            transition-all duration-300 hover:bg-gray-100"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                        Shorten Another
                    </Link>
                </div>
            </div>

            {/* Toast Notification */}
            <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-dark-100 text-white 
                px-6 py-3 rounded-lg font-medium transition-all duration-300
                ${copied ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
            >
                ✓ Copied to clipboard!
            </div>
        </Layout>
    );
}
