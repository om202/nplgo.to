import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import {
    ClipboardPaste,
    Scissors,
    Share2,
    QrCode,
    ArrowRight,
    CheckCircle,
} from 'lucide-react';

export default function HowToShorten() {
    return (
        <Layout
            title="How to Shorten a URL for Free"
            description="Learn how to shorten a URL for free in Nepal using npgo.to. Step-by-step guide to creating short links and QR codes. No signup required. By Noble Stack."
            canonicalPath="/how-to-shorten-url"
        >
            {/* HowTo Schema for this page */}
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Shorten a URL for Free in Nepal Using npgo.to",
                        "description": "A step-by-step guide to shortening URLs and generating QR codes for free using npgo.to by Noble Stack.",
                        "totalTime": "PT30S",
                        "tool": {
                            "@type": "HowToTool",
                            "name": "npgo.to - Free URL Shortener for Nepal"
                        },
                        "step": [
                            {
                                "@type": "HowToStep",
                                "position": 1,
                                "name": "Go to npgo.to",
                                "text": "Open your browser and visit npgo.to. No signup or login is required to shorten a URL.",
                                "url": "https://npgo.to/"
                            },
                            {
                                "@type": "HowToStep",
                                "position": 2,
                                "name": "Paste Your Long URL",
                                "text": "Copy the long URL you want to shorten and paste it into the input box on the homepage.",
                                "url": "https://npgo.to/"
                            },
                            {
                                "@type": "HowToStep",
                                "position": 3,
                                "name": "Click Shorten",
                                "text": "Click the 'Shorten' button. Your short npgo.to link will be generated instantly.",
                                "url": "https://npgo.to/"
                            },
                            {
                                "@type": "HowToStep",
                                "position": 4,
                                "name": "Copy Your Short Link or Download QR Code",
                                "text": "Copy your new short link to share anywhere. You also get a free QR code that you can download for print materials.",
                                "url": "https://npgo.to/"
                            }
                        ]
                    })}
                </script>
            </Head>

            {/* Hero Section */}
            <section className="relative text-center space-y-4 sm:space-y-6 pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 -mt-20">
                <div className="absolute inset-0 -z-10">
                    <img
                        src="/hero.webp"
                        alt="Nepal"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-background/95 via-background/90 to-background"></div>
                </div>

                <div className="relative z-10 px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
                        How to Shorten a URL <span className="text-primary">for Free</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto tracking-normal px-4 mt-4">
                        A step-by-step guide to creating short links and QR codes using npgo.to — Nepal's free URL shortener by Noble Stack.
                    </p>
                </div>
            </section>

            <div className="w-full max-w-4xl mx-auto px-4 space-y-12 pb-12">

                {/* Step-by-Step Guide */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-semibold text-center">4 Simple Steps</h2>

                    {/* Step 1 */}
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary text-2xl font-bold">
                                    1
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold flex items-center gap-2">
                                        <ClipboardPaste className="h-5 w-5 text-primary" />
                                        Go to npgo.to
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Open your browser and visit <a href="https://npgo.to" className="text-primary font-medium hover:underline">npgo.to</a>. No signup, no account creation, no login required. Just open the page and you're ready to go.
                                    </p>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Works on any device — phone, tablet, or laptop
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Step 2 */}
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary text-2xl font-bold">
                                    2
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold flex items-center gap-2">
                                        <ClipboardPaste className="h-5 w-5 text-primary" />
                                        Paste Your Long URL
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Copy the long URL you want to shorten and paste it into the input box. It can be any valid URL — a website link, a Google Drive document, a YouTube video, a social media post, or any other web address.
                                    </p>
                                    <div className="bg-muted rounded-lg p-4 font-mono text-sm break-all">
                                        <span className="text-muted-foreground">Example:</span><br />
                                        <span className="text-red-400">https://www.example.com/very/long/url/path/that/is/hard/to/share</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Step 3 */}
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary text-2xl font-bold">
                                    3
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold flex items-center gap-2">
                                        <Scissors className="h-5 w-5 text-primary" />
                                        Click "Shorten"
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Click the <strong>Shorten</strong> button. In less than a second, npgo.to will generate a short, memorable link for you. Your new URL will look something like:
                                    </p>
                                    <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                                        <span className="text-primary font-bold">npgo.to/abc123</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Your short link never expires — use it forever
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Step 4 */}
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary text-2xl font-bold">
                                    4
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold flex items-center gap-2">
                                        <Share2 className="h-5 w-5 text-primary" />
                                        Copy & Share (+ Free QR Code!)
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Copy your new short link with one click and share it anywhere. Every shortened link also comes with a <strong>free QR code</strong> that you can download and use for print materials — no extra tools needed.
                                    </p>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <QrCode className="h-4 w-4 text-primary" />
                                        Free high-resolution QR code with every link
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Tips Section - Unique to this page */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-center">Tips for Better Short Links</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    Include the Full URL
                                </h3>
                                <p className="text-muted-foreground">
                                    Always paste the complete URL including <code className="text-xs bg-muted px-1.5 py-0.5 rounded">https://</code>. If you forget, npgo.to will add it for you automatically — but it's best practice to include it.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    Same URL = Same Short Link
                                </h3>
                                <p className="text-muted-foreground">
                                    If you shorten the same URL twice, npgo.to will return the existing short link instead of creating a duplicate. No wasted links.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    Test Before Sharing
                                </h3>
                                <p className="text-muted-foreground">
                                    After creating a short link, click "Open" to verify it redirects correctly. This ensures your audience reaches the right destination.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    Sign In to Track Links
                                </h3>
                                <p className="text-muted-foreground">
                                    Guest links work fine, but signing in with Google lets you see all your links in a dashboard — copy, manage, or delete them anytime.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* What URLs Can You Shorten - Unique to this page */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-center">What URLs Can You Shorten?</h2>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                        npgo.to works with any valid web address. Here are some popular examples:
                    </p>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="grid gap-4 text-sm">
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                    <div>
                                        <span className="font-medium">Website URLs</span>
                                        <span className="text-muted-foreground"> — your business site, blog, portfolio</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                    <div>
                                        <span className="font-medium">Google Drive / Docs links</span>
                                        <span className="text-muted-foreground"> — share documents with clean URLs</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                    <div>
                                        <span className="font-medium">YouTube videos</span>
                                        <span className="text-muted-foreground"> — short links for sharing video content</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                    <div>
                                        <span className="font-medium">Social media profiles</span>
                                        <span className="text-muted-foreground"> — Facebook pages, Instagram profiles</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                    <div>
                                        <span className="font-medium">Google Maps locations</span>
                                        <span className="text-muted-foreground"> — share your shop or office location easily</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                    <div>
                                        <span className="font-medium">Any HTTPS URL</span>
                                        <span className="text-muted-foreground"> — payment links, forms, surveys, and more</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* CTA */}
                <section className="text-center space-y-4 py-8">
                    <h2 className="text-2xl font-semibold">Ready to Shorten Your First URL?</h2>
                    <p className="text-muted-foreground">
                        It takes less than 30 seconds. Try it now — completely free.
                    </p>
                    <a href="/">
                        <Button size="lg" className="gap-2 w-full sm:w-auto">
                            Shorten a URL Now <ArrowRight className="h-4 w-4" />
                        </Button>
                    </a>
                </section>
            </div>

            <Footer />
        </Layout>
    );
}
