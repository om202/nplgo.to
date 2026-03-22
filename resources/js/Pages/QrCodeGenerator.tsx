import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import {
    QrCode,
    Download,
    Printer,
    Store,
    Package,
    ArrowRight,
    CheckCircle,
    Scissors,
    CreditCard,
} from 'lucide-react';

export default function QrCodeGenerator() {
    return (
        <Layout
            title="Free QR Code Generator for Nepal"
            description="Generate free QR codes for your business in Nepal. Create QR codes for URLs, business cards, flyers, posters, and product packaging. No signup required. By Noble Stack."
            canonicalPath="/qr-code-generator"
        >
            {/* Page-specific structured data */}
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "npgo.to Free QR Code Generator",
                        "applicationCategory": "UtilitiesApplication",
                        "operatingSystem": "Web",
                        "description": "Free QR code generator for Nepal. Create QR codes for any URL instantly. Download in high resolution for print materials. No signup required.",
                        "url": "https://npgo.to/qr-code-generator",
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

                {/* HowTo for QR code generation */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Generate a Free QR Code in Nepal",
                        "description": "Create a free QR code using npgo.to. Shorten your URL and get a QR code automatically.",
                        "totalTime": "PT30S",
                        "step": [
                            {
                                "@type": "HowToStep",
                                "position": 1,
                                "name": "Paste Your URL",
                                "text": "Go to npgo.to and paste any URL into the input box."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 2,
                                "name": "Get Your QR Code",
                                "text": "After shortening, your QR code is generated automatically."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 3,
                                "name": "Download & Use",
                                "text": "Download the high-resolution QR code PNG and use it on business cards, flyers, posters, or any print material."
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
                        Free <span className="text-primary">QR Code Generator</span> for Nepal
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto tracking-normal px-4 mt-4">
                        Create free QR codes for any URL. Download in high resolution for business cards, flyers, and posters. No signup required.
                    </p>
                    <div className="mt-6">
                        <a href="/">
                            <Button size="lg" className="gap-2">
                                <QrCode className="h-5 w-5" />
                                Generate a Free QR Code
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <div className="w-full max-w-4xl mx-auto px-4 space-y-12 pb-12">

                {/* How It Works */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-semibold text-center">How It Works</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardContent className="pt-6 text-center space-y-4">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary text-2xl font-bold">
                                    1
                                </div>
                                <h3 className="font-semibold text-lg">Paste a URL</h3>
                                <p className="text-sm text-muted-foreground">
                                    Go to npgo.to and paste any URL: website, Google Drive, YouTube, or any web link.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center space-y-4">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary text-2xl font-bold">
                                    2
                                </div>
                                <h3 className="font-semibold text-lg">Shorten It</h3>
                                <p className="text-sm text-muted-foreground">
                                    Click "Shorten" and you'll get a short npgo.to link plus a QR code, generated automatically.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center space-y-4">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary text-2xl font-bold">
                                    3
                                </div>
                                <h3 className="font-semibold text-lg">Download QR</h3>
                                <p className="text-sm text-muted-foreground">
                                    Download your QR code as a high-resolution PNG. Ready for print at any size.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* What Makes Our QR Codes Special */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-center">Why Choose npgo.to for QR Codes?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                                    <CheckCircle className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">100% Free</h3>
                                <p className="text-muted-foreground">
                                    Unlike Bit.ly which charges for QR codes, npgo.to gives you unlimited QR codes completely free. No premium tiers, no paywalls.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Download className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">High Resolution</h3>
                                <p className="text-muted-foreground">
                                    Download QR codes at 2000×2000 pixels, perfect for printing on posters, banners, and large format materials without losing quality.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <QrCode className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Branded QR Codes</h3>
                                <p className="text-muted-foreground">
                                    Every QR code includes the npgo.to branding in the center, giving your audience confidence that the code is safe to scan.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Scissors className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Short Link Included</h3>
                                <p className="text-muted-foreground">
                                    Every QR code comes with a short npgo.to link. Use the QR code for print and the short link for digital. Both point to the same destination.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* Use Cases for QR Codes */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-center">Where to Use QR Codes in Nepal</h2>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                        QR codes are everywhere in Nepal. Here's how Nepali businesses use QR codes from npgo.to:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <CreditCard className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Business Cards</h3>
                                <p className="text-muted-foreground">
                                    Add a QR code to your visiting card that links to your website, portfolio, or social media. When someone scans it, they go straight to your online presence.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Printer className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Flyers & Posters</h3>
                                <p className="text-muted-foreground">
                                    Put a QR code on your marketing flyers, event posters, and hoarding boards. People can scan instead of typing a long URL.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Package className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Product Packaging</h3>
                                <p className="text-muted-foreground">
                                    Add QR codes to your product labels and packaging. Link to product information, reviews, or your online store for a seamless experience.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Store className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Restaurants & Shops</h3>
                                <p className="text-muted-foreground">
                                    Display QR codes at your restaurant tables or shop counters. Link to your menu, Google Maps location, or payment page.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* Comparison */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-center">npgo.to vs Other QR Code Generators</h2>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-3 px-4 font-semibold">Feature</th>
                                            <th className="text-center py-3 px-4 font-semibold text-primary">npgo.to</th>
                                            <th className="text-center py-3 px-4 font-semibold">Bit.ly</th>
                                            <th className="text-center py-3 px-4 font-semibold">QR-Code-Generator.com</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">Free QR Codes</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓ Unlimited</td>
                                            <td className="text-center py-3 px-4 text-red-500">Paid Only</td>
                                            <td className="text-center py-3 px-4 text-yellow-500">Limited</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">High Resolution PNG</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓ 2000×2000px</td>
                                            <td className="text-center py-3 px-4 text-red-500">Paid</td>
                                            <td className="text-center py-3 px-4 text-yellow-500">Low Res Free</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">URL Shortener Included</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓ Free</td>
                                            <td className="text-center py-3 px-4 text-yellow-500">Limited</td>
                                            <td className="text-center py-3 px-4 text-red-500">✗</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">No Signup Required</td>
                                            <td className="text-center py-3 px-4 text-green-500">✓</td>
                                            <td className="text-center py-3 px-4 text-red-500">✗</td>
                                            <td className="text-center py-3 px-4 text-red-500">✗</td>
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
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-center">QR Code FAQs</h2>
                    <div className="space-y-4">
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-semibold text-lg mb-2">Are QR codes from npgo.to really free?</h3>
                                <p className="text-muted-foreground">
                                    Yes, completely free with no limits. Unlike Bit.ly which charges for QR codes, npgo.to generates unlimited QR codes at 2000×2000px resolution. No signup, no credit card, no catch.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-semibold text-lg mb-2">Do the QR codes expire?</h3>
                                <p className="text-muted-foreground">
                                    No. QR codes from npgo.to are static. They never expire and have unlimited scans. Once generated, your QR code will work forever.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-semibold text-lg mb-2">What resolution are the QR code images?</h3>
                                <p className="text-muted-foreground">
                                    QR codes are generated at 2000×2000 pixels in PNG format. This is high enough resolution for billboards, large posters, and professional print materials without any pixelation.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-semibold text-lg mb-2">Can I use these QR codes for commercial purposes?</h3>
                                <p className="text-muted-foreground">
                                    Absolutely. QR codes generated on npgo.to are free for both personal and commercial use. Use them on business cards, packaging, marketing materials, menus, or anywhere else.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-semibold text-lg mb-2">How is npgo.to different from QRCode Monkey or other generators?</h3>
                                <p className="text-muted-foreground">
                                    npgo.to combines URL shortening and QR code generation in one step. You get both a short link and a QR code for every URL. Other generators create QR codes only, but npgo.to gives you a shortened link you can share digitally too. Plus, it's made in Nepal by <a href="https://www.noblestack.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Noble Stack</a>.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* Internal Cross-Links */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-center">Explore More</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <a href="/how-to-shorten-url" className="block">
                            <Card className="hover:border-primary/50 transition-colors h-full">
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-3">
                                        <Scissors className="h-8 w-8 text-primary shrink-0" />
                                        <div>
                                            <h3 className="font-semibold">How to Shorten a URL</h3>
                                            <p className="text-sm text-muted-foreground">Step-by-step guide with tips for better short links</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                        <a href="/features" className="block">
                            <Card className="hover:border-primary/50 transition-colors h-full">
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-3">
                                        <ArrowRight className="h-8 w-8 text-primary shrink-0" />
                                        <div>
                                            <h3 className="font-semibold">All Features</h3>
                                            <p className="text-sm text-muted-foreground">Dashboard, Google sign-in, link management & more</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center space-y-4 py-8">
                    <h2 className="text-2xl font-semibold">Create Your Free QR Code Now</h2>
                    <p className="text-muted-foreground">
                        Paste a URL, get a QR code. 2000×2000px, free forever, no signup.
                    </p>
                    <a href="/">
                        <Button size="lg" className="gap-2 w-full sm:w-auto">
                            Generate QR Code <ArrowRight className="h-4 w-4" />
                        </Button>
                    </a>
                </section>
            </div>

            <Footer />
        </Layout>
    );
}
