import { useForm, router, usePage } from '@inertiajs/react';
import { useState, FormEvent } from 'react';
import Layout from '@/Layouts/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
    Copy, Check, Plus, Trash2, GripVertical,
    Link2, Eye, Save, Download
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface BioLinkItem {
    id: number;
    title: string;
    url: string;
    icon: string | null;
    position: number;
    is_active: boolean;
}

interface BioPageData {
    id: number;
    username: string;
    display_name: string;
    bio: string | null;
    avatar_url: string | null;
    theme: string;
    public_url: string;
    links: BioLinkItem[];
}

interface PageProps {
    bioPage: BioPageData;
    flash?: {
        success?: string;
    };
    [key: string]: unknown;
}

const socialThemeSlugs = ['facebook', 'x', 'instagram', 'youtube', 'tiktok', 'linkedin'];

export default function BioEditor() {
    const { bioPage: page, flash: flashMsg } = usePage<PageProps>().props;

    const [copied, setCopied] = useState(false);
    const [editingLinkId, setEditingLinkId] = useState<number | null>(null);
    const [showAddLink, setShowAddLink] = useState(false);

    // Profile form
    const profileForm = useForm({
        username: page.username,
        display_name: page.display_name,
        bio: page.bio || '',
        theme: page.theme,
    });

    // New link form
    const newLinkForm = useForm({
        title: '',
        url: '',
    });

    // Edit link form
    const editLinkForm = useForm({
        title: '',
        url: '',
        is_active: true,
    });

    function handleProfileSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        profileForm.put('/bio', {
            preserveScroll: true,
        });
    }

    function handleAddLink(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        newLinkForm.post('/bio/links', {
            preserveScroll: true,
            onSuccess: () => {
                newLinkForm.reset();
                setShowAddLink(false);
            },
        });
    }

    function startEditLink(link: BioLinkItem) {
        setEditingLinkId(link.id);
        editLinkForm.setData({
            title: link.title,
            url: link.url,
            is_active: link.is_active,
        });
    }

    function handleEditLink(e: FormEvent<HTMLFormElement>, linkId: number) {
        e.preventDefault();
        editLinkForm.put(`/bio/links/${linkId}`, {
            preserveScroll: true,
            onSuccess: () => setEditingLinkId(null),
        });
    }

    function deleteLink(linkId: number) {
        router.delete(`/bio/links/${linkId}`, {
            preserveScroll: true,
        });
    }

    function toggleLinkActive(link: BioLinkItem) {
        router.put(`/bio/links/${link.id}`, {
            title: link.title,
            url: link.url,
            is_active: !link.is_active,
        }, {
            preserveScroll: true,
        });
    }

    function moveLink(linkId: number, direction: 'up' | 'down') {
        const currentOrder = page.links.map((l: BioLinkItem) => l.id);
        const currentIndex = currentOrder.indexOf(linkId);
        if (direction === 'up' && currentIndex > 0) {
            [currentOrder[currentIndex], currentOrder[currentIndex - 1]] =
                [currentOrder[currentIndex - 1], currentOrder[currentIndex]];
        } else if (direction === 'down' && currentIndex < currentOrder.length - 1) {
            [currentOrder[currentIndex], currentOrder[currentIndex + 1]] =
                [currentOrder[currentIndex + 1], currentOrder[currentIndex]];
        }
        router.put('/bio/links-order', { order: currentOrder }, { preserveScroll: true });
    }

    function copyUrl() {
        navigator.clipboard.writeText(page.public_url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    function downloadQR() {
        const svg = document.getElementById('bio-qr-code');
        if (!svg) return;

        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
            const scale = 2000 / img.width;
            canvas.width = 2000;
            canvas.height = 2000;
            ctx?.scale(scale, scale);
            ctx?.drawImage(img, 0, 0);
            const link = document.createElement('a');
            link.download = `bio-${page.username}-qr.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        };

        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }

    const themeOptions = [
        { value: 'default', label: 'Light', preview: 'bg-gradient-to-b from-gray-50 to-white border-2 border-gray-200' },
        { value: 'dark', label: 'Dark', preview: 'bg-gradient-to-b from-gray-950 to-gray-900 border-2 border-gray-700' },
        { value: 'crimson', label: 'Crimson', preview: 'bg-gradient-to-b from-[#DC143C] to-[#8B0000] border-2 border-[#DC143C]' },
        { value: 'minimal', label: 'Minimal', preview: 'bg-white border-2 border-gray-300' },
        { value: 'gradient', label: 'Gradient', preview: 'bg-gradient-to-br from-purple-600 to-blue-500 border-2 border-purple-400' },
        { value: 'glass', label: 'Glass', preview: 'bg-gradient-to-br from-sky-300 to-indigo-400 border-2 border-sky-300' },
        { value: 'sunset', label: 'Sunset', preview: 'bg-gradient-to-br from-orange-400 to-rose-500 border-2 border-orange-400' },
        { value: 'neon', label: 'Neon', preview: 'bg-gradient-to-b from-violet-950 to-fuchsia-950 border-2 border-fuchsia-500' },
        { value: 'elegant', label: 'Elegant', preview: 'bg-gradient-to-b from-amber-50 to-orange-50 border-2 border-amber-300' },
        { value: 'facebook', label: 'Facebook', preview: 'bg-[#1877F2] border-2 border-[#1877F2]' },
        { value: 'x', label: 'X', preview: 'bg-black border-2 border-gray-600' },
        { value: 'instagram', label: 'Instagram', preview: 'bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#8a3ab9] border-2 border-[#dc2743]' },
        { value: 'youtube', label: 'YouTube', preview: 'bg-gradient-to-br from-[#FF0000] to-[#1a1a1a] border-2 border-[#FF0000]' },
        { value: 'tiktok', label: 'TikTok', preview: 'bg-black border-2 border-[#25F4EE]' },
        { value: 'linkedin', label: 'LinkedIn', preview: 'bg-[#0A66C2] border-2 border-[#0A66C2]' },
    ];

    const classicThemes = themeOptions.filter(t => !socialThemeSlugs.includes(t.value));
    const socialThemes = themeOptions.filter(t => socialThemeSlugs.includes(t.value));

    return (
        <Layout title="My Bio Page" hideNavigation={true} noIndex={true}>
            <div className="w-full max-w-5xl mx-auto px-4 space-y-6 pb-12">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold">My Bio Page</h1>
                        <p className="text-muted-foreground">
                            Customize your link-in-bio page
                        </p>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <Button
                            type="submit"
                            form="profile-form"
                            disabled={profileForm.processing}
                            className="gap-2 flex-1 sm:flex-none"
                            size="sm"
                        >
                            <Save className="h-4 w-4" />
                            {profileForm.processing ? 'Saving...' : 'Save Profile'}
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={copyUrl}
                            className="gap-2 flex-1 sm:flex-none"
                        >
                            {copied ? (
                                <><Check className="h-4 w-4 text-green-600" /> Copied!</>
                            ) : (
                                <><Copy className="h-4 w-4" /> Copy Link</>
                            )}
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="gap-2 flex-1 sm:flex-none"
                        >
                            <a href={page.public_url} target="_blank" rel="noopener noreferrer">
                                <Eye className="h-4 w-4" /> Preview
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Flash Message */}
                {flashMsg?.success && (
                    <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 py-3 rounded-lg text-sm">
                        {flashMsg.success}
                    </div>
                )}

                {/* Public URL & QR Code */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <div className="flex-1 w-full">
                                <p className="text-sm text-muted-foreground mb-1">Your public link</p>
                                <div className="flex items-center gap-2 bg-muted px-4 py-2.5 rounded-lg">
                                    <Link2 className="h-4 w-4 text-primary shrink-0" />
                                    <code className="text-sm font-mono font-semibold break-all">
                                        {page.public_url}
                                    </code>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-white p-2 rounded-lg shadow-sm">
                                    <QRCodeSVG
                                        id="bio-qr-code"
                                        value={page.public_url}
                                        size={80}
                                        level="H"
                                    />
                                </div>
                                <Button variant="ghost" size="sm" onClick={downloadQR} className="text-xs gap-1">
                                    <Download className="h-3 w-3" /> QR
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <form id="profile-form" onSubmit={handleProfileSubmit} className="space-y-6">
                    {/* Profile */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile</CardTitle>
                            <CardDescription>
                                Your name, username, and bio visible to visitors
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/* Avatar Preview */}
                            {page.avatar_url && (
                                <div className="flex items-center gap-3">
                                    <img
                                        src={page.avatar_url}
                                        alt={page.display_name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-border"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Profile photo from your Google account
                                    </p>
                                </div>
                            )}

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Username</label>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-muted-foreground shrink-0">npgo.to/@</span>
                                        <Input
                                            value={profileForm.data.username}
                                            onChange={e => profileForm.setData('username', e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                                            placeholder="yourname"
                                            maxLength={30}
                                            className={profileForm.errors.username ? 'border-destructive' : ''}
                                        />
                                    </div>
                                    {profileForm.errors.username && (
                                        <p className="text-sm text-destructive">{profileForm.errors.username}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Display Name</label>
                                    <Input
                                        value={profileForm.data.display_name}
                                        onChange={e => profileForm.setData('display_name', e.target.value)}
                                        placeholder="Your Name"
                                        maxLength={50}
                                        className={profileForm.errors.display_name ? 'border-destructive' : ''}
                                    />
                                    {profileForm.errors.display_name && (
                                        <p className="text-sm text-destructive">{profileForm.errors.display_name}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Bio</label>
                                <textarea
                                    value={profileForm.data.bio}
                                    onChange={e => profileForm.setData('bio', e.target.value)}
                                    placeholder="Tell people about yourself..."
                                    maxLength={160}
                                    rows={3}
                                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                                />
                                <p className="text-xs text-muted-foreground text-right">
                                    {profileForm.data.bio.length}/160
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Theme */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Theme</CardTitle>
                            <CardDescription>
                                Choose how your page looks. Preview it after saving.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            {/* Classic Themes */}
                            <div>
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Classic</p>
                                <div className="flex flex-wrap gap-2">
                                    {classicThemes.map(theme => (
                                        <button
                                            key={theme.value}
                                            type="button"
                                            onClick={() => profileForm.setData('theme', theme.value)}
                                            className={`flex flex-col items-center gap-1 p-1.5 rounded-lg transition-all ${
                                                profileForm.data.theme === theme.value
                                                    ? 'ring-2 ring-primary ring-offset-1'
                                                    : 'hover:bg-accent'
                                            }`}
                                        >
                                            <div className={`w-16 h-16 rounded-md ${theme.preview}`} />
                                            <span className="text-[10px] font-medium">{theme.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Social Media Themes */}
                            <div>
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Social Media</p>
                                <div className="flex flex-wrap gap-2">
                                    {socialThemes.map(theme => (
                                        <button
                                            key={theme.value}
                                            type="button"
                                            onClick={() => profileForm.setData('theme', theme.value)}
                                            className={`flex flex-col items-center gap-1 p-1.5 rounded-lg transition-all ${
                                                profileForm.data.theme === theme.value
                                                    ? 'ring-2 ring-primary ring-offset-1'
                                                    : 'hover:bg-accent'
                                            }`}
                                        >
                                            <div className={`w-16 h-16 rounded-md ${theme.preview}`} />
                                            <span className="text-[10px] font-medium">{theme.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </form>

                {/* Links Manager */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>Links ({page.links.length})</CardTitle>
                                <CardDescription>
                                    Add and manage the links on your bio page
                                </CardDescription>
                            </div>
                            <Button
                                size="sm"
                                onClick={() => setShowAddLink(true)}
                                className="gap-2"
                            >
                                <Plus className="h-4 w-4" /> Add Link
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {/* Add Link Form */}
                        {showAddLink && (
                            <Card className="border-primary/50 border-dashed">
                                <CardContent className="pt-4">
                                    <form onSubmit={handleAddLink} className="space-y-3">
                                        <div className="space-y-1">
                                            <Input
                                                value={newLinkForm.data.title}
                                                onChange={e => newLinkForm.setData('title', e.target.value)}
                                                placeholder="Link title (e.g., My Website)"
                                                maxLength={100}
                                                className={newLinkForm.errors.title ? 'border-destructive' : ''}
                                            />
                                            {newLinkForm.errors.title && (
                                                <p className="text-sm text-destructive">{newLinkForm.errors.title}</p>
                                            )}
                                        </div>
                                        <div className="space-y-1">
                                            <Input
                                                value={newLinkForm.data.url}
                                                onChange={e => newLinkForm.setData('url', e.target.value)}
                                                placeholder="https://example.com"
                                                maxLength={2048}
                                                className={newLinkForm.errors.url ? 'border-destructive' : ''}
                                            />
                                            {newLinkForm.errors.url && (
                                                <p className="text-sm text-destructive">{newLinkForm.errors.url}</p>
                                            )}
                                        </div>
                                        <div className="flex gap-2">
                                            <Button type="submit" size="sm" disabled={newLinkForm.processing} className="gap-2">
                                                <Plus className="h-4 w-4" />
                                                {newLinkForm.processing ? 'Adding...' : 'Add'}
                                            </Button>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => { setShowAddLink(false); newLinkForm.reset(); }}
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        )}

                        {/* Links List */}
                        {page.links.length === 0 && !showAddLink ? (
                            <div className="text-center py-12">
                                <Link2 className="h-12 w-12 mx-auto text-muted-foreground/50" />
                                <h3 className="mt-4 text-lg font-semibold">No links yet</h3>
                                <p className="text-muted-foreground mb-4">
                                    Add your first link to get started
                                </p>
                                <Button onClick={() => setShowAddLink(true)} className="gap-2">
                                    <Plus className="h-4 w-4" /> Add Your First Link
                                </Button>
                            </div>
                        ) : (
                            page.links.map((link: BioLinkItem, index: number) => (
                                <div
                                    key={link.id}
                                    className={`group rounded-lg border p-4 transition-all ${
                                        !link.is_active ? 'opacity-50' : ''
                                    }`}
                                >
                                    {editingLinkId === link.id ? (
                                        /* Edit Mode */
                                        <form onSubmit={(e) => handleEditLink(e, link.id)} className="space-y-3">
                                            <Input
                                                value={editLinkForm.data.title}
                                                onChange={e => editLinkForm.setData('title', e.target.value)}
                                                placeholder="Link title"
                                                maxLength={100}
                                            />
                                            <Input
                                                value={editLinkForm.data.url}
                                                onChange={e => editLinkForm.setData('url', e.target.value)}
                                                placeholder="https://example.com"
                                                maxLength={2048}
                                            />
                                            <div className="flex gap-2">
                                                <Button type="submit" size="sm" disabled={editLinkForm.processing}>
                                                    {editLinkForm.processing ? 'Saving...' : 'Save'}
                                                </Button>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => setEditingLinkId(null)}
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </form>
                                    ) : (
                                        /* Display Mode */
                                        <div className="flex items-center gap-3">
                                            {/* Reorder Buttons */}
                                            <div className="flex flex-col gap-0.5 shrink-0">
                                                <button
                                                    onClick={() => moveLink(link.id, 'up')}
                                                    disabled={index === 0}
                                                    className="p-0.5 rounded hover:bg-accent disabled:opacity-30 text-muted-foreground"
                                                    title="Move up"
                                                >
                                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                                                </button>
                                                <GripVertical className="h-4 w-4 text-muted-foreground/50" />
                                                <button
                                                    onClick={() => moveLink(link.id, 'down')}
                                                    disabled={index === page.links.length - 1}
                                                    className="p-0.5 rounded hover:bg-accent disabled:opacity-30 text-muted-foreground"
                                                    title="Move down"
                                                >
                                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </button>
                                            </div>

                                            {/* Link Info */}
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium truncate">{link.title}</p>
                                                <p className="text-sm text-muted-foreground truncate">{link.url}</p>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex items-center gap-1 shrink-0">
                                                {/* Toggle Active */}
                                                <button
                                                    onClick={() => toggleLinkActive(link)}
                                                    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                                                        link.is_active ? 'bg-primary' : 'bg-input'
                                                    }`}
                                                    title={link.is_active ? 'Disable link' : 'Enable link'}
                                                >
                                                    <span className={`pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform ${
                                                        link.is_active ? 'translate-x-4' : 'translate-x-0'
                                                    }`} />
                                                </button>

                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => startEditLink(link)}
                                                    title="Edit link"
                                                    className="h-8 w-8"
                                                >
                                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                                </Button>

                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8 text-destructive hover:text-destructive"
                                                            title="Delete link"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Delete link?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This will permanently remove <strong>{link.title}</strong> from your bio page.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                            <AlertDialogAction
                                                                onClick={() => deleteLink(link.id)}
                                                                className="bg-destructive text-white hover:bg-destructive/90"
                                                            >
                                                                Delete
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </CardContent>
                </Card>

                {/* Bottom Save Button */}
                <Button
                    type="submit"
                    form="profile-form"
                    disabled={profileForm.processing}
                    className="gap-2 w-full sm:w-auto"
                    size="lg"
                >
                    <Save className="h-4 w-4" />
                    {profileForm.processing ? 'Saving...' : 'Save Profile'}
                </Button>
            </div>
        </Layout>
    );
}
