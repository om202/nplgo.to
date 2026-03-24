import { useForm, usePage } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useRef, useEffect, useState, FormEvent } from 'react';
import Layout from '@/Layouts/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, QrCode, LayoutDashboard, Share2, Mail, Printer, MessageSquare, Scissors, UserCircle } from 'lucide-react';
import { GoogleSignInButton } from '@/components/GoogleSignInButton';
import { Footer } from '@/components/Footer';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const PLACEHOLDER_URLS = [
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.facebook.com/your-business-page/posts/123',
    'https://www.instagram.com/p/your-awesome-post/',
    'https://www.tiktok.com/@username/video/1234567890',
    'https://docs.google.com/document/d/abc123/edit',
    'https://www.linkedin.com/in/your-profile-name/',
    'https://medium.com/@yourname/my-long-article-title',
    'https://example.com/products/category/item?ref=campaign',
];

function useAnimatedPlaceholder(urls: string[], isUserTyping: boolean) {
    const [placeholder, setPlaceholder] = useState('');
    const indexRef = useRef(0);

    useEffect(() => {
        if (isUserTyping) {
            setPlaceholder('');
            return;
        }

        let charIndex = 0;
        let isDeleting = false;
        let pauseTimeout: ReturnType<typeof setTimeout>;
        const currentUrl = () => urls[indexRef.current % urls.length];

        const tick = () => {
            if (isDeleting) {
                charIndex--;
                setPlaceholder(currentUrl().slice(0, charIndex));
                if (charIndex === 0) {
                    isDeleting = false;
                    indexRef.current++;
                    pauseTimeout = setTimeout(tick, 300);
                    return;
                }
                pauseTimeout = setTimeout(tick, 20);
            } else {
                charIndex++;
                setPlaceholder(currentUrl().slice(0, charIndex));
                if (charIndex === currentUrl().length) {
                    isDeleting = true;
                    pauseTimeout = setTimeout(tick, 2000);
                    return;
                }
                pauseTimeout = setTimeout(tick, 45);
            }
        };

        pauseTimeout = setTimeout(tick, 500);
        return () => clearTimeout(pauseTimeout);
    }, [isUserTyping, urls]);

    return placeholder;
}

