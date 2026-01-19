import { useForm, router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useState, useRef, useEffect, FormEvent } from 'react';
import Layout from '@/Layouts/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Link2, Copy, Trash2, Check, ExternalLink, Plus } from 'lucide-react';

interface UrlItem {
    id: number;
    short_code: string;
    short_url: string;
    display_url: string;
    original_url: string;
    created_at: string;
}

interface NewUrl {
    short_code: string;
    display_url: string;
    original_url: string;
}

interface AuthUser {
    id: number;
    name: string;
    email: string;
    avatar: string | null;
}

interface PageProps {
    auth: {
        user: AuthUser;
    };
    urls: UrlItem[];
    stats: {
        total_urls: number;
    };
    flash?: {
        new_url?: NewUrl;
        success?: string;
    };
    [key: string]: unknown;
}

export default function Admin() {
    const { auth, urls, stats, flash } = usePage<PageProps>().props;
    const [copiedId, setCopiedId] = useState<number | null>(null);
    const [newUrlCopied, setNewUrlCopied] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        url: '',
    });

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post('/', {
            onSuccess: () => reset(),
        });
    }

    function copyToClipboard(url: string, id: number) {
        navigator.clipboard.writeText(url);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    }

    function copyNewUrl(url: string) {
        navigator.clipboard.writeText('https://' + url);
        setNewUrlCopied(true);
        setTimeout(() => setNewUrlCopied(false), 2000);
    }

    function deleteUrl(id: number) {
        router.delete(`/admin/urls/${id}`, {
            preserveScroll: true,
        });
    }

    return (
        <Layout title="Dashboard">
            <div className="w-full max-w-5xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Dashboard</h1>
                        <p className="text-muted-foreground">
                            Welcome back, {auth.user.name}
                        </p>
                    </div>
                </div>

                {/* New URL Success Card */}
                {flash?.new_url && (
                    <Card className="border-green-500 bg-green-50 dark:bg-green-950/20">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg text-green-700 dark:text-green-400 flex items-center gap-2">
                                <Check className="h-5 w-5" />
                                URL Shortened Successfully!
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-3">
                                <code className="flex-1 bg-white dark:bg-gray-900 px-4 py-2 rounded-lg text-lg font-mono">
                                    {flash.new_url.display_url}
                                </code>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => copyNewUrl(flash.new_url!.display_url)}
                                >
                                    {newUrlCopied ? (
                                        <Check className="h-4 w-4 text-green-600" />
                                    ) : (
                                        <Copy className="h-4 w-4" />
                                    )}
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                >
                                    <a href={'https://' + flash.new_url.display_url} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </Button>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2 truncate">
                                → {flash.new_url.original_url}
                            </p>
                        </CardContent>
                    </Card>
                )}

                {/* Create New URL Card */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Plus className="h-5 w-5" />
                            Shorten New URL
                        </CardTitle>
                        <CardDescription>
                            Paste a long URL to create a short npgo.to link
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="flex gap-3">
                            <div className="flex-1">
                                <Input
                                    ref={inputRef}
                                    type="text"
                                    value={data.url}
                                    onChange={e => setData('url', e.target.value)}
                                    placeholder="https://example.com/your-long-url/"
                                    className={`h-11 ${errors.url ? 'border-destructive' : ''}`}
                                />
                                {errors.url && (
                                    <p className="text-sm text-destructive mt-1">{errors.url}</p>
                                )}
                            </div>
                            <Button type="submit" disabled={processing} size="lg" className="h-11">
                                {processing ? 'Creating...' : 'Shorten'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Link2 className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">{stats.total_urls}</p>
                                    <p className="text-sm text-muted-foreground">Total URLs</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* URLs Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Your URLs</CardTitle>
                        <CardDescription>
                            Manage all your shortened URLs
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {urls.length === 0 ? (
                            <div className="text-center py-12">
                                <Link2 className="h-12 w-12 mx-auto text-muted-foreground/50" />
                                <h3 className="mt-4 text-lg font-semibold">No URLs yet</h3>
                                <p className="text-muted-foreground">
                                    Create your first short URL using the form above.
                                </p>
                            </div>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Short URL</TableHead>
                                        <TableHead className="hidden md:table-cell">Original URL</TableHead>
                                        <TableHead className="hidden sm:table-cell">Created</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {urls.map((url) => (
                                        <TableRow key={url.id}>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="secondary" className="font-mono">
                                                        {url.display_url}
                                                    </Badge>
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell max-w-[300px]">
                                                <p className="truncate text-sm text-muted-foreground">
                                                    {url.original_url}
                                                </p>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell text-sm text-muted-foreground">
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
                                                    <AlertDialog>
                                                        <AlertDialogTrigger asChild>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="text-destructive hover:text-destructive"
                                                                title="Delete URL"
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>Delete URL?</AlertDialogTitle>
                                                                <AlertDialogDescription>
                                                                    This will permanently delete <strong>{url.display_url}</strong>.
                                                                    Anyone using this link will get a 404 error.
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                <AlertDialogAction
                                                                    onClick={() => deleteUrl(url.id)}
                                                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                                                >
                                                                    Delete
                                                                </AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}
