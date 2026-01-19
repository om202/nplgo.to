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
import { LogOut, User, Link2 } from 'lucide-react';

interface AuthUser {
    id: number;
    name: string;
    email: string;
    avatar: string | null;
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
                <title>{title ? `${title} | Nepal URL Shortner` : 'Nepal URL Shortner | npgo.to'}</title>
                <meta name="description" content="Nepal URL Shortner - Shorten your long URLs instantly with npgo.to. Free, fast, and reliable." />
            </Head>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
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

            <main className="min-h-screen px-4 py-8 pt-20">
                {children}
            </main>
        </>
    );
}

