import { Head } from '@inertiajs/react';

export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title ? `${title} | Nepal URL Shortner` : 'Nepal URL Shortner | npgo.to'}</title>
                <meta name="description" content="Nepal URL Shortner - Shorten your long URLs instantly with npgo.to" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300 flex items-center justify-center p-5">
                <div className="bg-white/95 rounded-2xl p-12 max-w-lg w-full shadow-2xl">
                    {children}
                </div>
            </div>
        </>
    );
}