export default function Home() {
    const { totalLinks } = usePage<{ totalLinks: number }>().props;
    const inputRef = useRef<HTMLInputElement>(null);
    const { data, setData, post, processing, errors } = useForm({
        url: '',
    });

    const animatedPlaceholder = useAnimatedPlaceholder(PLACEHOLDER_URLS, data.url.length > 0);

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
        <Layout>
            {/* Homepage-only structured data */}
            <Head>
                {/* FAQ Schema - Homepage only */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is the best free URL shortner for Nepal?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "npgo.to by Noble Stack is Nepal's best free URL shortener. It's completely free, just sign in with Google, and includes a free QR code generator. Perfect for Nepali businesses, marketers, and content creators."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is there a free QR code generator for Nepal?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes! npgo.to by Noble Stack offers a completely free QR code generator for Nepal. Every shortened link automatically gets a QR code that you can download and use for business cards, flyers, posters, and marketing materials."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Who created npgo.to?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "npgo.to is created by Noble Stack, a technology company based in Nepal. Noble Stack builds digital products and services for the Nepali market. Visit noblestack.io to learn more about our other products."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How is npgo.to different from Bit.ly?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "npgo.to by Noble Stack is a free Bit.ly alternative made specifically for Nepal. Unlike Bit.ly which has premium tiers and charges for features, npgo.to offers URL shortening, QR code generation, and link management completely free."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I use npgo.to for my business in Nepal?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely! npgo.to by Noble Stack is perfect for Nepali businesses. Use our free URL shortner for social media marketing, email campaigns, SMS marketing, and print materials. Generate QR codes for business cards and brochures. You can also create a free Link in Bio page to share all your business links from one place."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does npgo.to offer a free Link in Bio page?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes! npgo.to includes a completely free Link in Bio page builder. Create a beautiful landing page at npgo.to/@yourname with unlimited links, 15 customizable themes, and a personalized profile. Perfect for content creators, businesses, and anyone who needs more than one link in their social media bio."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How do I shorten a URL with npgo.to?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Simply paste your long URL into the input box on npgo.to and click 'Shorten'. You'll instantly get a short npgo.to link and a QR code. Just sign in with Google to get started. It's completely free."
                                }
                            }
                        ]
                    })}
                </script>

                {/* HowTo Schema - targets 'how to shorten url' queries */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Shorten a URL for Free in Nepal",
                        "description": "Shorten any URL for free using npgo.to, Nepal's free URL shortener by Noble Stack. Get a short link and QR code instantly.",
                        "totalTime": "PT30S",
                        "tool": {
                            "@type": "HowToTool",
                            "name": "npgo.to - Free URL Shortener"
                        },
                        "step": [
                            {
                                "@type": "HowToStep",
                                "position": 1,
                                "name": "Paste Your URL",
                                "text": "Go to npgo.to and paste your long URL into the input box. Any valid URL will work.",
                                "url": "https://npgo.to/"
                            },
                            {
                                "@type": "HowToStep",
                                "position": 2,
                                "name": "Click Shorten",
                                "text": "Click the 'Shorten' button. Your short npgo.to link will be generated instantly.",
                                "url": "https://npgo.to/"
                            },
                            {
                                "@type": "HowToStep",
                                "position": 3,
                                "name": "Copy & Share",
                                "text": "Copy your short link or download the auto-generated QR code. Use it on social media, SMS, email, or print materials.",
                                "url": "https://npgo.to/"
                            }
                        ]
                    })}
                </script>
            </Head>

            {/* Hero Section - Full Width Background */}
            <section className="relative text-center -mt-20 pt-24 sm:pt-32 pb-16 sm:pb-20 md:pb-24">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 -z-10 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
                    <img
                        src="/hero.webp"
                        alt="Nepal landscape - npgo.to free URL shortener and QR code generator"
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
                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <img
                            src="/images/noblestack-logo.webp"
                            alt="NobleStack"
                            className="h-6 w-6 sm:h-7 sm:w-7"
                        />
                        <span>A NobleStack Product</span>
                    </a>

                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mt-5 max-w-2xl mx-auto"
                        style={{
                            textShadow: '0 1px 0 rgba(255,255,255,0.4), 0 -1px 0 rgba(0,0,0,0.6)'
                        }}
                    >
                        Free URL Shortner for <span className="text-primary">Nepal</span>
                    </h1>

                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mt-3">
                        Nepal's #1 free URL shortner, QR code generator & Link in Bio tool by Noble Stack. Create short links and bio pages instantly. Made for Nepali businesses & creators.
                    </p>

                    {/* URL Shortener Form */}
                    <Card className="max-w-2xl mx-auto bg-white/70 mt-8 shadow-sm">
                        <CardHeader className="pb-0 pt-4">
                            <CardTitle className="text-sm sm:text-base font-medium text-muted-foreground">Paste URL here to get started</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-4 pt-3">
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                                <div className="flex-1">
                                    <Input
                                        ref={inputRef}
                                        type="text"
                                        value={data.url}
                                        onChange={e => setData('url', e.target.value)}
                                        placeholder={animatedPlaceholder || 'Paste your long URL here...'}
                                        className={`h-11 md:h-12 bg-background text-base ${errors.url ? 'border-destructive' : ''}`}
                                    />
                                    {errors.url && (
                                        <p className="text-sm text-destructive text-left mt-1">{errors.url}</p>
                                    )}
                                </div>
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    size="lg"
                                    className="h-11 md:h-12 px-6 w-full sm:w-auto text-base"
                                >
                                    <Scissors className="h-4 w-4" />
                                    {processing ? 'Wait...' : 'Shorten'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Bio CTA + Social Icons */}
                    <div className="flex items-center justify-center gap-3 mt-5 flex-wrap">
                        <div className="flex items-center gap-2 text-muted-foreground/35">
                            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 1 1-2.88 0 1.441 1.441 0 0 1 2.88 0z"/></svg>
                            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                        </div>
                        <a
                            href="/bio"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            Need a bio page? <span className="text-primary font-medium group-hover:underline">Create one free &rarr;</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Social Proof Bar */}
            {totalLinks > 0 && (
                <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 py-1 text-center">
                        <div className="space-y-1">
                            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">{totalLinks.toLocaleString()}+</p>
                            <p className="text-xs text-muted-foreground">Links Shortened</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">&lt;1s</p>
                            <p className="text-xs text-muted-foreground">Redirect Speed</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">2000px</p>
                            <p className="text-xs text-muted-foreground">QR Resolution</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">100%</p>
                            <p className="text-xs text-muted-foreground">Free Forever</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">

                {/* Features Section */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why npgo.to? Best Free URL Shortner for Nepal</h2>
                        <p className="text-muted-foreground mt-2 text-sm sm:text-base">Fast, secure, and feature-rich URL shortening, QR code generation & Link in Bio pages for Nepali users.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 space-y-2.5">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <ArrowRight className="h-5 w-5 -rotate-45" />
                                </div>
                                <h3 className="font-semibold text-center text-sm">Free URL Shortner</h3>
                                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                                    Best free URL shortner for Nepal. Transform long URLs into short, memorable npgo.to links that are easy to share across all platforms.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 space-y-2.5">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <QrCode className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-center text-sm">Free QR Code Generator</h3>
                                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                                    Free QR code generator for Nepal. Every shortened link automatically gets a QR code. Perfect for business cards, posters & marketing materials.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 space-y-2.5">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <LayoutDashboard className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-center text-sm">Free Link Management</h3>
                                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                                    Free link management dashboard for Nepal. Track, manage and organize unlimited URLs with real-time stats and one-click actions.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 space-y-2.5">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <UserCircle className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-center text-sm">Free Link in Bio Page</h3>
                                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                                    Create a beautiful <a href="/link-in-bio" className="text-primary hover:underline">Link in Bio</a> page with all your links in one place. 15 themes, unlimited links, and a custom npgo.to/@yourname URL.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* How It Works Section */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How It Works</h2>
                        <p className="text-muted-foreground mt-2 text-sm sm:text-base max-w-xl mx-auto">
                            Create short links in seconds with our simple three-step process
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 sm:gap-10 max-w-3xl mx-auto">
                        <div className="text-center space-y-2.5">
                            <div className="mx-auto w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-base font-bold">
                                1
                            </div>
                            <h3 className="font-semibold text-sm">Paste Your URL</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Copy and paste your long URL into our shortener tool. Works with any valid web link.
                            </p>
                        </div>
                        <div className="text-center space-y-2.5">
                            <div className="mx-auto w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-base font-bold">
                                2
                            </div>
                            <h3 className="font-semibold text-sm">Get Short Link</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Instantly receive a shortened npgo.to link that's easy to share and remember.
                            </p>
                        </div>
                        <div className="text-center space-y-2.5">
                            <div className="mx-auto w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-base font-bold">
                                3
                            </div>
                            <h3 className="font-semibold text-sm">Share Anywhere</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Use your short link on social media, emails, SMS, or generate a QR code for offline sharing.
                            </p>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Use Cases Section */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Perfect For</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 space-y-2.5">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Share2 className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-center text-sm">Social Media Marketing</h3>
                                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                                    Share clean, professional links on Facebook, Twitter, Instagram, and LinkedIn. Track engagement and optimize your campaigns with shortened URLs.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 space-y-2.5">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-center text-sm">Email Campaigns</h3>
                                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                                    Make your email newsletters more clickable with short, trustworthy links. Improve deliverability and track click-through rates.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 space-y-2.5">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Printer className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-center text-sm">Print Materials</h3>
                                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                                    Generate QR codes for business cards, flyers, posters, and packaging. Bridge offline and online marketing seamlessly.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 space-y-2.5">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MessageSquare className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-center text-sm">SMS & Messaging</h3>
                                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                                    Save character space in text messages and WhatsApp. Short links are easier to type and remember for your audience.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* FAQ Section */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground mt-2 text-sm sm:text-base">Everything you need to know about Nepal's free URL shortner</p>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is the best free URL shortner for Nepal?</AccordionTrigger>
                                <AccordionContent>
                                    npgo.to by Noble Stack is Nepal's best free URL shortener. It's 100% free, just sign in with Google, and includes a free QR code generator. Perfect for Nepali businesses, marketers, and content creators who need reliable link shortening.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Is there a free QR code generator for Nepal?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! npgo.to by Noble Stack offers a completely free QR code generator for Nepal. Every shortened link automatically gets a QR code that you can download and use for business cards, flyers, posters, and marketing materials.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is npgo.to really free?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! npgo.to is 100% free URL shortner for Nepal. Create unlimited short links, generate free QR codes, and manage your URLs through our dashboard at no cost. No hidden fees, no premium tiers, no paywalls.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Do I need to create an account?</AccordionTrigger>
                                <AccordionContent>
                                    Just sign in with your Google account — it's one click! Once signed in, you can access your admin dashboard, track all your links, and manage them from one place.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>How is npgo.to different from Bit.ly?</AccordionTrigger>
                                <AccordionContent>
                                    npgo.to is a free Bit.ly alternative made specifically for Nepal. Unlike Bit.ly which has premium tiers and charges for many features, npgo.to offers URL shortening, QR code generation, and link management completely free.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger>Can I use npgo.to for my business in Nepal?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely! npgo.to is perfect for Nepali businesses. Use our free URL shortner for social media marketing, email campaigns, SMS marketing, and print materials. Generate QR codes for business cards, brochures, and banners.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7">
                                <AccordionTrigger>Who created npgo.to?</AccordionTrigger>
                                <AccordionContent>
                                    npgo.to is created by Noble Stack, a technology company based in Nepal. Noble Stack builds digital products and services for the Nepali market. Visit noblestack.io to learn more about our products and services.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-8">
                                <AccordionTrigger>How long do short links last?</AccordionTrigger>
                                <AccordionContent>
                                    Your shortened URLs are permanent and will continue working indefinitely. Noble Stack maintains high uptime to ensure your links are always accessible for Nepali users.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-9">
                                <AccordionTrigger>Is npgo.to a good TinyURL alternative for Nepal?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! npgo.to by Noble Stack is the best TinyURL alternative for Nepal. It's completely free, includes QR code generation, and is designed specifically for the Nepali market with fast, reliable performance.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-10">
                                <AccordionTrigger>Does npgo.to offer a free Link in Bio page?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! npgo.to includes a free <a href="/link-in-bio" className="text-primary hover:underline">Link in Bio</a> page builder. Create a beautiful landing page at npgo.to/@yourname with unlimited links, 15 themes, and a custom profile. Perfect for Instagram, TikTok, YouTube bios and more.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                <Footer />
            </div>

            {/* Fixed Bottom Login Banner */}
            <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-3">
                    <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0">
                            <h3 className="text-sm sm:text-base font-semibold">
                                Sign in to continue
                            </h3>
                            <p className="text-xs text-muted-foreground hidden sm:block mt-0.5">
                                Track, manage, and organize all your shortened URLs
                            </p>
                        </div>
                        <GoogleSignInButton />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

