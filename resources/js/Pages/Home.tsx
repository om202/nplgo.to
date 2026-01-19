import { useForm } from '@inertiajs/react';
import { useRef, useEffect, FormEvent, ReactNode } from 'react';
import Layout from '@/Layouts/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Zap, Shield, Globe, ArrowRight } from 'lucide-react';

export default function Home() {
    const inputRef = useRef<HTMLInputElement>(null);
    const { data, setData, post, processing, errors } = useForm({
        url: '',
    });

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post('/');
    }

    return (
        <Layout title="Home">
            <div className="w-full max-w-5xl mx-auto space-y-16">
                {/* Hero Section */}
                <section className="text-center space-y-6 pt-12">
                    {/* NobleStack Branding */}
                    <a
                        href="https://www.noblestack.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <img
                            src="/images/noblestack-logo.png"
                            alt="NobleStack"
                            className="h-6 w-6"
                        />
                        <span>A NobleStack Product</span>
                    </a>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Nepali URL Shortner
                    </h1>

                    <p className="text-muted-foreground text-lg max-w-xl mx-auto tracking-tight">
                        Free, fast, and reliable URL shortener made for Nepal
                    </p>

                    {/* URL Shortener Form */}
                    <Card className="max-w-xl mx-auto bg-muted/50 mt-10">
                        <CardHeader className="pb-0">
                            <CardTitle className="text-base font-medium">Paste URL to make it small</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="flex gap-2">
                                <div className="flex-1">
                                    <Input
                                        ref={inputRef}
                                        type="text"
                                        value={data.url}
                                        onChange={e => setData('url', e.target.value)}
                                        placeholder="https://example.com/your-long-url/"
                                        className={`h-12 bg-background ${errors.url ? 'border-destructive' : ''}`}
                                    />
                                    {errors.url && (
                                        <p className="text-sm text-destructive text-left mt-1">{errors.url}</p>
                                    )}
                                </div>
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    size="lg"
                                    className="h-12 px-6"
                                >
                                    {processing ? 'Wait...' : 'Shorten'}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Features Section */}
                <section className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold">Why npgo.to?</h2>
                        <p className="text-muted-foreground">Simple, fast, and built for everyone.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={<Zap className="h-6 w-6" />}
                            title="Lightning Fast"
                            description="Create short URLs in milliseconds. No sign-up required."
                        />
                        <FeatureCard
                            icon={<Shield className="h-6 w-6" />}
                            title="Reliable"
                            description="Your links work forever. 99.9% uptime guaranteed."
                        />
                        <FeatureCard
                            icon={<Globe className="h-6 w-6" />}
                            title="Global Reach"
                            description="Short domain that works everywhere in the world."
                        />
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center text-sm text-muted-foreground pb-8 space-y-4">
                    <Separator />
                    <div className="flex items-center justify-center gap-2">
                        <span>Built by</span>
                        <a
                            href="https://www.noblestack.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary transition-colors"
                        >
                            <img
                                src="/images/noblestack-logo.png"
                                alt="NobleStack"
                                className="h-5 w-5"
                            />
                            NobleStack
                        </a>
                    </div>
                    <p>© 2026 npgo.to — All rights reserved</p>
                </footer>
            </div>
        </Layout>
    );
}

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <Card>
            <CardContent className="pt-6 text-center space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {icon}
                </div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}
