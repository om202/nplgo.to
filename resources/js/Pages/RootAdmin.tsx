import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import Layout from '@/Layouts/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Link2, Copy, ExternalLink, Check, Shield, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface UserItem {
    id: number;
    name: string;
    email: string;
    avatar: string | null;
    urls_count: number;
    is_admin: boolean;
    created_at: string;
}

interface UrlItem {
    id: number;
    short_code: string;
    short_url: string;
    display_url: string;
    original_url: string;
    user_name: string;
    user_email: string;
    user_avatar: string | null;
    created_at: string;
}

interface PageProps {
    users: UserItem[];
    urls: UrlItem[];
    stats: {
        total_users: number;
        total_urls: number;
    };
    [key: string]: unknown;
}

export default function RootAdmin() {
    const { users, urls, stats } = usePage<PageProps>().props;
    const [copiedId, setCopiedId] = useState<number | null>(null);

    function copyToClipboard(url: string, id: number) {
        navigator.clipboard.writeText(url);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    }

    return (
        <Layout title="Root Admin Panel" hideNavigation={true}>
            <div className="w-full max-w-6xl mx-auto px-4 space-y-8">
                {/* Header */}
                <div>
                    <div className="flex items-center gap-3">
                        <Crown className="h-8 w-8" />
                        <h1 className="text-3xl font-bold">Welcome Root Admin</h1>
                    </div>
                    <p className="text-muted-foreground mt-1">
                        All users and URL activity
                    </p>
                </div>

                {/* Tabs for Users and URLs */}
                <Tabs defaultValue="urls" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="urls" className="gap-2">
                            <Link2 className="h-4 w-4" />
                            All URLs ({stats.total_urls})
                        </TabsTrigger>
                        <TabsTrigger value="users" className="gap-2">
                            <Users className="h-4 w-4" />
                            All Users ({stats.total_users})
                        </TabsTrigger>
                    </TabsList>

                    {/* URLs Tab */}
                    <TabsContent value="urls">
                        <Card>
                            <CardHeader>
                                <CardTitle>URL Activity Log</CardTitle>
                                <CardDescription>
                                    All shortened URLs across the platform
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {urls.length === 0 ? (
                                    <div className="text-center py-12">
                                        <Link2 className="h-12 w-12 mx-auto text-muted-foreground/50" />
                                        <h3 className="mt-4 text-lg font-semibold">No URLs yet</h3>
                                        <p className="text-muted-foreground">
                                            No URLs have been shortened on this platform.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>User</TableHead>
                                                    <TableHead>Short URL</TableHead>
                                                    <TableHead className="hidden lg:table-cell">Original URL</TableHead>
                                                    <TableHead className="hidden md:table-cell">Created</TableHead>
                                                    <TableHead className="text-right">Actions</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {urls.map((url) => (
                                                    <TableRow key={url.id}>
                                                        <TableCell>
                                                            <div className="flex items-center gap-2">
                                                                {url.user_avatar ? (
                                                                    <img
                                                                        src={url.user_avatar}
                                                                        alt={url.user_name}
                                                                        className="h-8 w-8 rounded-full"
                                                                    />
                                                                ) : (
                                                                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                                                                        <Users className="h-4 w-4" />
                                                                    </div>
                                                                )}
                                                                <div className="min-w-0">
                                                                    <p className="font-medium truncate">{url.user_name}</p>
                                                                    <p className="text-xs text-muted-foreground truncate hidden sm:block">
                                                                        {url.user_email}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Badge variant="secondary" className="font-mono">
                                                                {url.display_url}
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell className="hidden lg:table-cell max-w-[300px]">
                                                            <p className="truncate text-sm text-muted-foreground">
                                                                {url.original_url}
                                                            </p>
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell text-sm text-muted-foreground whitespace-nowrap">
                                                            {url.created_at}
                                                        </TableCell>
                                                        <TableCell className="text-right">
                                                            <div className="flex items-center justify-end gap-1">
                                                                <Button
                                                                    variant="ghost"
                                                                    size="icon"
                                                                    onClick={() => copyToClipboard(url.short_url, url.id)}
                                                                    title="Copy URL"
                                                                >
                                                                    {copiedId === url.id ? (
                                                                        <Check className="h-4 w-4 text-green-600" />
                                                                    ) : (
                                                                        <Copy className="h-4 w-4" />
                                                                    )}
                                                                </Button>
                                                                <Button
                                                                    variant="ghost"
                                                                    size="icon"
                                                                    asChild
                                                                    title="Open URL"
                                                                >
                                                                    <a href={url.short_url} target="_blank" rel="noopener noreferrer">
                                                                        <ExternalLink className="h-4 w-4" />
                                                                    </a>
                                                                </Button>
                                                            </div>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Users Tab */}
                    <TabsContent value="users">
                        <Card>
                            <CardHeader>
                                <CardTitle>Registered Users</CardTitle>
                                <CardDescription>
                                    All users who have signed up via Google
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {users.length === 0 ? (
                                    <div className="text-center py-12">
                                        <Users className="h-12 w-12 mx-auto text-muted-foreground/50" />
                                        <h3 className="mt-4 text-lg font-semibold">No users yet</h3>
                                        <p className="text-muted-foreground">
                                            No users have registered on this platform.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>User</TableHead>
                                                    <TableHead className="hidden sm:table-cell">Email</TableHead>
                                                    <TableHead className="text-center">URLs</TableHead>
                                                    <TableHead className="hidden md:table-cell">Joined</TableHead>
                                                    <TableHead className="text-center">Role</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {users.map((user) => (
                                                    <TableRow key={user.id}>
                                                        <TableCell>
                                                            <div className="flex items-center gap-3">
                                                                {user.avatar ? (
                                                                    <img
                                                                        src={user.avatar}
                                                                        alt={user.name}
                                                                        className="h-10 w-10 rounded-full"
                                                                    />
                                                                ) : (
                                                                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                                                                        <Users className="h-5 w-5" />
                                                                    </div>
                                                                )}
                                                                <p className="font-medium">{user.name}</p>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell text-muted-foreground">
                                                            {user.email}
                                                        </TableCell>
                                                        <TableCell className="text-center">
                                                            <Badge variant="outline" className="font-mono">
                                                                {user.urls_count}
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                                                            {user.created_at}
                                                        </TableCell>
                                                        <TableCell className="text-center">
                                                            {user.is_admin ? (
                                                                <Badge className="bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30 gap-1">
                                                                    <Shield className="h-3 w-3" />
                                                                    Admin
                                                                </Badge>
                                                            ) : (
                                                                <Badge variant="secondary">User</Badge>
                                                            )}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </Layout>
    );
}
