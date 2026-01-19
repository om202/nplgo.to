import { Head, usePage, router } from '@inertiajs/react';
import { ReactNode } from 'react';
import { GoogleSignInButton } from '@/components/GoogleSignInButton';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, User, Link2, Crown, LayoutDashboard } from 'lucide-react';

interface AuthUser {
    id: number;
    name: string;
    email: string;
    avatar: string | null;
    is_admin: boolean;
}

interface PageProps {
    auth: {
        user: AuthUser | null;
    };
    [key: string]: unknown;
}

interface LayoutProps {
    children: ReactNode;
    title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
    const { auth } = usePage<PageProps>().props;

    const handleLogout = () => {
        router.post('/logout');
    };

    return (
        <>
            <Head>
                <title>{title ? `${title} | Nepal URL Shortner` : 'Free URL Shortner for Nepal | Free QR Code Generator | npgo.to'}</title>

                {/* Primary Meta Tags */}
                <meta name="title" content="Free URL Shortner for Nepal | Free QR Code Generator | npgo.to by Noble Stack" />
                <meta name="description" content="Best free URL shortner for Nepal by Noble Stack. Create short links & QR codes instantly. npgo.to - Nepal's #1 free URL shortening service with QR code generator. No signup required. Made for Nepali businesses, marketers & creators. A Noble Stack product." />
                <meta name="keywords" content="Noble Stack, NobleStack, Noble Stack Nepal, URL shortner for Nepal, QR code generator for Nepal, free URL shortner, free QR code generator, Nepal URL shortener, Nepali URL shortener, shorten URL Nepal, link shortener Nepal, best URL shortener Nepal, free link shortener, QR code maker Nepal, create short links free, npgo.to, Noble Stack products, URL shortener, short URL, link shortener, shorten link, tiny URL, bit.ly alternative, bitly alternative, free URL shortener, custom short links, QR code generator, link management, short link generator, URL redirect, tinyurl alternative, short.io alternative, rebrandly alternative, link in bio, Kathmandu URL shortener, Nepal digital marketing tools, free marketing tools Nepal, URL shortening service Nepal, Noble Stack URL shortener" />
                <meta name="author" content="Noble Stack" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="geo.region" content="NP" />
                <meta name="geo.placename" content="Nepal" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://npgo.to/" />
                <meta property="og:title" content="Free URL Shortner for Nepal | Free QR Code Generator | npgo.to by Noble Stack" />
                <meta property="og:description" content="Nepal's best free URL shortner & QR code generator by Noble Stack. Create short links instantly. No signup required. Perfect for Nepali businesses, marketers & creators." />
                <meta property="og:image" content="https://npgo.to/main.png" />
                <meta property="og:site_name" content="npgo.to - A Noble Stack Product" />
                <meta property="og:locale" content="en_NP" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://npgo.to/" />
                <meta property="twitter:title" content="Free URL Shortner for Nepal | Free QR Code Generator | npgo.to by Noble Stack" />
                <meta property="twitter:description" content="Nepal's best free URL shortner & QR code generator by Noble Stack. Create short links instantly. No signup required. Perfect for Nepali businesses & creators." />
                <meta property="twitter:image" content="https://npgo.to/main.png" />

                {/* Additional Meta Tags */}
                <meta name="theme-color" content="#DC143C" />
                <link rel="canonical" href="https://npgo.to/" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "npgo.to - Free URL Shortner for Nepal by Noble Stack",
                        "alternateName": ["Nepal URL Shortener", "Free QR Code Generator Nepal", "Nepali Link Shortener", "Noble Stack URL Shortener"],
                        "url": "https://npgo.to",
                        "description": "Nepal's best free URL shortner and QR code generator by Noble Stack. Create short links and QR codes instantly. No signup required. Made for Nepali businesses, marketers, and creators.",
                        "applicationCategory": "UtilitiesApplication",
                        "operatingSystem": "Web",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "NPR",
                            "availability": "https://schema.org/InStock",
                            "priceValidUntil": "2030-12-31"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "Nepal"
                        },
                        "creator": {
                            "@type": "Organization",
                            "name": "Noble Stack",
                            "alternateName": "NobleStack",
                            "url": "https://www.noblestack.io",
                            "sameAs": [
                                "https://www.noblestack.io"
                            ],
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "NP"
                            }
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Noble Stack",
                            "url": "https://www.noblestack.io"
                        },
                        "keywords": "Noble Stack, URL shortner for Nepal, QR code generator for Nepal, free URL shortner, free QR code generator, Nepal URL shortener"
                    })}
                </script>
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
                                    "text": "npgo.to by Noble Stack is Nepal's best free URL shortner. It's completely free, requires no signup, and includes a free QR code generator. Perfect for Nepali businesses, marketers, and content creators."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is there a free QR code generator for Nepal?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes! npgo.to by Noble Stack offers a free QR code generator for Nepal. Every shortened link automatically gets a QR code that you can download and use for business cards, flyers, posters, and marketing materials."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is npgo.to really free?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes! npgo.to by Noble Stack is 100% free URL shortner for Nepal. Create unlimited short links, generate free QR codes, and manage your URLs through our dashboard at no cost. No hidden fees, no premium tiers."
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
                                    "text": "Absolutely! npgo.to by Noble Stack is perfect for Nepali businesses. Use our free URL shortner for social media marketing, email campaigns, SMS marketing, and print materials. Generate QR codes for business cards and brochures."
                                }
                            }
                        ]
                    })}
                </script>
            </Head>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80">
                <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
                        <Link2 className="h-6 w-6" />
                        <span>npgo.to</span>
                    </a>

                    {auth.user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="gap-2">
                                    <Avatar className="h-7 w-7">
                                        <AvatarImage src={auth.user.avatar || undefined} alt={auth.user.name} />
                                        <AvatarFallback>
                                            <User className="h-4 w-4" />
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="hidden sm:inline max-w-32 truncate">
                                        {auth.user.name}
                                    </span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                    <a href="/admin">
                                        <LayoutDashboard className="mr-2 h-4 w-4" />
                                        <span>Dashboard</span>
                                    </a>
                                </DropdownMenuItem>
                                {auth.user.is_admin && (
                                    <DropdownMenuItem asChild>
                                        <a href="/root-admin" className="text-amber-600 dark:text-amber-400">
                                            <Crown className="mr-2 h-4 w-4" />
                                            <span>Root Admin</span>
                                        </a>
                                    </DropdownMenuItem>
                                )}
                                <DropdownMenuItem onClick={handleLogout}>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <GoogleSignInButton />
                    )}
                </div>
            </header>

            <main className="min-h-screen px-3 sm:px-4 py-6 sm:py-8 pt-16 sm:pt-20">
                {children}
            </main>
        </>
    );
}

