import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import {
    Scissors,
    ArrowRight,
    CheckCircle,
    QrCode,
    Globe,
    Megaphone,
    MessageSquare,
    Mail,
    Share2,
    BarChart3,
    ShieldCheck,
    Smartphone,
    Printer,
    TrendingUp,
    Building2,
    Mountain,
    ShoppingBag,
    UtensilsCrossed,
    BookOpen,
    Zap,
    Users,
    Copy,
} from 'lucide-react';

export default function UrlShortener() {
    return (
        <Layout
            title="URL Shortener: Complete Guide, Benefits & Free Tool for Nepal"
            description="Everything you need to know about URL shorteners: what they are, how they work, all benefits, and why they matter for Nepali businesses. Shorten URLs for free with npgo.to by Noble Stack."
            canonicalPath="/url-shortener"
        >
            {/* Page-specific structured data */}
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "npgo.to Free URL Shortener",
                        "applicationCategory": "UtilitiesApplication",
                        "operatingSystem": "Web",
                        "description": "Free URL shortener for Nepal. Shorten any URL instantly, get a memorable npgo.to link, and track clicks. No signup required.",
                        "url": "https://npgo.to/url-shortener",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "NPR"
                        },
                        "creator": {
                            "@type": "Organization",
                            "name": "Noble Stack",
                            "url": "https://www.noblestack.io"
                        }
                    })}
                </script>

                {/* FAQPage schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is a URL shortener?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A URL shortener is a tool that converts long web addresses into short, compact links. For example, a 120-character URL becomes a 15-character npgo.to link that redirects to the same destination. This makes links easier to share, remember, and track."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is npgo.to free to use?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, npgo.to is 100% free with no limits. You can shorten unlimited URLs, generate unlimited QR codes, and manage all your links from a dashboard. No premium tiers, no hidden fees."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do short links from npgo.to expire?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No. Short links from npgo.to are permanent and never expire. Once created, your short link will continue redirecting to the destination URL indefinitely with unlimited clicks."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Why do Nepali businesses need a URL shortener?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Nepali businesses need URL shorteners to share clean links on social media, print materials, and messaging apps like Viber and WhatsApp. Short links look more professional, are easier to type on mobile phones, and come with free QR codes for offline marketing."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How is npgo.to different from Bit.ly?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "npgo.to is completely free with no premium tiers, includes free high-resolution QR codes with every link, requires no signup, and is built specifically for the Nepal market by Noble Stack. Bit.ly charges for QR codes, limits free-tier features, and requires account creation."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I track clicks on my short links?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Sign in with Google to access your personal dashboard where you can view all your shortened links, monitor click counts, and manage your URLs in one place."
                                }
                            }
                        ]
                    })}
                </script>
            </Head>

            {/* Hero Section */}
            <section className="relative text-center pt-20 sm:pt-24 md:pt-28 pb-28 sm:pb-36 md:pb-44 -mt-20">
                <div className="absolute inset-0 -z-10">
                    <img
                        src="/hero.webp"
                        alt="Nepal landscape - complete URL shortener guide for Nepal"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/75 to-background"></div>
                </div>

                <div className="relative z-10 px-4 sm:px-6 md:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
                        Free <span className="text-primary">URL Shortener</span> for Nepal
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mt-3">
                        Understand what URL shorteners are, why they matter, and how Nepali businesses use short links to share smarter, market better, and grow faster.
                    </p>
                    <div className="mt-6">
                        <a href="/">
                            <Button size="lg" className="gap-2">
                                <Scissors className="h-5 w-5" />
                                Shorten a URL for Free
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 -mt-12 sm:-mt-16 md:-mt-20">

                {/* What is a URL Shortener? */}
                <section className="py-16 sm:py-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">What is a URL Shortener?</h2>
                    <div className="space-y-4 text-muted-foreground max-w-3xl mx-auto">
                        <p>
                            A <strong className="text-foreground">URL shortener</strong> is a tool that takes a long web address and converts it into a short, compact link that redirects to the same destination. For example, a 120-character URL like <code className="text-xs bg-muted px-1.5 py-0.5 rounded">https://example.com/products/category/item?ref=campaign123</code> becomes a clean, memorable <code className="text-xs bg-muted px-1.5 py-0.5 rounded">npgo.to/abc123</code>.
                        </p>
                        <p>
                            The concept originated in the early 2000s when the web started producing increasingly complex URLs with tracking parameters, session IDs, and deep folder structures. Sharing these long URLs on SMS, print materials, or character-limited platforms like Twitter became impractical.
                        </p>
                        <p>
                            Today, URL shorteners are an essential part of the <strong className="text-foreground">digital marketing toolkit</strong>. They do more than just make links shorter. They make links <strong className="text-foreground">cleaner, more shareable, more trackable, and more professional</strong>. A short link builds trust, fits anywhere, and can be paired with QR codes for offline-to-online marketing.
                        </p>
                    </div>
                </section>

                <Separator />

                {/* How URL Shorteners Work */}
                <section className="py-16 sm:py-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">How URL Shorteners Work</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardContent className="pt-6 text-center space-y-4">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Copy className="h-8 w-8" />
                                </div>
                                <h3 className="font-semibold text-sm">1. Paste</h3>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    You paste a long URL into the shortener. The system validates the URL and generates a unique short code using encoding algorithms.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center space-y-4">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Scissors className="h-8 w-8" />
                                </div>
                                <h3 className="font-semibold text-sm">2. Shorten</h3>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    The original URL is stored in a database, mapped to the short code. A compact link like npgo.to/abc123 is created and ready to share.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center space-y-4">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <ArrowRight className="h-8 w-8" />
                                </div>
                                <h3 className="font-semibold text-sm">3. Redirect</h3>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    When someone clicks the short link, the server looks up the short code, finds the original URL, and instantly redirects the visitor to the destination.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* Benefits of URL Shortening */}
                <section className="py-16 sm:py-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">Benefits of URL Shortening</h2>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                        URL shorteners solve multiple problems across digital and offline channels. Here are the key benefits that make them indispensable for modern marketing:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Share2 className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Easier Sharing</h3>
                                <p className="text-muted-foreground">
                                    Short links are easier to share on social media, messaging apps, SMS, and email. They look clean in posts, do not break across multiple lines, and are easy to copy and paste on any device.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Professional Appearance</h3>
                                <p className="text-muted-foreground">
                                    Long URLs with tracking parameters and random characters look messy and untrustworthy. A clean short link like npgo.to/menu looks professional, builds trust, and increases click-through rates.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <BarChart3 className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Click Tracking & Analytics</h3>
                                <p className="text-muted-foreground">
                                    Every short link can be tracked. Know how many people clicked your link, when they clicked, and how your campaigns are performing. Data-driven decisions start with measurable links.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Printer className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Print-Friendly</h3>
                                <p className="text-muted-foreground">
                                    Short links are ideal for print materials like business cards, flyers, and posters. A link like npgo.to/shop is easy to read and type manually. Pair it with a QR code for instant scanning.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Smartphone className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Mobile Optimized</h3>
                                <p className="text-muted-foreground">
                                    In Nepal, most internet access happens on mobile phones. Short links are easier to type on small keyboards, load faster, and do not get truncated in SMS or messaging apps like Viber and WhatsApp.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <QrCode className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Free QR Code with Every Link</h3>
                                <p className="text-muted-foreground">
                                    On npgo.to, every shortened link automatically generates a free high-resolution QR code (2000×2000px). Use the short link for digital channels and the QR code for print. One action, two tools.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* All Use Cases */}
                <section className="py-16 sm:py-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">Where to Use Short Links</h2>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                        Short links are used across every industry and channel. Here are the most impactful use cases:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Megaphone className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Social Media Marketing</h3>
                                <p className="text-muted-foreground">
                                    Share clean links on Facebook, Instagram bio, TikTok, and Twitter. Short links look professional in posts and stories, and let you track which platforms drive the most engagement.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MessageSquare className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Viber, WhatsApp & SMS</h3>
                                <p className="text-muted-foreground">
                                    Long URLs get broken or truncated in messaging apps. Short links stay intact, look clean in message bubbles, and are easy to tap on mobile. Essential for customer communication in Nepal.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Email Campaigns</h3>
                                <p className="text-muted-foreground">
                                    Use short links in email newsletters and promotional emails. They reduce visual clutter, prevent link-breaking in different email clients, and let you measure which emails get the most clicks.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Printer className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Print Materials</h3>
                                <p className="text-muted-foreground">
                                    Put short links on business cards, brochures, flyers, and banners. A link like npgo.to/menu is easy for customers to read and type manually from physical materials.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Globe className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Google Drive & Documents</h3>
                                <p className="text-muted-foreground">
                                    Google Drive and Docs generate extremely long URLs. Shorten them before sharing with colleagues, students, or clients. A clean link is easier to include in presentations and reports.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <ShoppingBag className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">E-Commerce & Product Links</h3>
                                <p className="text-muted-foreground">
                                    Product URLs on platforms like Daraz, Amazon, and Shopify are notoriously long. Shorten them before sharing on social media or in customer messages for a cleaner, more trustworthy experience.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <BookOpen className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Education & Resources</h3>
                                <p className="text-muted-foreground">
                                    Teachers and trainers can shorten links to assignment portals, YouTube tutorials, Google Forms, and online resources. Students can easily type short links from a whiteboard or printed handout.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <BarChart3 className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Campaign Tracking</h3>
                                <p className="text-muted-foreground">
                                    Create separate short links for each marketing channel (Facebook, Viber, email, print) to see which channel drives the most traffic. Use your npgo.to dashboard to compare performance.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* URL Shortening for Nepal */}
                <section className="py-16 sm:py-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">URL Shortening for Nepal: Why It Matters</h2>
                    <div className="space-y-4 text-muted-foreground max-w-3xl mx-auto">
                        <p>
                            Nepal's digital landscape is uniquely mobile-first. With over <strong className="text-foreground">22 million internet users</strong> and the vast majority accessing the web through smartphones, how you share a link directly impacts whether someone clicks on it.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MessageSquare className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Viber is Nepal's Primary Channel</h3>
                                <p className="text-muted-foreground">
                                    Viber is the most-used messaging app in Nepal, and businesses share links through Viber groups, communities, and direct messages daily. Long URLs look spammy in Viber chats. Short links from npgo.to stay clean, build trust, and get more clicks.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <UtensilsCrossed className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Small Businesses Going Online</h3>
                                <p className="text-muted-foreground">
                                    From restaurants in Thamel sharing their menu link to boutiques in New Road sharing their Instagram shop, Nepali small businesses need clean, professional URLs. npgo.to makes every business link look polished without any cost.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Mountain className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Tourism & Hospitality</h3>
                                <p className="text-muted-foreground">
                                    Hotels, trekking agencies, and tour operators share booking links with international visitors over email and WhatsApp. A clean npgo.to link looks more credible than a long, complex URL with tracking parameters.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Users className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Freelancers & Creators</h3>
                                <p className="text-muted-foreground">
                                    Nepali freelancers, YouTubers, and content creators use short links in their bios, video descriptions, and social media profiles. A memorable npgo.to link is easier for followers to remember and share.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="border-primary/20 bg-primary/5">
                        <CardContent className="pt-6 space-y-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <TrendingUp className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-sm">The Bottom Line for Nepali Businesses</h3>
                            <p className="text-muted-foreground">
                                In a mobile-first market where links are shared primarily through messaging apps, a short, clean URL is not a luxury. It is a necessity. npgo.to gives every Nepali business, freelancer, and creator access to professional link management for free. No subscription, no premium tier, no limits.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Why Choose npgo.to */}
                <section className="py-16 sm:py-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">Why Choose npgo.to?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                                    <CheckCircle className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">100% Free, No Limits</h3>
                                <p className="text-muted-foreground">
                                    Unlike Bit.ly which restricts free users, npgo.to gives you unlimited short links, unlimited QR codes, and full dashboard access completely free. No credit card, no trial periods.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Instant, No Signup Required</h3>
                                <p className="text-muted-foreground">
                                    Paste a URL, click Shorten, and you are done in under 3 seconds. No account creation needed to start shortening. Sign in with Google only if you want to manage your links later.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <QrCode className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Free QR Code with Every Link</h3>
                                <p className="text-muted-foreground">
                                    Every shortened link automatically generates a high-resolution QR code at 2000×2000px. Download and use it on business cards, posters, packaging, and any print material.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Building2 className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Built for Nepal, by Nepal</h3>
                                <p className="text-muted-foreground">
                                    Created by <a href="https://www.noblestack.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Noble Stack</a>, a Nepali technology company. Designed for Nepali businesses, optimized for the local market, and committed to staying free for the community.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* Comparison */}
                <section className="py-16 sm:py-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">npgo.to vs Other URL Shorteners</h2>
                    <Card>
                        <CardContent className="pt-5 pb-5">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-3 px-4 font-semibold">Feature</th>
                                            <th className="text-center py-3 px-4 font-semibold text-primary">npgo.to</th>
                                            <th className="text-center py-3 px-4 font-semibold">Bit.ly</th>
                                            <th className="text-center py-3 px-4 font-semibold">TinyURL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">Unlimited Short Links</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓ Free</td>
                                            <td className="text-center py-3 px-4 text-yellow-500">Limited Free</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓ Free</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">Free QR Codes</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓ 2000×2000px</td>
                                            <td className="text-center py-3 px-4 text-red-500">Paid Only</td>
                                            <td className="text-center py-3 px-4 text-red-500">✗</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">Link Management Dashboard</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓ Free</td>
                                            <td className="text-center py-3 px-4 text-yellow-500">Limited</td>
                                            <td className="text-center py-3 px-4 text-red-500">Paid</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">No Signup Required</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓</td>
                                            <td className="text-center py-3 px-4 text-red-500">✗</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">Nepal-Focused</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓</td>
                                            <td className="text-center py-3 px-4 text-red-500">✗</td>
                                            <td className="text-center py-3 px-4 text-red-500">✗</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Visible FAQ Section */}
                <section className="py-16 sm:py-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">URL Shortener FAQs</h2>
                    <div className="space-y-4">
                        <Card>
                            <CardContent className="pt-5 pb-5">
                                <h3 className="font-semibold text-sm mb-1.5">What is a URL shortener and why should I use one?</h3>
                                <p className="text-muted-foreground">
                                    A URL shortener converts long web addresses into short, compact links. You should use one because short links are easier to share, look more professional, are less likely to break in messages, and can be tracked to measure engagement. On npgo.to, you also get a free QR code with every link.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-5 pb-5">
                                <h3 className="font-semibold text-sm mb-1.5">Is npgo.to really free?</h3>
                                <p className="text-muted-foreground">
                                    Yes, 100% free with no limits. Unlike competitors that restrict features behind paid plans, npgo.to gives you unlimited short links, high-resolution QR codes, and dashboard access without any cost. Built by <a href="https://www.noblestack.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Noble Stack</a> as a free service for Nepal.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-5 pb-5">
                                <h3 className="font-semibold text-sm mb-1.5">Do short links expire?</h3>
                                <p className="text-muted-foreground">
                                    No. Short links from npgo.to are permanent and never expire. Once created, your short link will continue redirecting to your destination URL indefinitely with unlimited clicks.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-5 pb-5">
                                <h3 className="font-semibold text-sm mb-1.5">Why do Nepali businesses need a URL shortener?</h3>
                                <p className="text-muted-foreground">
                                    Nepali businesses rely heavily on Viber, WhatsApp, Facebook, and SMS to reach customers. Long URLs look spammy in these channels and often break. Short links from npgo.to stay intact, look professional, and come with free QR codes for print materials like visiting cards, flyers, and menus.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-5 pb-5">
                                <h3 className="font-semibold text-sm mb-1.5">Can I track how many people click my short link?</h3>
                                <p className="text-muted-foreground">
                                    Yes. Sign in with your Google account to access your personal npgo.to dashboard. You can view all your shortened links, see click counts, copy links, and manage everything from one place.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-5 pb-5">
                                <h3 className="font-semibold text-sm mb-1.5">What happens if I shorten the same URL twice?</h3>
                                <p className="text-muted-foreground">
                                    npgo.to detects duplicates automatically. If you shorten the same URL twice, it returns the existing short link instead of creating a new one. No wasted links, no duplicates.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-5 pb-5">
                                <h3 className="font-semibold text-sm mb-1.5">How is npgo.to different from Bit.ly?</h3>
                                <p className="text-muted-foreground">
                                    npgo.to is completely free with no premium tiers, includes free 2000×2000px QR codes with every link, requires no signup to start, and is built specifically for the Nepal market by <a href="https://www.noblestack.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Noble Stack</a>. Bit.ly charges for QR codes, limits free-tier link creation, and requires account creation.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* Internal Cross-Links */}
                <section className="py-16 sm:py-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">Explore More</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <a href="/qr-code-generator" className="block">
                            <Card className="hover:border-primary/50 border-border/60 transition-colors h-full">
                                <CardContent className="pt-5 pb-5">
                                    <div className="flex items-center gap-3">
                                        <QrCode className="h-6 w-6 text-primary shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-sm">QR Codes: Complete Guide</h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">What QR codes are, use cases, and free generator for Nepal</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                        <a href="/how-to-shorten-url" className="block">
                            <Card className="hover:border-primary/50 border-border/60 transition-colors h-full">
                                <CardContent className="pt-5 pb-5">
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="h-6 w-6 text-primary shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-sm">How to Shorten a URL</h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">Step-by-step guide with tips for better short links</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-16 sm:py-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Shorten Your First URL for Free</h2>
                    <p className="text-muted-foreground text-sm sm:text-base mt-2">
                        Paste a URL, get a short link and QR code. Free forever, no signup.
                    </p>
                    <a href="/" className="inline-block mt-6">
                        <Button size="lg" className="gap-2 w-full sm:w-auto">
                            Shorten a URL Now <ArrowRight className="h-4 w-4" />
                        </Button>
                    </a>
                </section>

                <Footer />
            </div>
        </Layout>
    );
}
