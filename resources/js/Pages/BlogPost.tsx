import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import { getBlogPost, getAllBlogPosts } from '@/data/blogData';
import { Calendar, Clock, BookOpen, ArrowRight, ArrowLeft, Tag, List, ChevronRight } from 'lucide-react';

interface BlogPostProps {
    slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
    const post = getBlogPost(slug);
    const allPosts = getAllBlogPosts();

    if (!post) {
        return (
            <Layout title="Post Not Found" canonicalPath="/blog" noIndex>
                <div className="w-full max-w-4xl mx-auto px-4 py-32 text-center">
                    <h1 className="text-3xl font-bold">Post Not Found</h1>
                    <p className="text-muted-foreground mt-2">The blog post you're looking for doesn't exist.</p>
                    <a href="/blog" className="inline-block mt-6">
                        <Button variant="outline" className="gap-2">
                            <ArrowLeft className="h-4 w-4" /> Back to Blog
                        </Button>
                    </a>
                </div>
            </Layout>
        );
    }

    // Related posts (exclude current)
    const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3);

    const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <Layout
            title={post.title}
            description={post.description}
            canonicalPath={`/blog/${post.slug}`}
        >
            <Head>
                {/* Article Meta Tags */}
                <meta property="article:published_time" content={post.publishDate} />
                <meta property="article:modified_time" content={post.updatedDate} />
                <meta property="article:author" content="Noble Stack" />
                <meta property="article:section" content={post.category} />
                <meta name="keywords" content={post.keywords} />

                {/* BlogPosting Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://npgo.to/blog/${post.slug}`
                        },
                        "headline": post.title,
                        "description": post.description,
                        "image": "https://npgo.to/main.webp",
                        "author": {
                            "@type": "Organization",
                            "name": "Noble Stack",
                            "url": "https://www.noblestack.io"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Noble Stack",
                            "url": "https://www.noblestack.io",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://npgo.to/images/noblestack-logo.webp"
                            }
                        },
                        "datePublished": post.publishDate,
                        "dateModified": post.updatedDate,
                        "wordCount": post.readingTime * 200,
                        "articleSection": post.category,
                        "keywords": post.keywords,
                        "inLanguage": "en",
                        "isPartOf": {
                            "@type": "Blog",
                            "name": "npgo.to Blog",
                            "url": "https://npgo.to/blog"
                        }
                    })}
                </script>

                {/* FAQ Schema */}
                {post.faqs.length > 0 && (
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": post.faqs.map(faq => ({
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer
                                }
                            }))
                        })}
                    </script>
                )}

                {/* Breadcrumb Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://npgo.to/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blog",
                                "item": "https://npgo.to/blog"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": post.title,
                                "item": `https://npgo.to/blog/${post.slug}`
                            }
                        ]
                    })}
                </script>
            </Head>

            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">

                {/* Breadcrumb Navigation */}
                <nav className="flex items-center gap-1.5 text-xs text-muted-foreground py-4 overflow-x-auto">
                    <a href="/" className="hover:text-foreground transition-colors whitespace-nowrap">Home</a>
                    <ChevronRight className="h-3 w-3 shrink-0" />
                    <a href="/blog" className="hover:text-foreground transition-colors whitespace-nowrap">Blog</a>
                    <ChevronRight className="h-3 w-3 shrink-0" />
                    <span className="text-foreground truncate">{post.title}</span>
                </nav>

                {/* Article Header */}
                <header className="pt-4 pb-8 sm:pt-6 sm:pb-12">
                    <div className="space-y-4">
                        {/* Category */}
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium">
                            <Tag className="h-3 w-3" />
                            {post.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                            {post.title}
                        </h1>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
                            {post.description}
                        </p>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                {formattedDate}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                {post.readingTime} min read
                            </span>
                            <span className="flex items-center gap-1">
                                <BookOpen className="h-3.5 w-3.5" />
                                By {post.author}
                            </span>
                        </div>
                    </div>
                </header>

                <Separator />

                {/* Table of Contents */}
                {post.headings.length > 0 && (
                    <aside className="py-8">
                        <Card className="border-border/60">
                            <CardContent className="pt-5 pb-5">
                                <h2 className="flex items-center gap-2 font-semibold text-sm mb-3">
                                    <List className="h-4 w-4 text-primary" />
                                    Table of Contents
                                </h2>
                                <nav>
                                    <ol className="space-y-1.5 list-decimal list-inside text-sm">
                                        {post.headings.map((heading) => (
                                            <li key={heading.id}>
                                                <a
                                                    href={`#${heading.id}`}
                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    {heading.text}
                                                </a>
                                            </li>
                                        ))}
                                        {post.faqs.length > 0 && (
                                            <li>
                                                <a
                                                    href="#faq"
                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    Frequently Asked Questions
                                                </a>
                                            </li>
                                        )}
                                    </ol>
                                </nav>
                            </CardContent>
                        </Card>
                    </aside>
                )}

                {/* Article Content — rendered from Markdown */}
                <article
                    className="pb-8 prose prose-sm sm:prose-base max-w-none
                        prose-headings:tracking-tight prose-headings:font-semibold prose-headings:scroll-mt-20
                        prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                        prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-foreground
                        prose-p:text-muted-foreground prose-p:leading-relaxed
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-foreground prose-strong:font-semibold
                        prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                        prose-li:text-muted-foreground prose-li:leading-relaxed
                        prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
                        prose-table:text-sm
                        prose-th:bg-muted/50 prose-th:px-3 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-th:text-foreground prose-th:text-xs prose-th:border prose-th:border-border
                        prose-td:px-3 prose-td:py-2 prose-td:text-muted-foreground prose-td:border prose-td:border-border prose-td:text-xs
                        prose-img:rounded-lg prose-img:shadow-md"
                    dangerouslySetInnerHTML={{ __html: post.htmlContent }}
                />

                {/* FAQ Section */}
                {post.faqs.length > 0 && (
                    <section id="faq" className="mb-10 sm:mb-12 scroll-mt-20">
                        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-6">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {post.faqs.map((faq, index) => (
                                <Card key={index} className="border-border/60">
                                    <CardContent className="pt-5 pb-5">
                                        <h3 className="font-semibold text-sm mb-2">
                                            {faq.question}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                )}

                <Separator />

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <>
                        <section className="py-12 sm:py-16">
                            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-6">
                                More Articles
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {relatedPosts.map((relatedPost) => (
                                    <a key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="block group">
                                        <Card className="border-border/60 hover:border-primary/50 transition-colors h-full">
                                            <CardContent className="pt-5 pb-5">
                                                <div className="space-y-2">
                                                    <span className="text-xs text-primary font-medium">{relatedPost.category}</span>
                                                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{relatedPost.title}</h3>
                                                    <p className="text-xs text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </a>
                                ))}
                            </div>
                        </section>
                        <Separator />
                    </>
                )}

                {/* Back to Blog + CTA */}
                <section className="text-center py-16 sm:py-20">
                    <a href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
                        <ArrowLeft className="h-4 w-4" /> Back to all articles
                    </a>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to Try It?</h2>
                    <p className="text-muted-foreground text-sm sm:text-base mt-2">
                        Start shortening URLs and generating QR codes for free. No signup needed.
                    </p>
                    <a href="/" className="inline-block mt-6">
                        <Button size="lg" className="gap-2">
                            Shorten Your First URL <ArrowRight className="h-4 w-4" />
                        </Button>
                    </a>
                </section>

                <Footer />
            </div>
        </Layout>
    );
}
