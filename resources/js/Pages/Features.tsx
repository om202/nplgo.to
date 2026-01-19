import Layout from '@/Layouts/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import {
    Link2,
    QrCode,
    LayoutDashboard,
    UserCheck,
    Zap,
    Shield,
    Smartphone,
    Globe,
    Download,
    Search,
    Trash2,
    Copy,
    ExternalLink,
    ArrowRight,
    CheckCircle
} from 'lucide-react';

export default function Features() {
    return (
        <Layout title="Features">
            {/* Hero Section - Full Width Background */}
            <section className="relative text-center space-y-4 sm:space-y-6 pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 -mt-20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 -z-10">
                    <img
                        src="/hero.jpg"
                        alt="Nepal"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
                        Features of <span className="text-primary">npgo.to</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto tracking-normal px-4 mt-4">
                        Everything you need for URL shortening and QR code generation, completely free. No premium tiers, no hidden fees.
                    </p>
                </div>
            </section>

            <div className="w-full max-w-5xl mx-auto px-4 space-y-12 pb-12">

                {/* Main Features */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-semibold text-center">Core Features</h2>

                    {/* Feature 1: URL Shortening */}
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Link2 className="h-8 w-8" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold">Free URL Shortener for Nepal</h3>
                                    <p className="text-muted-foreground">
                                        Transform any long URL into a short, memorable npgo.to link. Perfect for social media, SMS, email marketing, and print materials. Our URL shortener is designed specifically for the Nepali market.
                                    </p>
                                    <ul className="grid gap-2">
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                            Unlimited shortened URLs
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                            Permanent links that never expire
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                            Lightning-fast redirects
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                            Works with any valid URL
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Feature 2: QR Code Generator */}
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <QrCode className="h-8 w-8" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold">Free QR Code Generator for Nepal</h3>
                                    <p className="text-muted-foreground">
                                        Every shortened link automatically gets a QR code. Download and use for business cards, flyers, posters, product packaging, and any print materials. The best free QR code generator for Nepali businesses.
                                    </p>
                                    <ul className="grid gap-2">
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                            Automatic QR code for every link
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                            High-quality PNG download
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                            Print-ready resolution
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                            Works on all devices
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Feature 3: Dashboard */}
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <LayoutDashboard className="h-8 w-8" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold">Free Link Management Dashboard</h3>
                                    <p className="text-muted-foreground">
                                        Keep all your shortened URLs organized in one powerful dashboard. View, manage, and control all your links with ease. The best free link management solution for Nepal.
                                    </p>
                                    <ul className="grid md:grid-cols-2 gap-2">
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Search className="h-4 w-4 text-primary" />
                                            Search and filter links
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Copy className="h-4 w-4 text-primary" />
                                            One-click copy
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <ExternalLink className="h-4 w-4 text-primary" />
                                            Quick open links
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Download className="h-4 w-4 text-primary" />
                                            Download QR codes
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Trash2 className="h-4 w-4 text-primary" />
                                            Delete unwanted links
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <LayoutDashboard className="h-4 w-4 text-primary" />
                                            View click statistics
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Feature 4: Google Sign-In */}
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <UserCheck className="h-8 w-8" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold">Secure Google Sign-In</h3>
                                    <p className="text-muted-foreground">
                                        Sign in securely with your Google account. No need to create another username and password. Your links are safely associated with your account and accessible from any device.
                                    </p>
                                    <ul className="grid gap-2">
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                            One-click Google authentication
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                            No password to remember
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                            Access from any device
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                            Secure OAuth 2.0 protocol
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Additional Features */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-semibold text-center">Why Choose npgo.to?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardContent className="pt-6 text-center space-y-3">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold">Lightning Fast</h3>
                                <p className="text-sm text-muted-foreground">
                                    Optimized for speed. Your short links redirect instantly, providing the best experience for your audience.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center space-y-3">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Shield className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold">Secure & Reliable</h3>
                                <p className="text-sm text-muted-foreground">
                                    Built with security in mind. Your data is protected and your links are always available.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center space-y-3">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Smartphone className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold">Mobile Friendly</h3>
                                <p className="text-sm text-muted-foreground">
                                    Fully responsive design. Create and manage short links from your phone, tablet, or desktop.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center space-y-3">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Globe className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold">Made for Nepal</h3>
                                <p className="text-sm text-muted-foreground">
                                    Designed specifically for Nepali businesses and users. Built by Noble Stack in Nepal.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center space-y-3">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                                    <CheckCircle className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold">100% Free</h3>
                                <p className="text-sm text-muted-foreground">
                                    No premium tiers, no hidden fees, no paywalls. All features are completely free forever.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center space-y-3">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Link2 className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold">Permanent Links</h3>
                                <p className="text-sm text-muted-foreground">
                                    Your shortened URLs never expire. Create once, use forever. No renewal or maintenance needed.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* Comparison */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-center">npgo.to vs Other URL Shorteners</h2>
                    <Card>
                        <CardContent className="pt-6">
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
                                            <td className="py-3 px-4">Free URL Shortening</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓ Unlimited</td>
                                            <td className="text-center py-3 px-4 text-yellow-500">Limited</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">Free QR Codes</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓ Unlimited</td>
                                            <td className="text-center py-3 px-4 text-red-500">Paid</td>
                                            <td className="text-center py-3 px-4 text-red-500">✗</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">Link Management Dashboard</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓ Free</td>
                                            <td className="text-center py-3 px-4 text-yellow-500">Limited Free</td>
                                            <td className="text-center py-3 px-4 text-red-500">✗</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">Nepal-Focused</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓</td>
                                            <td className="text-center py-3 px-4 text-red-500">✗</td>
                                            <td className="text-center py-3 px-4 text-red-500">✗</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">No Premium Paywalls</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓</td>
                                            <td className="text-center py-3 px-4 text-red-500">✗</td>
                                            <td className="text-center py-3 px-4 text-yellow-500">Partial</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* CTA */}
                <section className="text-center space-y-4 py-8">
                    <h2 className="text-2xl font-semibold">Start Using npgo.to Today</h2>
                    <p className="text-muted-foreground">
                        Join Nepali businesses and creators using the best free URL shortener for Nepal.
                    </p>
                    <a href="/">
                        <Button size="lg" className="gap-2">
                            Get Started Free <ArrowRight className="h-4 w-4" />
                        </Button>
                    </a>
                </section>
            </div>

            <Footer />
        </Layout>
    );
}
