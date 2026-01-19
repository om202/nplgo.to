import { useForm } from '@inertiajs/react';
import { useRef, useEffect, FormEvent } from 'react';
import Layout from '@/Layouts/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, QrCode, LayoutDashboard, UserCheck, Share2, Mail, Printer, MessageSquare } from 'lucide-react';
import { GoogleSignInButton } from '@/components/GoogleSignInButton';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
    const inputRef = useRef<HTMLInputElement>(null);
    const { data, setData, post, processing, errors } = useForm({
        url: '',
    });

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Store URL in localStorage before submitting (in case user needs to login)
        if (data.url) {
            localStorage.setItem('pending_url', data.url);
        }

        post('/');
    }

    return (
        <Layout title="Home">
            {/* Hero Section - Full Width Background */}
            <section className="relative text-center space-y-4 sm:space-y-6 pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 -mx-3 sm:-mx-4 -mt-16 sm:-mt-20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 -z-10">
                    <img
                        src="/hero.jpg"
                        alt="Hero background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/75 to-background"></div>
                </div>

                {/* Content Container */}
                <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
                    {/* NobleStack Branding */}
                    <a
                        href="https://www.noblestack.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <img
                            src="/images/noblestack-logo.png"
                            alt="NobleStack"
                            className="h-8 w-8"
                        />
                        <span>A NobleStack Product</span>
                    </a>

                    <h1
                        className="text-4xl sm:text-4xl md:text-5xl font-bold tracking-normal leading-tight mt-4 max-w-xl mx-auto"
                        style={{
                            textShadow: '0 1px 0 rgba(255,255,255,0.4), 0 -1px 0 rgba(0,0,0,0.6)'
                        }}
                    >
                        URL Shortner for <span className="text-primary">Nepal</span>
                    </h1>

                    <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto tracking-normal px-4 mt-4">
                        Free, fast, and reliable URL shortener and QR code generator made for Nepali market by Noble Stack Team.
                    </p>

                    {/* URL Shortener Form */}
                    <Card className="max-w-3xl mx-auto bg-white/70 mt-16">
                        <CardHeader className="pb-0">
                            <CardTitle className="text-base sm:text-lg md:text-xl font-medium">Paste URL here to get started</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                                <div className="flex-1">
                                    <Input
                                        ref={inputRef}
                                        type="text"
                                        value={data.url}
                                        onChange={e => setData('url', e.target.value)}
                                        placeholder="https://example.com.np/your-long-url/"
                                        className={`h-12 md:h-14 bg-background text-base md:text-lg ${errors.url ? 'border-destructive' : ''}`}
                                    />
                                    {errors.url && (
                                        <p className="text-sm text-destructive text-left mt-1">{errors.url}</p>
                                    )}
                                </div>
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    size="lg"
                                    className="h-12 md:h-14 px-6 w-full sm:w-auto text-base md:text-lg"
                                >
                                    {processing ? 'Wait...' : 'Shorten'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>


            <div className="w-full max-w-5xl mx-auto space-y-8 sm:space-y-12 md:space-y-16 px-4 sm:px-6 md:px-8">

                {/* Features Section */}
                <section className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold mb-4">Why npgo.to?</h2>
                        <p className="text-muted-foreground">Fast, secure, and feature-rich URL management.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <ArrowRight className="h-6 w-6 -rotate-45" />
                                </div>
                                <h3 className="font-semibold text-center">URL Shortener</h3>
                                <p className="text-sm text-muted-foreground text-center">
                                    Transform long URLs into short, memorable links that are easy to share and track across all platforms.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <UserCheck className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-center">Google Sign-In</h3>
                                <p className="text-sm text-muted-foreground text-center">
                                    Secure authentication with your Google account to keep all your shortened links organized in one dashboard.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <LayoutDashboard className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-center">Admin Dashboard</h3>
                                <p className="text-sm text-muted-foreground text-center">
                                    Comprehensive URL management interface with real-time stats, quick search, and powerful one-click actions for efficiency.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <QrCode className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-center">QR Code Generation</h3>
                                <p className="text-sm text-muted-foreground text-center">
                                    Generate instant QR codes for every shortened link to enable seamless offline sharing across print and digital media.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* How It Works Section */}
                <section className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Create short links in seconds with our simple three-step process
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center space-y-3">
                            <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                                1
                            </div>
                            <h3 className="font-semibold">Paste Your URL</h3>
                            <p className="text-sm text-muted-foreground">
                                Copy and paste your long URL into our shortener tool. Works with any valid web link.
                            </p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                                2
                            </div>
                            <h3 className="font-semibold">Get Short Link</h3>
                            <p className="text-sm text-muted-foreground">
                                Instantly receive a shortened npgo.to link that's easy to share and remember.
                            </p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                                3
                            </div>
                            <h3 className="font-semibold">Share Anywhere</h3>
                            <p className="text-sm text-muted-foreground">
                                Use your short link on social media, emails, SMS, or generate a QR code for offline sharing.
                            </p>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Use Cases Section */}
                <section className="space-y-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold mb-4">Perfect For</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Share2 className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-center">Social Media Marketing</h3>
                                <p className="text-sm text-muted-foreground text-center">
                                    Share clean, professional links on Facebook, Twitter, Instagram, and LinkedIn. Track engagement and optimize your campaigns with shortened URLs.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-center">Email Campaigns</h3>
                                <p className="text-sm text-muted-foreground text-center">
                                    Make your email newsletters more clickable with short, trustworthy links. Improve deliverability and track click-through rates.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Printer className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-center">Print Materials</h3>
                                <p className="text-sm text-muted-foreground text-center">
                                    Generate QR codes for business cards, flyers, posters, and packaging. Bridge offline and online marketing seamlessly.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MessageSquare className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-center">SMS & Messaging</h3>
                                <p className="text-sm text-muted-foreground text-center">
                                    Save character space in text messages and WhatsApp. Short links are easier to type and remember for your audience.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* FAQ Section */}
                <section className="space-y-6">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is npgo.to really free?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! npgo.to is completely free to use. Create unlimited short links, generate QR codes, and manage your URLs through our admin dashboard at no cost.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Do I need to create an account?</AccordionTrigger>
                                <AccordionContent>
                                    You can start shortening URLs immediately. Sign in with Google to access your admin dashboard, track all your links, and manage them from one place.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>How long do short links last?</AccordionTrigger>
                                <AccordionContent>
                                    Your shortened URLs are permanent and will continue working indefinitely. We maintain high uptime to ensure your links are always accessible.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I customize my short links?</AccordionTrigger>
                                <AccordionContent>
                                    Currently, npgo.to generates random short codes automatically. This ensures uniqueness and prevents conflicts. Custom branded links may be added in future updates.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>How is npgo.to different from Bit.ly?</AccordionTrigger>
                                <AccordionContent>
                                    npgo.to is a free, open alternative to Bit.ly with no premium tiers or paywalls. We focus on simplicity and essential features: URL shortening, QR codes, and link management—all completely free.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger>Are QR codes included?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! Every shortened link comes with a free QR code generator. Perfect for print materials, business cards, and offline marketing campaigns.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center text-sm text-muted-foreground pt-8 pb-24 space-y-4">
                    <Separator />
                    <div className="flex items-center justify-center gap-2">
                        <span>Built by</span>
                        <a
                            href="https://www.noblestack.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary transition-colors"
                        >
                            <img
                                src="/images/noblestack-logo.png"
                                alt="NobleStack"
                                className="h-5 w-5"
                            />
                            NobleStack
                        </a>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <a href="/privacy" className="hover:text-foreground transition-colors">
                            Privacy Policy
                        </a>
                        <span>•</span>
                        <a href="/terms" className="hover:text-foreground transition-colors">
                            Terms of Service
                        </a>
                    </div>
                    <p>© 2026 npgo.to • All rights reserved</p>
                </footer>
            </div>

            {/* Fixed Bottom Login Banner */}
            <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-lg">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-center sm:text-left">
                            <h3 className="text-base sm:text-lg font-semibold mb-1">
                                Sign in to access your dashboard
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Track, manage, and organize all your shortened URLs in one place
                            </p>
                        </div>
                        <GoogleSignInButton />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

