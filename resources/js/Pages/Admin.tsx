import { useForm, router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useState, useRef, useEffect, FormEvent } from 'react';
import { QRCodeSVG } from 'qrcode.react';
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Link2, Copy, Trash2, Check, ExternalLink, Plus, QrCode, Download, Scissors } from 'lucide-react';

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
    const [successDialogOpen, setSuccessDialogOpen] = useState(false);
    const [downloadingQR, setDownloadingQR] = useState<number | null>(null);
    const [downloadingNewQR, setDownloadingNewQR] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        url: '',
    });

    useEffect(() => {
        // Check for pending URL from localStorage (after login redirect)
        const pendingUrl = localStorage.getItem('pending_url');
        if (pendingUrl) {
            setData('url', pendingUrl);
            localStorage.removeItem('pending_url');
        }

        inputRef.current?.focus();
    }, []);

    // Separate effect for auto-opening dialog when new URL is created
    useEffect(() => {
        if (flash?.new_url?.short_code) {
            setSuccessDialogOpen(true);
        }
    }, [flash?.new_url?.short_code]);

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
        navigator.clipboard.writeText(url);
        setNewUrlCopied(true);
        setTimeout(() => setNewUrlCopied(false), 2000);
    }

    function deleteUrl(id: number) {
        router.delete(`/admin/urls/${id}`, {
            preserveScroll: true,
        });
    }

    function downloadQR(shortCode: string, id: number) {
        if (downloadingQR) return; // Prevent multiple downloads

        setDownloadingQR(id);
        const svg = document.getElementById(`qr-${shortCode}`);
        if (!svg) {
            setDownloadingQR(null);
            return;
        }

        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
            // High resolution for printing: 2000x2000 pixels
            const scale = 2000 / img.width;
            canvas.width = 2000;
            canvas.height = 2000;
            ctx?.scale(scale, scale);
            ctx?.drawImage(img, 0, 0);
            const link = document.createElement('a');
            link.download = `qr-${shortCode}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            setDownloadingQR(null);
        };

        img.onerror = () => {
            setDownloadingQR(null);
        };

        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }

    function downloadNewQR() {
        if (downloadingNewQR) return; // Prevent multiple downloads

        setDownloadingNewQR(true);
        const svg = document.getElementById('qr-new-url');
        if (!svg) {
            setDownloadingNewQR(false);
            return;
        }

        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
            // High resolution for printing: 2000x2000 pixels
            const scale = 2000 / img.width;
            canvas.width = 2000;
            canvas.height = 2000;
            ctx?.scale(scale, scale);
            ctx?.drawImage(img, 0, 0);
            const link = document.createElement('a');
            link.download = `qr-${flash?.new_url?.short_code || 'new'}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            setDownloadingNewQR(false);
        };

        img.onerror = () => {
            setDownloadingNewQR(false);
        };

        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }

    return (
        <Layout title="Dashboard" hideNavigation={true}>
            <div className="w-full max-w-5xl mx-auto px-4 space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Dashboard</h1>
                        <p className="text-muted-foreground">
                            Welcome back, {auth.user.name}
                        </p>
                    </div>
                </div>

                {/* Success Dialog with URL and QR Code */}
                <Dialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen}>
                    <DialogContent className="sm:max-w-sm max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="text-green-600 dark:text-green-400 flex items-center gap-2">
                                <Check className="h-5 w-5" />
                                URL Shortened!
                            </DialogTitle>
                            <DialogDescription>
                                Your short link is ready to share
                            </DialogDescription>
                        </DialogHeader>
                        {flash?.new_url && (
                            <div className="flex flex-col items-center gap-4">
                                {/* Shortened URL */}
                                <div className="w-full space-y-2">
                                    <div className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                                        <code className="flex-1 text-sm font-mono font-semibold text-center break-all">
                                            {flash.new_url.display_url}
                                        </code>
                                    </div>
                                    <div className="flex justify-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => copyNewUrl(flash.new_url!.display_url)}
                                            className="gap-2"
                                        >
                                            {newUrlCopied ? (
                                                <>
                                                    <Check className="h-4 w-4 text-green-600" />
                                                    Copied!
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="h-4 w-4" />
                                                    Copy
                                                </>
                                            )}
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                            className="gap-2"
                                        >
                                            <a href={flash.new_url.display_url} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-4 w-4" />
                                                Open
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                {/* QR Code */}
                                <div className="space-y-2">
                                    <div className="bg-white p-3 rounded-lg shadow-sm">
                                        <QRCodeSVG
                                            id="qr-new-url"
                                            value={flash.new_url.display_url}
                                            size={140}
                                            level="H"
                                            imageSettings={{
                                                src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 70 14'%3E%3Crect width='70' height='14' fill='white' rx='2'/%3E%3Ctext x='35' y='11' font-family='Arial, sans-serif' font-size='10' font-weight='bold' fill='%23DC143C' text-anchor='middle'%3Ewww.npgo.to%3C/text%3E%3C/svg%3E",
                                                height: 14,
                                                width: 70,
                                                excavate: true,
                                            }}
                                        />
                                    </div>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        onClick={downloadNewQR}
                                        disabled={downloadingNewQR}
                                        className="w-full gap-2"
                                    >
                                        <Download className="h-4 w-4" />
                                        {downloadingNewQR ? 'Downloading...' : 'Download QR'}
                                    </Button>
                                </div>
                            </div>
                        )}
                        <DialogFooter className="text-xs text-muted-foreground text-center sm:justify-center break-all">
                            → {flash?.new_url?.original_url}
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

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
                        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                            <div className="flex-1">
                                <Input
                                    ref={inputRef}
                                    type="text"
                                    value={data.url}
                                    onChange={e => setData('url', e.target.value)}
                                    placeholder="example.com/your-long-url/"
                                    className={`h-11 ${errors.url ? 'border-destructive' : ''}`}
                                />
                                {errors.url && (
                                    <p className="text-sm text-destructive mt-1">{errors.url}</p>
                                )}
                            </div>
                            <Button type="submit" disabled={processing} size="lg" className="h-11 w-full md:w-auto gap-2">
                                <Scissors className="h-4 w-4" />
                                {processing ? 'Creating...' : 'Shorten'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* URLs Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Your URLs ({stats.total_urls})</CardTitle>
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
                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                title="QR Code"
                                                            >
                                                                <QrCode className="h-4 w-4" />
                                                            </Button>
                                                        </DialogTrigger>
                                                        <DialogContent className="sm:max-w-md">
                                                            <DialogHeader>
                                                                <DialogTitle>{url.display_url}</DialogTitle>
                                                            </DialogHeader>
                                                            <div className="flex flex-col items-center gap-4 py-4">
                                                                <div className="bg-white p-4 rounded-lg">
                                                                    <QRCodeSVG
                                                                        id={`qr-${url.short_code}`}
                                                                        value={url.short_url}
                                                                        size={200}
                                                                        level="H"
                                                                        imageSettings={{
                                                                            src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 16'%3E%3Crect width='80' height='16' fill='white' rx='2'/%3E%3Ctext x='40' y='12.5' font-family='Arial, sans-serif' font-size='12' font-weight='bold' fill='%23DC143C' text-anchor='middle'%3Ewww.npgo.to%3C/text%3E%3C/svg%3E",
                                                                            height: 16,
                                                                            width: 80,
                                                                            excavate: true,
                                                                        }}
                                                                    />
                                                                </div>
                                                                <p className="text-sm text-muted-foreground text-center">
                                                                    Scan this code to visit your shortened URL
                                                                </p>
                                                                <Button
                                                                    onClick={() => downloadQR(url.short_code, url.id)}
                                                                    disabled={downloadingQR === url.id}
                                                                    className="gap-2"
                                                                >
                                                                    <Download className="h-4 w-4" />
                                                                    Download PNG
                                                                </Button>
                                                            </div>
                                                        </DialogContent>
                                                    </Dialog>
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
