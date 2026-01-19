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
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, User, Link2, Crown, LayoutDashboard, Menu } from 'lucide-react';

interface AuthUser {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    is_admin: boolean;
}

interface LayoutProps {
    title?: string;
    children: ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
    const { auth } = usePage<{ auth: { user: AuthUser | null } }>().props;

    const pageTitle = title ? `${title} | Nepal URL Shortner` : 'Free URL Shortner for Nepal | Free QR Code Generator | npgo.to';

    const handleLogout = () => {
        router.post('/logout');
    };

    return (
        <>
            <Head>
                {/* Basic Meta Tags */}
                <title>{pageTitle}</title>
                <meta name="title" content="Free URL Shortner for Nepal | Free QR Code Generator | npgo.to by Noble Stack" />
                <meta name="description" content="Best free URL shortner for Nepal by Noble Stack. Create short links & QR codes instantly. npgo.to - Nepal's #1 free URL shortening service with QR code generator. No signup required. Made for Nepali businesses, marketers & creators. A Noble Stack product." />
                <meta name="keywords" content="Noble Stack, NobleStack, Noble Stack Nepal, URL shortner for Nepal, QR code generator for Nepal, free URL shortner, free QR code generator, Nepal URL shortener, Nepali URL shortener, shorten URL Nepal, link shortener Nepal, best URL shortener Nepal, free link shortener, QR code maker Nepal, create short links free, npgo.to, Noble Stack products, URL shortener, short URL, link shortener, shorten link, tiny URL, bit.ly alternative, bitly alternative, free URL shortener, custom short links, QR code generator, link management, short link generator, URL redirect, tinyurl alternative, short.io alternative, rebrandly alternative, link in bio, Kathmandu URL shortener, Nepal digital marketing tools, free marketing tools Nepal, URL shortening service Nepal, Noble Stack URL shortener" />
                <meta name="author" content="Noble Stack" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Language" content="en" />
                <meta name="geo.region" content="NP" />
                <meta name="geo.placename" content="Nepal" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://npgo.to/" />
                <meta property="og:title" content="Free URL Shortner for Nepal | Free QR Code Generator | npgo.to by Noble Stack" />
                <meta property="og:description" content="Nepal's best free URL shortner and QR code generator by Noble Stack. Create short links and QR codes instantly. No signup required." />
                <meta property="og:image" content="https://npgo.to/main.webp" />
                <meta property="og:locale" content="en_NP" />
                <meta property="og:site_name" content="npgo.to - A Noble Stack Product" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://npgo.to/" />
                <meta property="twitter:title" content="Free URL Shortner for Nepal | Free QR Code Generator | npgo.to by Noble Stack" />
                <meta property="twitter:description" content="Nepal's best free URL shortner and QR code generator by Noble Stack. Create short links and QR codes instantly." />
                <meta property="twitter:image" content="https://npgo.to/main.webp" />

                {/* Additional Meta Tags */}
                <meta name="theme-color" content="#DC143C" />
                <link rel="canonical" href="https://npgo.to/" />

                {/* Hreflang - Geographic Targeting */}
                <link rel="alternate" hrefLang="en" href="https://npgo.to/" />
                <link rel="alternate" hrefLang="en-NP" href="https://npgo.to/" />
                <link rel="alternate" hrefLang="x-default" href="https://npgo.to/" />

                {/* Organization Schema for Noble Stack */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Noble Stack",
                        "alternateName": "NobleStack",
                        "url": "https://www.noblestack.io",
                        "logo": "https://npgo.to/images/noblestack-logo.webp",
                        "description": "Noble Stack is a technology company based in Nepal, building digital products and services for the Nepali market.",
                        "foundingLocation": {
                            "@type": "Place",
                            "name": "Nepal"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "Nepal"
                        },
                        "sameAs": [
                            "https://www.noblestack.io"
                        ],
                        "owns": {
                            "@type": "WebApplication",
                            "name": "npgo.to",
                            "url": "https://npgo.to"
                        }
                    })}
                </script>

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "npgo.to - Free URL Shortner for Nepal by Noble Stack",
                        "alternateName": ["Nepal URL Shortener", "Free QR Code Generator Nepal", "Nepali Link Shortener", "Noble Stack URL Shortener"],
                        "url": "https://npgo.to",
                        "description": "Nepal's best free URL shortner and QR code generator by Noble Stack. Create short links and QR codes instantly. No signup required. Made for Nepali businesses, marketers, and creators.",
                        "applicationCategory": "Utility",
                        "operatingSystem": "Web",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "NPR"
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

                {/* FAQ Schema */}
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
                                    "text": "Absolutely! npgo.to by Noble Stack is perfect for Nepali businesses. Use our free URL shortner for social media marketing, email campaigns, SMS marketing, and print materials. Generate QR codes for business cards and brochures."
                                }
                            }
                        ]
                    })}
                </script>
            </Head>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur">
                <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
                    {/* Logo and Navigation - Left Side */}
                    <div className="flex items-center gap-6">
                        {/* Mobile Menu - Hamburger */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-80">
                                <SheetHeader>
                                    <SheetTitle className="flex items-center gap-2 text-primary text-xl">
                                        <Link2 className="h-5 w-5" />
                                        npgo.to
                                    </SheetTitle>
                                    <p className="text-xs text-muted-foreground text-left">
                                        Free URL shortener for Nepal
                                    </p>
                                </SheetHeader>

                                <div className="flex flex-col gap-6 mt-8">
                                    {/* Main Navigation */}
                                    <nav className="flex flex-col gap-1">
                                        <a
                                            href="/about"
                                            className="group flex items-start gap-3 rounded-lg p-3 hover:bg-accent transition-colors"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                                                <User className="h-5 w-5" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="font-semibold group-hover:text-primary transition-colors">
                                                    About
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    Learn about npgo.to and Noble Stack
                                                </span>
                                            </div>
                                        </a>

                                        <a
                                            href="/features"
                                            className="group flex items-start gap-3 rounded-lg p-3 hover:bg-accent transition-colors"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                                                <LayoutDashboard className="h-5 w-5" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="font-semibold group-hover:text-primary transition-colors">
                                                    Features
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    See all features and benefits
                                                </span>
                                            </div>
                                        </a>
                                    </nav>

                                    {/* Divider */}
                                    <div className="h-px bg-border"></div>

                                    {/* Footer Links */}
                                    <div className="flex flex-col gap-2">
                                        <p className="text-xs font-medium text-muted-foreground px-3">Legal</p>
                                        <a
                                            href="/privacy"
                                            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            Privacy Policy
                                        </a>
                                        <a
                                            href="/terms"
                                            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            Terms of Service
                                        </a>
                                    </div>

                                    {/* Bottom Section */}
                                    <div className="mt-auto pt-4 border-t">
                                        <p className="text-xs text-muted-foreground text-center">
                                            Built by{' '}
                                            <a
                                                href="https://www.noblestack.io"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium text-primary hover:underline"
                                            >
                                                Noble Stack
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>

                        <a href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
                            <Link2 className="h-6 w-6" />
                            <span>npgo.to</span>
                        </a>

                        {/* Desktop Navigation Menu */}
                        <NavigationMenu className="hidden md:block">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
                                        About
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/features" className={navigationMenuTriggerStyle()}>
                                        Features
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* User Menu - Right Side */}
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

            {/* Main Content */}
            <main className="w-full pt-20 min-h-dvh">
                {children}
            </main>
        </>
    );
}
