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
                <title>{title ? `${title} | Nepal URL Shortner` : 'Nepal URL Shortner | npgo.to - Free URL Shortening Service'}</title>

                {/* Primary Meta Tags */}
                <meta name="title" content="Nepal URL Shortner | npgo.to - Free URL Shortening Service" />
                <meta name="description" content="Transform long URLs into short, memorable links with npgo.to. Free URL shortener for Nepal featuring Google Sign-In, QR code generation, and powerful admin dashboard." />
                <meta name="keywords" content="URL shortener, short URL, link shortener, shorten link, tiny URL, bit.ly alternative, free URL shortener, custom short links, QR code generator, link management, URL management, short link generator, link tracking, Nepal URL shortener, npgo.to, shorten URLs free, create short links, branded short links, link analytics, URL redirect, link shortening service, web link shortener, online URL shortener, bitly alternative free, tinyurl alternative, short.io alternative, rebrandly alternative, link in bio, social media links, marketing links, campaign tracking" />
                <meta name="author" content="NobleStack" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://npgo.to/" />
                <meta property="og:title" content="Nepal URL Shortner | npgo.to" />
                <meta property="og:description" content="Transform long URLs into short, memorable links. Free URL shortener with Google Sign-In, QR codes, and admin dashboard." />
                <meta property="og:image" content="https://npgo.to/main.png" />
                <meta property="og:site_name" content="npgo.to" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://npgo.to/" />
                <meta property="twitter:title" content="Nepal URL Shortner | npgo.to" />
                <meta property="twitter:description" content="Transform long URLs into short, memorable links. Free URL shortener with Google Sign-In, QR codes, and admin dashboard." />
                <meta property="twitter:image" content="https://npgo.to/main.png" />

                {/* Additional Meta Tags */}
                <meta name="theme-color" content="#DC143C" />
                <link rel="canonical" href="https://npgo.to/" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "npgo.to - Nepal URL Shortener",
                        "url": "https://npgo.to",
                        "description": "Free URL shortening service for Nepal with Google Sign-In, QR code generation, and admin dashboard",
                        "applicationCategory": "UtilitiesApplication",
                        "operatingSystem": "Web",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },
                        "creator": {
                            "@type": "Organization",
                            "name": "NobleStack",
                            "url": "https://www.noblestack.io"
                        }
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Is npgo.to really free?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes! npgo.to is completely free to use. Create unlimited short links, generate QR codes, and manage your URLs through our admin dashboard at no cost."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How is npgo.to different from Bit.ly?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "npgo.to is a free, open alternative to Bit.ly with no premium tiers or paywalls. We focus on simplicity and essential features: URL shortening, QR codes, and link management—all completely free."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are QR codes included?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes! Every shortened link comes with a free QR code generator. Perfect for print materials, business cards, and offline marketing campaigns."
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

