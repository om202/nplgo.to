import Layout from '@/Layouts/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link2, QrCode, LayoutDashboard, Globe, Users, Zap, Heart, ArrowRight } from 'lucide-react';
import { Footer } from '@/components/Footer';

export default function About() {
    return (
        <Layout title="About">
            {/* Hero Section - Full Width Background */}
            <section className="relative text-center space-y-4 sm:space-y-6 pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 -mt-20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 -z-10">
                    <img
                        src="/hero.webp"
                        alt="Nepal"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
                        About <span className="text-primary">npgo.to</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto tracking-normal px-4 mt-4">
                        Nepal's #1 free URL shortener and QR code generator, built by Noble Stack for Nepali businesses and creators.
                    </p>
                </div>
            </section>

            <div className="w-full max-w-4xl mx-auto px-4 space-y-12 pb-12">

                {/* Mission Section */}
                <section className="space-y-6">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            To provide Nepal with a completely free, reliable, and easy-to-use URL shortening service. We believe every Nepali business, marketer, and creator deserves access to professional link management tools without paying expensive subscription fees.
                        </p>
                    </div>
                </section>

                {/* What We Offer */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-center">What We Offer</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Link2 className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Free URL Shortening</h3>
                                <p className="text-muted-foreground">
                                    Transform any long URL into a short, memorable npgo.to link. Create unlimited links at no cost, forever.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <QrCode className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Free QR Code Generator</h3>
                                <p className="text-muted-foreground">
                                    Every shortened link automatically gets a QR code. Download and use for business cards, posters, and marketing materials.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <LayoutDashboard className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Link Management Dashboard</h3>
                                <p className="text-muted-foreground">
                                    Track and manage all your links in one place. View statistics, copy links, and organize your URLs efficiently.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Fast & Reliable</h3>
                                <p className="text-muted-foreground">
                                    Lightning-fast redirects with high uptime. Your links will always work, giving your audience a seamless experience.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* About Noble Stack */}
                <section className="space-y-6">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                            <img
                                src="/images/noblestack-logo.webp"
                                alt="Noble Stack Logo"
                                className="h-24 w-24"
                            />
                        </div>
                        <div className="space-y-4 text-center md:text-left">
                            <h2 className="text-2xl font-semibold">Built by Noble Stack</h2>
                            <p className="text-muted-foreground">
                                Noble Stack is a technology company based in Nepal, dedicated to building digital products and services for the Nepali market. We believe in creating tools that empower local businesses and creators to succeed in the digital world.
                            </p>
                            <p className="text-muted-foreground">
                                npgo.to is one of our flagship products, designed specifically for the needs of Nepali users. We're committed to keeping it free and continuously improving it based on community feedback.
                            </p>
                            <a
                                href="https://www.noblestack.io"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" className="gap-2">
                                    Visit Noble Stack <ArrowRight className="h-4 w-4" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Why Nepal */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-center">Why Nepal?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center space-y-3">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Globe className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold">Local Focus</h3>
                            <p className="text-sm text-muted-foreground">
                                Built specifically for Nepali businesses and users, understanding local needs and challenges.
                            </p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold">Community Driven</h3>
                            <p className="text-sm text-muted-foreground">
                                We listen to Nepali users and continuously improve based on community feedback and needs.
                            </p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Heart className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold">Made with Love</h3>
                            <p className="text-sm text-muted-foreground">
                                Created with passion by a Nepali team who wants to see local businesses thrive online.
                            </p>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Stats/Numbers */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-center">npgo.to by the Numbers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-primary">100%</p>
                            <p className="text-sm text-muted-foreground">Free Forever</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-primary">∞</p>
                            <p className="text-sm text-muted-foreground">Unlimited Links</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-primary">0</p>
                            <p className="text-sm text-muted-foreground">Hidden Fees</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-primary">24/7</p>
                            <p className="text-sm text-muted-foreground">Always Available</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center space-y-4 py-8">
                    <h2 className="text-2xl font-semibold">Ready to Get Started?</h2>
                    <p className="text-muted-foreground">
                        Start shortening your URLs and generating QR codes for free, right now.
                    </p>
                    <a href="/">
                        <Button size="lg" className="gap-2">
                            Start Shortening URLs <ArrowRight className="h-4 w-4" />
                        </Button>
                    </a>
                </section>
            </div>

            <Footer />
        </Layout>
    );
}
