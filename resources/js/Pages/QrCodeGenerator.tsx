import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import {
    QrCode,
    Download,
    Package,
    ArrowRight,
    CheckCircle,
    Scissors,
    CreditCard,
    Globe,
    Megaphone,
    GraduationCap,
    Ticket,
    MapPin,
    Wallet,
    TrendingUp,
    Mountain,
    ShoppingBag,
    UtensilsCrossed,
    Scan,
    Link,
} from 'lucide-react';

export default function QrCodeGenerator() {
    return (
        <Layout
            title="QR Codes: Complete Guide, Use Cases & Free Generator for Nepal"
            description="Everything you need to know about QR codes: what they are, how they work, all use cases, and why they matter for Nepali businesses. Generate free high-resolution QR codes instantly with npgo.to by Noble Stack."
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

                {/* FAQPage schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is a QR code?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A QR code (Quick Response code) is a two-dimensional barcode that stores information like URLs, text, or contact details in a square grid of black and white modules. Any smartphone camera can scan a QR code to instantly access the encoded information."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are QR codes from npgo.to really free?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, completely free with no limits. Unlike Bit.ly which charges for QR codes, npgo.to generates unlimited QR codes at 2000x2000px resolution. No signup, no credit card, no catch."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do QR codes expire?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No. QR codes from npgo.to are static and never expire. They have unlimited scans. Once generated, your QR code will work forever."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How are QR codes used in Nepal?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "QR codes are widely used across Nepal for digital payments (eSewa, Khalti, ConnectIPS), restaurant menus, tourism information, product packaging, and marketing materials. They help Nepali businesses bridge offline and online channels affordably."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I use these QR codes for commercial purposes?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. QR codes generated on npgo.to are free for both personal and commercial use. Use them on business cards, packaging, marketing materials, menus, or anywhere else."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What resolution are the QR code images?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "QR codes are generated at 2000x2000 pixels in PNG format. This is high enough resolution for billboards, large posters, and professional print materials without any pixelation."
                                }
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
                        <span className="text-primary">QR Codes</span>: The Complete Guide for Nepal
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto tracking-normal px-4 mt-4">
                        Understand what QR codes are, explore every use case, and discover how Nepali businesses are using them to bridge the physical and digital world.
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

                {/* What is a QR Code? */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-center">What is a QR Code?</h2>
                    <div className="space-y-4 text-muted-foreground max-w-3xl mx-auto">
                        <p>
                            A <strong className="text-foreground">QR code</strong> (Quick Response code) is a two-dimensional barcode that stores information in a grid of black and white squares called <strong className="text-foreground">modules</strong>. Originally invented in 1994 by Denso Wave for tracking automotive parts in Japan, QR codes have evolved into one of the most versatile tools in modern business and marketing.
                        </p>
                        <p>
                            Unlike traditional barcodes which store data in a single horizontal line, QR codes encode data both horizontally and vertically, allowing them to hold significantly more information, including URLs, text, contact details, Wi-Fi credentials, and more.
                        </p>
                        <p>
                            The strategic value of QR codes lies in their ability to <strong className="text-foreground">bridge the physical and digital worlds</strong>. A customer looking at a poster, product label, or business card can instantly scan a QR code with their smartphone camera and land on a website, menu, payment page, or social media profile with zero typing required.
                        </p>
                    </div>
                </section>

                <Separator />

                {/* How QR Codes Work */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-semibold text-center">How QR Codes Work</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardContent className="pt-6 text-center space-y-4">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Link className="h-8 w-8" />
                                </div>
                                <h3 className="font-semibold text-lg">1. Encode</h3>
                                <p className="text-sm text-muted-foreground">
                                    A URL, text, or data is converted into a pattern of black and white modules using error-correction algorithms that ensure reliability.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center space-y-4">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Scan className="h-8 w-8" />
                                </div>
                                <h3 className="font-semibold text-lg">2. Scan</h3>
                                <p className="text-sm text-muted-foreground">
                                    Any smartphone camera detects the three corner squares, reads the module pattern, and decodes the stored information instantly.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center space-y-4">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Globe className="h-8 w-8" />
                                </div>
                                <h3 className="font-semibold text-lg">3. Connect</h3>
                                <p className="text-sm text-muted-foreground">
                                    The user is instantly taken to the destination: a website, menu, payment page, map location, or any digital content. No typing needed.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* All Use Cases of QR Codes */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-center">All Use Cases of QR Codes</h2>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                        QR codes are one of the most versatile tools in modern business. Here are the major categories where QR codes create real value:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Megaphone className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Marketing & Advertising</h3>
                                <p className="text-muted-foreground">
                                    Place QR codes on flyers, posters, billboards, and hoarding boards. Turn passive viewers into active website visitors. Track campaign engagement by linking to specific landing pages.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <CreditCard className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Business Cards & Networking</h3>
                                <p className="text-muted-foreground">
                                    Add a QR code to your visiting card that links to your website, LinkedIn, portfolio, or digital vCard. One scan replaces manual contact entry and leaves a lasting professional impression.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <UtensilsCrossed className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Restaurants & Menus</h3>
                                <p className="text-muted-foreground">
                                    Replace printed menus with QR code table cards. Customers scan to view your full menu on their phone. Update prices and items digitally without reprinting. Saves cost and improves hygiene.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Package className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Product Packaging & Labels</h3>
                                <p className="text-muted-foreground">
                                    Embed QR codes on product packaging to link to usage instructions, ingredient lists, warranty registration, or customer reviews. Adds digital depth to physical products.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Wallet className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Payments & Transactions</h3>
                                <p className="text-muted-foreground">
                                    Enable instant payments by displaying QR codes at checkout counters. Customers scan to pay via mobile wallets. In Nepal, platforms like eSewa, Khalti, and ConnectIPS already rely heavily on QR-based payments.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Ticket className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Events & Ticketing</h3>
                                <p className="text-muted-foreground">
                                    Use QR codes as digital tickets for concerts, conferences, and festivals. Attendees show their QR code at the entrance for instant check-in. Eliminates paper tickets and reduces fraud.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Education & Learning</h3>
                                <p className="text-muted-foreground">
                                    Teachers and institutions can add QR codes to textbooks, worksheets, and notice boards. Link students to video tutorials, online resources, assignment portals, and attendance forms.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Real Estate & Tourism</h3>
                                <p className="text-muted-foreground">
                                    Place QR codes on property listings, hotel brochures, or tourist information boards. Link to virtual tours, booking pages, Google Maps directions, or detailed property information.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />

                {/* QR Codes for Nepal */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-center">QR Codes for Nepal: Driving Digital Transformation</h2>
                    <div className="space-y-4 text-muted-foreground max-w-3xl mx-auto">
                        <p>
                            Nepal is in the middle of a digital revolution. With over <strong className="text-foreground">22 million internet users</strong> and rapid smartphone adoption, the gap between offline businesses and online customers is closing fast. QR codes are at the center of this transformation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Wallet className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Digital Payments Are QR-First</h3>
                                <p className="text-muted-foreground">
                                    Nepal's digital payment ecosystem runs on QR codes. eSewa, Khalti, IME Pay, and ConnectIPS all use QR-based payments at shops, restaurants, and service counters across the country. From Kathmandu to Pokhara, scanning a QR code to pay has become second nature for Nepali consumers.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <UtensilsCrossed className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Restaurants Going Digital</h3>
                                <p className="text-muted-foreground">
                                    Restaurants in Thamel, Jhamsikhel, and Lakeside are replacing printed menus with QR codes on every table. Customers scan for the full digital menu, reducing printing costs and allowing instant updates when prices or dishes change.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Mountain className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Tourism & Hospitality</h3>
                                <p className="text-muted-foreground">
                                    Hotels, trekking agencies, and tour operators use QR codes on brochures and information boards. Tourists scan to access itineraries, booking forms, maps, and emergency contact information, bridging the language barrier with digital content.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <ShoppingBag className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-lg">Retail & E-Commerce Growth</h3>
                                <p className="text-muted-foreground">
                                    Nepali retailers are placing QR codes on product shelves and packaging to link to their online stores on Daraz, Hamrobazar, and social media shops. This offline-to-online strategy helps local businesses compete in the growing e-commerce market.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="border-primary/20 bg-primary/5">
                        <CardContent className="pt-6 space-y-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <TrendingUp className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-lg">Why This Matters for Your Business</h3>
                            <p className="text-muted-foreground">
                                Whether you run a small momo shop in Patan or a trekking agency in Pokhara, QR codes give you an affordable way to connect with customers digitally. No app development cost, no expensive marketing spend. Just generate a QR code, print it, and your customers are one scan away from your website, menu, location, or social media page.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Why Choose npgo.to */}
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
                                <h3 className="font-semibold text-lg mb-2">What is a QR code and how is it different from a barcode?</h3>
                                <p className="text-muted-foreground">
                                    A QR code (Quick Response code) is a 2D matrix barcode that stores data in both horizontal and vertical directions, unlike traditional barcodes which only use horizontal lines. This allows QR codes to store significantly more data, including full URLs, and can be scanned by any smartphone camera without a special scanner.
                                </p>
                            </CardContent>
                        </Card>
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
                                <h3 className="font-semibold text-lg mb-2">Do QR codes expire?</h3>
                                <p className="text-muted-foreground">
                                    No. QR codes from npgo.to are static. They never expire and have unlimited scans. Once generated, your QR code will work forever.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-semibold text-lg mb-2">How are QR codes used in Nepal?</h3>
                                <p className="text-muted-foreground">
                                    QR codes are widely used in Nepal for digital payments (eSewa, Khalti, ConnectIPS), restaurant digital menus, tourism and hotel information, marketing campaigns on hoarding boards, and product packaging. Nepal's growing digital payment ecosystem has made QR codes a part of daily life for millions of Nepali consumers.
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
                    <div className="grid md:grid-cols-3 gap-4">
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
                        <a href="/url-shortener" className="block">
                            <Card className="hover:border-primary/50 transition-colors h-full">
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-3">
                                        <Scissors className="h-8 w-8 text-primary shrink-0" />
                                        <div>
                                            <h3 className="font-semibold">URL Shortener Guide</h3>
                                            <p className="text-sm text-muted-foreground">What URL shorteners are, benefits, and use cases</p>
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
