import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
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
        <Layout
            title="Features"
            description="Explore all npgo.to features: free URL shortening, QR code generation, link management dashboard, and secure Google Sign-In. Compare with Bit.ly and TinyURL. 100% free for Nepal."
            canonicalPath="/features"
        >
            {/* Features page structured data */}
            <Head>
                {/* ItemList Schema for features */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "npgo.to Features",
                        "description": "Complete list of features offered by npgo.to, Nepal's free URL shortener and QR code generator.",
                        "url": "https://npgo.to/features",
                        "numberOfItems": 4,
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Free URL Shortener for Nepal",
                                "description": "Transform any long URL into a short, memorable npgo.to link. Unlimited shortened URLs, permanent links, lightning-fast redirects."
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Free QR Code Generator for Nepal",
                                "description": "Every shortened link automatically gets a QR code. Download for business cards, flyers, posters, and marketing materials."
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Free Link Management Dashboard",
                                "description": "Track and manage all your shortened URLs in one powerful dashboard with search, copy, delete, and statistics features."
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "Secure Google Sign-In",
                                "description": "Sign in securely with your Google account. No passwords needed. Access your links from any device."
                            }
                        ]
                    })}
                </script>

                {/* FAQPage Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Is npgo.to really 100% free?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes! npgo.to is completely free with no premium tiers, no hidden fees, and no paywalls. All features including URL shortening, QR code generation, and link management are free forever."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What features does npgo.to offer?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "npgo.to offers free URL shortening with unlimited links, automatic QR code generation for every link, a full link management dashboard with search and statistics, and secure Google Sign-In authentication."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How does npgo.to compare to Bit.ly?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "npgo.to offers unlimited free URL shortening and QR codes while Bit.ly limits free usage and charges for QR codes. npgo.to is specifically designed for the Nepal market with a free link management dashboard."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do I need to sign in to use npgo.to?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No! You can shorten URLs instantly without signing in. Optionally sign in with Google to access your personal dashboard where you can track and manage all your links."
                                }
                            }
                        ]
                    })}
                </script>
            </Head>
            {/* Hero Section - Full Width Background */}
            <section className="relative text-center pt-20 sm:pt-24 md:pt-28 pb-28 sm:pb-36 md:pb-44 -mt-20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 -z-10">
                    <img
                        src="/hero.webp"
                        alt="Nepal landscape - npgo.to features overview"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/75 to-background"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 px-4 sm:px-6 md:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
                        Features of <span className="text-primary">npgo.to</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mt-3">
                        Everything you need for URL shortening and QR code generation, completely free. No premium tiers, no hidden fees.
                    </p>
                </div>
            </section>

            <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 -mt-12 sm:-mt-16 md:-mt-20">

                {/* Main Features */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Core Features</h2>
                    </div>

                    {/* Feature 1: URL Shortening */}
                    <Card className="border-border/60">
                        <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Link2 className="h-6 w-6" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-base font-semibold">Free URL Shortener for Nepal</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
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
                    <Card className="border-border/60">
                        <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <QrCode className="h-6 w-6" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-base font-semibold">Free QR Code Generator for Nepal</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
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
                    <Card className="border-border/60">
                        <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <LayoutDashboard className="h-6 w-6" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-base font-semibold">Free Link Management Dashboard</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
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
                    <Card className="border-border/60">
                        <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <UserCheck className="h-6 w-6" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-base font-semibold">Secure Google Sign-In</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
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
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why Choose npgo.to?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 text-center space-y-2.5">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Lightning Fast</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Optimized for speed. Your short links redirect instantly, providing the best experience for your audience.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 text-center space-y-2.5">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Shield className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Secure & Reliable</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Built with security in mind. Your data is protected and your links are always available.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 text-center space-y-2.5">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Smartphone className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Mobile Friendly</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Fully responsive design. Create and manage short links from your phone, tablet, or desktop.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 text-center space-y-2.5">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Globe className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Made for Nepal</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Designed specifically for Nepali businesses and users. Built by Noble Stack in Nepal.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center space-y-3">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                                    <CheckCircle className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-sm">100% Free</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    No premium tiers, no hidden fees, no paywalls. All features are completely free forever.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-6 pb-6 text-center space-y-2.5">
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Link2 className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-sm">Permanent Links</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Your shortened URLs never expire. Create once, use forever. No renewal or maintenance needed.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* Comparison */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">npgo.to vs Other URL Shorteners</h2>
                    </div>
                    <Card className="border-border/60">
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

                <Separator />

                {/* FAQ Section */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <Card className="border-border/60">
                            <CardContent className="pt-5 pb-5">
                                <h3 className="font-semibold text-sm mb-1.5">Is npgo.to really 100% free?</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Yes! npgo.to is completely free with no premium tiers, no hidden fees, and no paywalls. All features including URL shortening, QR code generation, and link management are free forever. Built by <a href="https://www.noblestack.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Noble Stack</a> for Nepal.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-5 pb-5">
                                <h3 className="font-semibold text-sm mb-1.5">What features does npgo.to offer?</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    npgo.to offers free URL shortening with unlimited links, automatic QR code generation for every link, a full link management dashboard with search and statistics, and secure Google Sign-In authentication. See the <a href="/how-to-shorten-url" className="text-primary hover:underline">step-by-step guide</a> to get started.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-5 pb-5">
                                <h3 className="font-semibold text-sm mb-1.5">How does npgo.to compare to Bit.ly?</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    npgo.to offers unlimited free URL shortening and QR codes while Bit.ly limits free usage and charges for QR codes. npgo.to is specifically designed for the Nepal market with a free link management dashboard. See the full comparison table above.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/60">
                            <CardContent className="pt-5 pb-5">
                                <h3 className="font-semibold text-sm mb-1.5">Do I need to sign in to use npgo.to?</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    No! You can shorten URLs instantly without signing in. Optionally sign in with Google to access your personal dashboard where you can track and manage all your links. Learn more on our <a href="/qr-code-generator" className="text-primary hover:underline">QR code generator</a> page.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* CTA */}
                <section className="text-center py-16 sm:py-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Start Using npgo.to Today</h2>
                    <p className="text-muted-foreground text-sm sm:text-base mt-2">
                        Join Nepali businesses and creators using the best free URL shortener for Nepal.
                    </p>
                    <a href="/" className="inline-block mt-6">
                        <Button size="lg" className="gap-2">
                            Get Started Free <ArrowRight className="h-4 w-4" />
                        </Button>
                    </a>
                </section>

                <Footer />
            </div>
        </Layout>
    );
}
