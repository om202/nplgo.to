import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link2, QrCode, LayoutDashboard, Globe, Users, Zap, Heart, ArrowRight, BookOpen, Scissors, UserCircle } from 'lucide-react';
import { Footer } from '@/components/Footer';

export default function About() {
    return (
        <Layout
            title="About"
            description="Learn about npgo.to, Nepal's free URL shortener and QR code generator by Noble Stack. Our mission is to empower Nepali businesses and creators with free link management tools."
            canonicalPath="/about"
        >
            {/* About page structured data */}
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "About npgo.to - Free URL Shortener for Nepal",
                        "description": "Learn about npgo.to, Nepal's free URL shortener and QR code generator by Noble Stack.",
                        "url": "https://npgo.to/about",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "Noble Stack",
                            "alternateName": "NobleStack",
                            "url": "https://www.noblestack.io",
                            "description": "Noble Stack is a technology company based in Nepal, dedicated to building digital products and services for the Nepali market.",
                            "foundingLocation": {
                                "@type": "Place",
                                "name": "Nepal"
                            },
                            "areaServed": {
                                "@type": "Country",
                                "name": "Nepal"
                            },
                            "owns": {
                                "@type": "WebApplication",
                                "name": "npgo.to",
                                "url": "https://npgo.to",
                                "applicationCategory": "Utility",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "0",
                                    "priceCurrency": "NPR"
                                }
                            }
                        }
                    })}
                </script>
            </Head>
            {/* Hero Section - Full Width Background */}
            <section className="relative text-center pt-20 sm:pt-24 md:pt-28 pb-28 sm:pb-36 md:pb-44 -mt-20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 -z-10">
                    <img
                        src="/hero.webp"
                        alt="Nepal landscape - about npgo.to by Noble Stack"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/75 to-background"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 px-4 sm:px-6 md:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
                        About <span className="text-primary">npgo.to</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mt-3">
                        Nepal's #1 free URL shortener, QR code generator, and Link in Bio tool, built by Noble Stack for Nepali businesses and creators.
                    </p>
                </div>
            </section>

            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 -mt-12 sm:-mt-16 md:-mt-20">

                {/* Mission Section */}
                <section className="py-16 sm:py-20">
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Our Mission</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed">
                            To provide Nepal with a completely free, reliable, and easy-to-use suite of link tools. From URL shortening and QR codes to Link in Bio pages, we believe every Nepali business, marketer, and creator deserves access to professional link management tools without paying expensive subscription fees.
                        </p>
                    </div>
                </section>

                <Separator />

                {/* What We Offer */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What We Offer</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 space-y-2.5">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Link2 className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-sm">Free URL Shortening</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Transform any long URL into a short, memorable npgo.to link. Create unlimited links at no cost, forever.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 space-y-2.5">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <QrCode className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-sm">Free QR Code Generator</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Every shortened link automatically gets a QR code. Download and use for business cards, posters, and marketing materials.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 space-y-2.5">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <LayoutDashboard className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-sm">Link Management Dashboard</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Track and manage all your links in one place. View statistics, copy links, and organize your URLs efficiently.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 space-y-2.5">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Zap className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-sm">Fast & Reliable</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Lightning-fast redirects with high uptime. Your links will always work, giving your audience a seamless experience.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 space-y-2.5">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <UserCircle className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-sm">Free Link in Bio</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Create a beautiful <a href="/link-in-bio" className="text-primary hover:underline">Link in Bio</a> page at npgo.to/@yourname. Share all your important links from one page. 15 themes, unlimited links.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* About Noble Stack */}
                <section className="py-16 sm:py-20">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                            <img
                                src="/images/noblestack-logo.webp"
                                alt="Noble Stack Logo"
                                className="h-20 w-20"
                            />
                        </div>
                        <div className="space-y-3 text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Built by Noble Stack</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Noble Stack is a technology company based in Nepal, dedicated to building digital products and services for the Nepali market. We believe in creating tools that empower local businesses and creators to succeed in the digital world.
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                npgo.to is one of our flagship products, designed specifically for the needs of Nepali users. We're committed to keeping it free and continuously improving it based on community feedback.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start pt-1">
                                <a
                                    href="https://www.noblestack.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="outline" size="sm" className="gap-2">
                                        Visit Noble Stack <ArrowRight className="h-3.5 w-3.5" />
                                    </Button>
                                </a>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-x-6 gap-y-1.5 text-xs text-muted-foreground pt-1">
                                <a href="mailto:support@noblestack.io" className="hover:text-foreground transition-colors">
                                    support@noblestack.io
                                </a>
                                <a href="mailto:info@noblestack.io" className="hover:text-foreground transition-colors">
                                    info@noblestack.io
                                </a>
                                <a href="tel:+9779851411602" className="hover:text-foreground transition-colors">
                                    +977 985-1411602
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Why Nepal */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why Nepal?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 sm:gap-10 max-w-3xl mx-auto">
                        <div className="text-center space-y-2.5">
                            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Globe className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-sm">Local Focus</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Built specifically for Nepali businesses and users, understanding local needs and challenges.
                            </p>
                        </div>
                        <div className="text-center space-y-2.5">
                            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Users className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-sm">Community Driven</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                We listen to Nepali users and continuously improve based on community feedback and needs.
                            </p>
                        </div>
                        <div className="text-center space-y-2.5">
                            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Heart className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-sm">Made with Love</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Created with passion by a Nepali team who wants to see local businesses thrive online.
                            </p>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Stats/Numbers */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">npgo.to by the Numbers</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        <div className="text-center space-y-1">
                            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">100%</p>
                            <p className="text-xs text-muted-foreground">Free Forever</p>
                        </div>
                        <div className="text-center space-y-1">
                            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">&lt;1s</p>
                            <p className="text-xs text-muted-foreground">Redirect Speed</p>
                        </div>
                        <div className="text-center space-y-1">
                            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">2000px</p>
                            <p className="text-xs text-muted-foreground">QR Code Resolution</p>
                        </div>
                        <div className="text-center space-y-1">
                            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">24/7</p>
                            <p className="text-xs text-muted-foreground">Always Available</p>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Internal Cross-Links */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Learn More</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <a href="/how-to-shorten-url" className="block">
                            <Card className="hover:border-primary/50 border-border/60 transition-colors h-full">
                                <CardContent className="pt-5 pb-5">
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="h-6 w-6 text-primary shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-sm">How to Shorten a URL</h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">Step-by-step guide to creating short links</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                        <a href="/qr-code-generator" className="block">
                            <Card className="hover:border-primary/50 border-border/60 transition-colors h-full">
                                <CardContent className="pt-5 pb-5">
                                    <div className="flex items-center gap-3">
                                        <QrCode className="h-6 w-6 text-primary shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-sm">QR Codes Guide</h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">What QR codes are, use cases & free generator</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                        <a href="/url-shortener" className="block">
                            <Card className="hover:border-primary/50 border-border/60 transition-colors h-full">
                                <CardContent className="pt-5 pb-5">
                                    <div className="flex items-center gap-3">
                                        <Scissors className="h-6 w-6 text-primary shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-sm">URL Shortener Guide</h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">Complete guide to URL shortening for Nepal</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                        <a href="/link-in-bio" className="block">
                            <Card className="hover:border-primary/50 border-border/60 transition-colors h-full">
                                <CardContent className="pt-5 pb-5">
                                    <div className="flex items-center gap-3">
                                        <UserCircle className="h-6 w-6 text-primary shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-sm">Link in Bio Guide</h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">Create a free bio page for all your links</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    </div>
                </section>

                <Separator />

                {/* CTA */}
                <section className="text-center py-16 sm:py-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to Get Started?</h2>
                    <p className="text-muted-foreground text-sm sm:text-base mt-2">
                        Create short links, QR codes, and bio pages in seconds. Completely free.
                    </p>
                    <a href="/" className="inline-block mt-6">
                        <Button size="lg" className="gap-2">
                            Start Shortening URLs <ArrowRight className="h-4 w-4" />
                        </Button>
                    </a>
                </section>
                <Footer />
            </div>
        </Layout>
    );
}
