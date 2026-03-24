import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import { getAllBlogPosts } from '@/data/blogData';
import { BookOpen, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

export default function Blog() {
    const posts = getAllBlogPosts();

    return (
        <Layout
            title="Blog"
            description="Tips, guides, and insights on URL shortening, QR code generation, and digital marketing for Nepali businesses. By Noble Stack."
            canonicalPath="/blog"
        >
            <Head>
                {/* Blog Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "npgo.to Blog — URL Shortening & Digital Marketing Tips for Nepal",
                        "description": "Tips, guides, and insights on URL shortening, QR code generation, and digital marketing for Nepali businesses.",
                        "url": "https://npgo.to/blog",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Noble Stack",
                            "url": "https://www.noblestack.io",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://npgo.to/images/noblestack-logo.webp"
                            }
                        },
                        "blogPost": posts.map(post => ({
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "description": post.description,
                            "url": `https://npgo.to/blog/${post.slug}`,
                            "datePublished": post.publishDate,
                            "dateModified": post.updatedDate,
                            "author": {
                                "@type": "Organization",
                                "name": post.author,
                                "url": "https://www.noblestack.io"
                            }
                        }))
                    })}
                </script>
            </Head>

            {/* Hero Section */}
            <section className="relative text-center pt-20 sm:pt-24 md:pt-28 pb-28 sm:pb-36 md:pb-44 -mt-20">
                <div className="absolute inset-0 -z-10">
                    <img
                        src="/hero.webp"
                        alt="Nepal landscape - npgo.to blog"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/75 to-background"></div>
                </div>

                <div className="relative z-10 px-4 sm:px-6 md:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
                        <span className="text-primary">npgo.to</span> Blog
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mt-3">
                        Tips, guides, and insights on URL shortening, QR codes, and digital marketing for Nepali businesses.
                    </p>
                </div>
            </section>

            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 -mt-12 sm:-mt-16 md:-mt-20">

                {/* Blog Posts Grid */}
                <section className="py-16 sm:py-20">
                    <div className="space-y-6">
                        {posts.map((post) => (
                            <a key={post.slug} href={`/blog/${post.slug}`} className="block group">
                                <Card className="border-border/60 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                                    <CardContent className="pt-6 pb-6 sm:pt-8 sm:pb-8">
                                        <div className="space-y-3">
                                            {/* Category Badge */}
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium">
                                                    <Tag className="h-3 w-3" />
                                                    {post.category}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            {/* Meta */}
                                            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-3.5 w-3.5" />
                                                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="h-3.5 w-3.5" />
                                                    {post.readingTime} min read
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <BookOpen className="h-3.5 w-3.5" />
                                                    {post.author}
                                                </span>
                                            </div>

                                            {/* Read More */}
                                            <div className="pt-2">
                                                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                                                    Read full article <ArrowRight className="h-4 w-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        ))}
                    </div>
                </section>

                <Separator />

                {/* CTA */}
                <section className="text-center py-16 sm:py-20">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to Shorten Your First Link?</h2>
                    <p className="text-muted-foreground text-sm sm:text-base mt-2">
                        Create short links, QR codes, and bio pages in seconds. Completely free.
                    </p>
                    <a href="/" className="inline-block mt-6">
                        <Button size="lg" className="gap-2">
                            Start Shortening URLs <ArrowRight className="h-4 w-4" />
                        </Button>
                    </a>
                </section>

                <Footer />
            </div>
        </Layout>
    );
}
