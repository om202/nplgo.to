import { Head } from '@inertiajs/react';

export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title ? `${title} | Nepal URL Shortner` : 'Nepal URL Shortner | npgo.to'}</title>
                <meta name="description" content="Nepal URL Shortner - Shorten your long URLs instantly with npgo.to. Free, fast, and reliable." />
            </Head>
            <main className="min-h-screen px-4 py-8">
                {children}
            </main>
        </>
    );
}
