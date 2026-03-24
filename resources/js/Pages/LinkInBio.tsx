import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import {
    UserCircle,
    ArrowRight,
    CheckCircle,
    Link2,
    Palette,
    Globe,
    Share2,
    Smartphone,
    Megaphone,
    Music,
    ShoppingBag,
    Camera,
    GraduationCap,
    Briefcase,
    QrCode,
    Scissors,
    BookOpen,
} from 'lucide-react';

export default function LinkInBio() {
    return (
        <Layout
            title="Free Link in Bio Page for Nepal: All Your Links in One Place"
            description="Create a free Link in Bio page with npgo.to. One link for all your social media profiles, portfolio, and content. Designed for Nepali creators, businesses, and influencers. Quick Google sign-in, unlimited links."
            canonicalPath="/link-in-bio"
        >
            {/* Page-specific structured data */}
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "npgo.to Free Link in Bio",
                        "applicationCategory": "UtilitiesApplication",
                        "operatingSystem": "Web",
                        "description": "Free Link in Bio page for Nepal. Create a beautiful bio page with all your links in one place. Perfect for Instagram, TikTok, Facebook, and YouTube. Quick Google sign-in.",
                        "url": "https://npgo.to/link-in-bio",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "NPR"
                        },
                        "creator": {
                            "@type": "Organization",
                            "name": "Noble Stack",
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
                                "name": "What is a Link in Bio page?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A Link in Bio page is a single landing page that contains all your important links. Instead of being limited to one link in your social media bio, you share your bio page link and visitors can access all your content, social profiles, and websites from one place."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is the npgo.to Link in Bio page free?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, completely free. Create your bio page, add unlimited links, choose a theme, and share it with your audience. No premium tiers or hidden fees. Built by Noble Stack for Nepal."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How do I create a Link in Bio page on npgo.to?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sign in with Google, go to your Bio Page editor, add your links, choose a theme, and share your unique URL (npgo.to/@yourname). It takes less than 2 minutes."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I customize the look of my bio page?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes! Choose from 15 beautiful themes including Light, Dark, Crimson, Minimal, Gradient, Glass, Neon, and social media themes for Facebook, Instagram, TikTok, YouTube, X, and LinkedIn. Each theme gives your page a unique, professional look."
                                }
                            }
                        ]
                    })}
                </script>
            </Head>

            {/* Hero Section */}
            <section className="relative text-center pt-20 sm:pt-24 md:pt-28 pb-28 sm:pb-36 md:pb-44 -mt-20">
                <div className="absolute inset-0 -z-10">
                    <img
                        src="/hero.webp"
                        alt="Nepal landscape - free Link in Bio page for Nepal"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/75 to-background"></div>
                </div>

                <div className="relative z-10 px-4 sm:px-6 md:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
                        Free <span className="text-primary">Link in Bio</span> Page for Nepal
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mt-3">
                        One link for everything. Share all your content, social profiles, and websites from a single beautiful page. Built for Nepali creators and businesses.
                    </p>
                    <div className="mt-6">
                        <a href="/bio">
                            <Button size="lg" className="gap-2">
                                <UserCircle className="h-5 w-5" />
                                Create Your Bio Page Free
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 -mt-12 sm:-mt-16 md:-mt-20">

                {/* Works With Platforms */}
                <section className="py-10 sm:py-12">
                    <p className="text-center text-xs text-muted-foreground font-medium uppercase tracking-wider mb-6">Works with all your platforms</p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-x-8">
                        {[
                            { name: 'Instagram', svg: <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"/></svg> },
                            { name: 'TikTok', svg: <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z"/></svg> },
                            { name: 'YouTube', svg: <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z"/></svg> },
                            { name: 'Facebook', svg: <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95Z"/></svg> },
                            { name: 'X (Twitter)', svg: <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                            { name: 'LinkedIn', svg: <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg> },
                            { name: 'Spotify', svg: <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m4.586 14.424a.622.622 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 0 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 0 1 .207.857m1.224-2.719a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 0 1-.973-.519.781.781 0 0 1 .52-.972c3.632-1.102 8.147-.568 11.234 1.328a.78.78 0 0 1 .256 1.072m.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.936.936 0 0 1-1.165-.623.937.937 0 0 1 .624-1.165c3.532-1.073 9.404-.866 13.115 1.338a.936.936 0 0 1-1.165 1.165.936.936 0 0 1 .209-.555Z"/></svg> },
                            { name: 'WhatsApp', svg: <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg> },
                        ].map((platform) => (
                            <div key={platform.name} className="flex items-center gap-1.5 text-muted-foreground">
                                {platform.svg}
                                <span className="text-xs font-medium">{platform.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <Separator />
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What is a Link in Bio?</h2>
                    </div>
                    <Card className="border-border/60">
                        <CardContent className="pt-5 pb-5">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <UserCircle className="h-6 w-6" />
                                </div>
                                <div className="space-y-3">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Most social media platforms only allow one clickable link in your profile. A Link in Bio page solves this by giving you one URL that leads to a landing page with all your important links.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Whether you're a content creator on TikTok, a business on Instagram, or an artist sharing your work, your Link in Bio page becomes your personal hub on the internet. With npgo.to, your page lives at <strong className="text-foreground">npgo.to/@yourname</strong>, completely free.
                                    </p>
                                    <ul className="grid gap-2">
                                        {[
                                            'Replace the single-link limitation on Instagram, TikTok, YouTube, and more',
                                            'Share your website, shop, portfolio, and social profiles from one link',
                                            'Beautiful, mobile-first design that works on every device',
                                            'Free forever with no premium tiers or paywalls',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Features */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Features</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { icon: Link2, title: 'Unlimited Links', desc: 'Add as many links as you need. No caps, no limits.' },
                            { icon: Palette, title: '15 Themes', desc: 'Choose from classic styles plus social media themes for Facebook, Instagram, TikTok, YouTube, X, and LinkedIn.' },
                            { icon: Globe, title: 'Custom Username', desc: 'Get your unique npgo.to/@yourname URL to share everywhere.' },
                            { icon: Smartphone, title: 'Mobile-First Design', desc: 'Looks stunning on phones, tablets, and desktops.' },
                            { icon: Share2, title: 'Social Media Ready', desc: 'Optimized for sharing on Instagram, TikTok, YouTube, and Facebook.' },
                            { icon: QrCode, title: 'QR Code Included', desc: 'Every bio page gets a free QR code for print materials.' },
                        ].map((feature) => (
                            <Card key={feature.title} className="border-border/60">
                                <CardContent className="pt-5 pb-5">
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <feature.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-sm">{feature.title}</h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">{feature.desc}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <Separator />

                {/* Use Cases */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Who Uses Link in Bio?</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: Camera, title: 'Content Creators', desc: 'Share your YouTube, TikTok, blog, and merch store from one link.' },
                            { icon: ShoppingBag, title: 'Online Businesses', desc: 'Link to your products, WhatsApp, and payment options in one page.' },
                            { icon: Music, title: 'Musicians & Artists', desc: 'Share Spotify, Apple Music, SoundCloud, and event tickets together.' },
                            { icon: Megaphone, title: 'Marketers', desc: 'Drive traffic to campaigns, landing pages, and lead forms.' },
                            { icon: GraduationCap, title: 'Educators', desc: 'Share course links, resources, class schedules, and office hours.' },
                            { icon: Briefcase, title: 'Freelancers', desc: 'Showcase your portfolio, testimonials, contact form, and booking link.' },
                        ].map((useCase) => (
                            <Card key={useCase.title} className="border-border/60">
                                <CardContent className="pt-5 pb-5 text-center space-y-2">
                                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <useCase.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-semibold text-sm">{useCase.title}</h3>
                                    <p className="text-xs text-muted-foreground">{useCase.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <Separator />

                {/* How It Works */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How It Works</h2>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {[
                            { step: '1', title: 'Sign In', desc: 'Sign in with Google. No password or account to create.' },
                            { step: '2', title: 'Add Your Links', desc: 'Add your links, choose a theme, and customize your page.' },
                            { step: '3', title: 'Share Everywhere', desc: 'Copy your npgo.to/@name link and paste it in your social bios.' },
                        ].map((item) => (
                            <Card key={item.step} className="border-border/60">
                                <CardContent className="pt-5 pb-5 text-center space-y-2">
                                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                                        {item.step}
                                    </div>
                                    <h3 className="font-semibold text-sm">{item.title}</h3>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                <Separator />

                {/* Example Bio Pages */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Example Bio Pages</h2>
                        <p className="text-sm text-muted-foreground mt-2">See how different creators and businesses use their bio page.</p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {/* Creator Example - Gradient Theme */}
                        <div className="rounded-2xl overflow-hidden border border-border/60 shadow-sm">
                            <div className="bg-linear-to-br from-purple-600 to-blue-500 px-5 pt-8 pb-6 text-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 mx-auto flex items-center justify-center text-white text-2xl font-bold">A</div>
                                <h3 className="text-white font-semibold mt-3 text-sm">Anisha Sharma</h3>
                                <p className="text-white/70 text-xs mt-0.5">Content Creator from Kathmandu</p>
                            </div>
                            <div className="bg-linear-to-b from-purple-600/5 to-transparent p-4 space-y-2">
                                <div className="rounded-lg border border-purple-200 bg-white px-4 py-2.5 text-center text-xs font-medium text-purple-700">YouTube Channel</div>
                                <div className="rounded-lg border border-purple-200 bg-white px-4 py-2.5 text-center text-xs font-medium text-purple-700">TikTok Videos</div>
                                <div className="rounded-lg border border-purple-200 bg-white px-4 py-2.5 text-center text-xs font-medium text-purple-700">Buy My Merch</div>
                                <div className="rounded-lg border border-purple-200 bg-white px-4 py-2.5 text-center text-xs font-medium text-purple-700">Book a Collab</div>
                                <p className="text-[10px] text-muted-foreground text-center pt-1">npgo.to/@anisha</p>
                            </div>
                        </div>

                        {/* Business Example - Modern Theme */}
                        <div className="rounded-2xl overflow-hidden border border-border/60 shadow-sm">
                            <div className="bg-slate-900 px-5 pt-8 pb-6 text-center">
                                <div className="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center text-white text-2xl font-bold">H</div>
                                <h3 className="text-white font-semibold mt-3 text-sm">Himalayan Bites</h3>
                                <p className="text-white/50 text-xs mt-0.5">Nepali Restaurant in Pokhara</p>
                            </div>
                            <div className="bg-slate-900/5 p-4 space-y-2">
                                <div className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-center text-xs font-medium text-slate-800">View Our Menu</div>
                                <div className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-center text-xs font-medium text-slate-800">Order on WhatsApp</div>
                                <div className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-center text-xs font-medium text-slate-800">Reserve a Table</div>
                                <div className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-center text-xs font-medium text-slate-800">Google Maps</div>
                                <p className="text-[10px] text-muted-foreground text-center pt-1">npgo.to/@himalayanbites</p>
                            </div>
                        </div>

                        {/* Artist Example - Sunset Theme */}
                        <div className="rounded-2xl overflow-hidden border border-border/60 shadow-sm">
                            <div className="bg-linear-to-br from-orange-400 to-rose-500 px-5 pt-8 pb-6 text-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 mx-auto flex items-center justify-center text-white text-2xl font-bold">R</div>
                                <h3 className="text-white font-semibold mt-3 text-sm">Rajan Music</h3>
                                <p className="text-white/70 text-xs mt-0.5">Musician and Producer</p>
                            </div>
                            <div className="bg-linear-to-b from-orange-400/5 to-transparent p-4 space-y-2">
                                <div className="rounded-lg border border-orange-200 bg-white px-4 py-2.5 text-center text-xs font-medium text-orange-700">Listen on Spotify</div>
                                <div className="rounded-lg border border-orange-200 bg-white px-4 py-2.5 text-center text-xs font-medium text-orange-700">Apple Music</div>
                                <div className="rounded-lg border border-orange-200 bg-white px-4 py-2.5 text-center text-xs font-medium text-orange-700">Upcoming Shows</div>
                                <div className="rounded-lg border border-orange-200 bg-white px-4 py-2.5 text-center text-xs font-medium text-orange-700">Contact for Booking</div>
                                <p className="text-[10px] text-muted-foreground text-center pt-1">npgo.to/@rajanmusic</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Available Themes */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Beautiful Themes</h2>
                        <p className="text-sm text-muted-foreground mt-2">Choose a theme that matches your style. All themes are free.</p>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                        {[
                            { name: 'Light', colors: 'from-gray-50 to-white' },
                            { name: 'Dark', colors: 'from-gray-950 to-gray-900' },
                            { name: 'Crimson', colors: 'from-[#DC143C] to-[#8B0000]' },
                            { name: 'Minimal', colors: 'from-white to-gray-50' },
                            { name: 'Gradient', colors: 'from-purple-600 to-blue-500' },
                            { name: 'Glass', colors: 'from-sky-200 to-indigo-200' },
                            { name: 'Elegant', colors: 'from-amber-50 to-orange-50' },
                            { name: 'Sunset', colors: 'from-orange-400 to-rose-500' },
                            { name: 'Neon', colors: 'from-violet-950 to-fuchsia-950' },
                            { name: 'Facebook', colors: 'from-[#1877F2] to-[#0a4a9e]' },
                            { name: 'X', colors: 'from-black to-gray-900' },
                            { name: 'Instagram', colors: 'from-[#f09433] via-[#dc2743] to-[#8a3ab9]' },
                            { name: 'YouTube', colors: 'from-[#FF0000] to-[#1a1a1a]' },
                            { name: 'TikTok', colors: 'from-black to-gray-900' },
                            { name: 'LinkedIn', colors: 'from-[#0A66C2] to-[#063d75]' },
                        ].map((theme) => (
                            <div key={theme.name} className="rounded-lg overflow-hidden border border-border/60">
                                <div className={`h-16 sm:h-20 bg-linear-to-br ${theme.colors}`}></div>
                                <div className="p-2 text-center">
                                    <p className="text-xs font-medium">{theme.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <Separator />

                {/* Comparison */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">npgo.to vs Other Link in Bio Tools</h2>
                    </div>
                    <Card className="border-border/60">
                        <CardContent className="pt-5 pb-5">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-2 pr-4 font-semibold">Feature</th>
                                            <th className="text-center py-2 px-3 font-semibold text-primary">npgo.to</th>
                                            <th className="text-center py-2 px-3 font-semibold">Linktree</th>
                                            <th className="text-center py-2 px-3 font-semibold">Bio.link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: 'Free bio page', npgo: '✓', linktree: '✓', biolink: '✓' },
                                            { feature: 'Unlimited links', npgo: '✓', linktree: 'Limited', biolink: '✓' },
                                            { feature: 'Custom themes', npgo: '9+ Free', linktree: 'Paid', biolink: 'Limited' },
                                            { feature: 'URL shortener included', npgo: '✓', linktree: '✗', biolink: '✗' },
                                            { feature: 'QR code generator', npgo: '✓', linktree: 'Paid', biolink: '✗' },
                                            { feature: 'No branding', npgo: '✓', linktree: 'Paid', biolink: 'Paid' },
                                            { feature: 'Made for Nepal', npgo: '✓', linktree: '✗', biolink: '✗' },
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b last:border-b-0">
                                                <td className="py-2 pr-4 text-muted-foreground">{row.feature}</td>
                                                <td className="py-2 px-3 text-center font-medium text-primary">{row.npgo}</td>
                                                <td className="py-2 px-3 text-center text-muted-foreground">{row.linktree}</td>
                                                <td className="py-2 px-3 text-center text-muted-foreground">{row.biolink}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* FAQ */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'What is a Link in Bio page?',
                                a: 'A Link in Bio page is a single landing page that holds all your important links. Instead of being limited to one link in your Instagram, TikTok, or YouTube bio, you share your bio page URL and visitors can access everything from one place.',
                            },
                            {
                                q: 'Is the npgo.to Link in Bio page really free?',
                                a: 'Yes, completely free. Create your bio page, add unlimited links, choose from 9+ themes, and share it with your audience. No premium tiers, no hidden fees. Built by Noble Stack for Nepal.',
                            },
                            {
                                q: 'How do I create my bio page?',
                                a: 'Sign in with Google, go to the Bio Page editor, set your username, add your links, pick a theme, and your page is live at npgo.to/@yourname. It takes less than 2 minutes.',
                            },
                            {
                                q: 'Can I use a custom username?',
                                a: 'Yes! Choose any available username and your bio page will be accessible at npgo.to/@yourname. This is the link you share on all your social media profiles.',
                            },
                        ].map((faq, i) => (
                            <Card key={i} className="border-border/60">
                                <CardContent className="pt-5 pb-5">
                                    <h3 className="font-semibold text-sm mb-1.5">{faq.q}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <Separator />

                {/* Cross Links */}
                <section className="py-16 sm:py-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Explore More npgo.to Tools</h2>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <a href="/features">
                            <Card className="hover:border-primary/50 border-border/60 transition-colors h-full">
                                <CardContent className="pt-5 pb-5">
                                    <div className="flex items-start gap-3">
                                        <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-semibold text-sm">All Features</h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">See everything npgo.to offers</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                        <a href="/qr-code-generator">
                            <Card className="hover:border-primary/50 border-border/60 transition-colors h-full">
                                <CardContent className="pt-5 pb-5">
                                    <div className="flex items-start gap-3">
                                        <QrCode className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-semibold text-sm">QR Code Generator</h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">Generate free high-res QR codes</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                        <a href="/how-to-shorten-url">
                            <Card className="hover:border-primary/50 border-border/60 transition-colors h-full">
                                <CardContent className="pt-5 pb-5">
                                    <div className="flex items-start gap-3">
                                        <Scissors className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-semibold text-sm">How to Shorten URLs</h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">Step-by-step guide with tips</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    </div>
                </section>

                <Separator />

                {/* CTA */}
                <section className="text-center py-16 sm:py-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Create Your Bio Page Now</h2>
                    <p className="text-muted-foreground text-sm sm:text-base mt-2">
                        Set up your bio page in under 2 minutes. Free forever, no premium tiers.
                    </p>
                    <a href="/bio" className="inline-block mt-6">
                        <Button size="lg" className="gap-2">
                            Get Started Free <ArrowRight className="h-4 w-4" />
                        </Button>
                    </a>
                </section>

                <Footer />
            </div>
        </Layout>
    );
}
