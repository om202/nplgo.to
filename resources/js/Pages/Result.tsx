import { useState } from 'react';
import { Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Copy, Check, Plus } from 'lucide-react';

interface ResultProps {
    shortUrl: string;
    displayUrl: string;
    originalUrl: string;
}

export default function Result({ shortUrl, displayUrl, originalUrl }: ResultProps) {
    const [copied, setCopied] = useState(false);

    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(shortUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            const input = document.createElement('input');
            input.value = shortUrl;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    }

    return (
        <Layout title="URL Shortened">
            <Card className="w-full max-w-md text-center">
                <CardHeader className="space-y-1">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">URL Shortened!</CardTitle>
                    <CardDescription>Your short link is ready</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="rounded-lg bg-muted p-4 space-y-2">
                        <a
                            href={shortUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-primary hover:underline break-all"
                        >
                            {displayUrl}
                        </a>
                        <p className="text-xs text-muted-foreground break-all">
                            {originalUrl.length > 60 ? `${originalUrl.substring(0, 60)}...` : originalUrl}
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <Button onClick={copyToClipboard} className="flex-1" size="lg">
                            {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                            {copied ? 'Copied!' : 'Copy'}
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/">
                                <Plus className="mr-2 h-4 w-4" />
                                New
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Layout>
    );
}
