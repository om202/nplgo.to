import { useForm } from '@inertiajs/react';
import { useRef, useEffect, FormEvent, ReactNode } from 'react';
import Layout from '@/Layouts/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, QrCode, LayoutDashboard, UserCheck } from 'lucide-react';
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
            <div className="w-full max-w-5xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
                {/* Hero Section */}
                <section className="text-center space-y-4 sm:space-y-6 pt-4 sm:pt-8 md:pt-12">
                    {/* NobleStack Branding */}
                    <a
                        href="https://www.noblestack.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <img
                            src="/images/noblestack-logo.png"
                            alt="NobleStack"
                            className="h-6 w-6"
                        />
                        <span>A NobleStack Product</span>
                    </a>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        <span className="flex flex-col sm:flex-row items-center justify-center gap-2">
                            <span className="flex items-center gap-2">
                                Nepali
                                <img src="/images/nepal-flag.png" alt="Nepal Flag" className="h-7 sm:h-9 w-auto" />
                            </span>
                            <span>URL Shortner</span>
                        </span>
                    </h1>

                    <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto tracking-tight px-4">
                        Free, fast, and reliable URL shortener made for Nepal
                    </p>

                    {/* URL Shortener Form */}
                    <Card className="max-w-xl mx-auto bg-muted/50 mt-10">
                        <CardHeader className="pb-0">
                            <CardTitle className="text-base font-medium">Paste URL to make it short</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                                <div className="flex-1">
                                    <Input
                                        ref={inputRef}
                                        type="text"
                                        value={data.url}
                                        onChange={e => setData('url', e.target.value)}
                                        placeholder="https://example.com/your-long-url/"
                                        className={`h-12 bg-background ${errors.url ? 'border-destructive' : ''}`}
                                    />
                                    {errors.url && (
                                        <p className="text-sm text-destructive text-left mt-1">{errors.url}</p>
                                    )}
                                </div>
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    size="lg"
                                    className="h-12 px-6 w-full sm:w-auto"
                                >
                                    {processing ? 'Wait...' : 'Shorten'}
                                    <ArrowRight className="ml-0.5 h-6 w-6" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Features Section */}
                <section className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">Why npgo.to?</h2>
                        <p className="text-muted-foreground">Fast, secure, and feature-rich URL management.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureCard
                            icon={<ArrowRight className="h-6 w-6 -rotate-45" />}
                            title="URL Shortener"
                            description="Transform long URLs into short, memorable links that are easy to share and track across all platforms."
                        />
                        <FeatureCard
                            icon={<UserCheck className="h-6 w-6" />}
                            title="Google Sign-In"
                            description="Secure authentication with your Google account to keep all your shortened links organized in one dashboard."
                        />
                        <FeatureCard
                            icon={<LayoutDashboard className="h-6 w-6" />}
                            title="Admin Dashboard"
                            description="Comprehensive URL management interface with real-time stats, quick search, and powerful one-click actions for efficiency."
                        />
                        <FeatureCard
                            icon={<QrCode className="h-6 w-6" />}
                            title="QR Code Generation"
                            description="Generate instant QR codes for every shortened link to enable seamless offline sharing across print and digital media."
                        />
                    </div>
                </section>

                <Separator />

                {/* How It Works Section */}
                <section className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Create short links in seconds with our simple three-step process
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center space-y-3">
                            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                                1
                            </div>
                            <h3 className="font-semibold">Paste Your URL</h3>
                            <p className="text-sm text-muted-foreground">
                                Copy and paste your long URL into our shortener tool. Works with any valid web link.
                            </p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                                2
                            </div>
                            <h3 className="font-semibold">Get Short Link</h3>
                            <p className="text-sm text-muted-foreground">
                                Instantly receive a shortened npgo.to link that's easy to share and remember.
                            </p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
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
                        <h2 className="text-2xl font-semibold mb-4">Perfect For</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <Card>
                            <CardContent className="pt-6 space-y-2">
                                <h3 className="font-semibold">Social Media Marketing</h3>
                                <p className="text-sm text-muted-foreground">
                                    Share clean, professional links on Facebook, Twitter, Instagram, and LinkedIn. Track engagement and optimize your campaigns with shortened URLs.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-2">
                                <h3 className="font-semibold">Email Campaigns</h3>
                                <p className="text-sm text-muted-foreground">
                                    Make your email newsletters more clickable with short, trustworthy links. Improve deliverability and track click-through rates.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-2">
                                <h3 className="font-semibold">Print Materials</h3>
                                <p className="text-sm text-muted-foreground">
                                    Generate QR codes for business cards, flyers, posters, and packaging. Bridge offline and online marketing seamlessly.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-2">
                                <h3 className="font-semibold">SMS & Messaging</h3>
                                <p className="text-sm text-muted-foreground">
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
                <footer className="text-center text-sm text-muted-foreground pb-8 space-y-4">
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
        </Layout>
    );
}

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <Card>
            <CardContent className="pt-6 text-center space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {icon}
                </div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}
