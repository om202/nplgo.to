import { marked } from 'marked';

export interface BlogPostMeta {
    slug: string;
    title: string;
    description: string;
    keywords: string;
    publishDate: string;
    updatedDate: string;
    author: string;
    readingTime: number;
    category: string;
    excerpt: string;
    faqs: FAQ[];
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface BlogPostFull extends BlogPostMeta {
    htmlContent: string;
    headings: { id: string; text: string }[];
}

// Import all markdown files at build time via Vite glob
const blogFiles = import.meta.glob('/resources/content/blog/*/index.md', {
    query: '?raw',
    eager: true,
    import: 'default',
}) as Record<string, string>;

function extractSlug(path: string): string {
    const match = path.match(/\/blog\/(.+?)\/index\.md$/);
    return match ? match[1] : '';
}

function generateHeadingId(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

/**
 * Simple browser-compatible frontmatter parser.
 * Parses YAML between --- delimiters without Node.js dependencies.
 */
function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) {
        return { data: {}, content: raw };
    }

    const yamlStr = match[1];
    const content = match[2];
    const data: Record<string, unknown> = {};

    // Parse YAML — supports strings, numbers, and arrays of objects
    const lines = yamlStr.split('\n');
    let currentKey = '';
    let currentArray: Record<string, string>[] | null = null;
    let currentItem: Record<string, string> | null = null;

    for (const line of lines) {
        // Array item start: "  - question: ..."
        const arrayItemMatch = line.match(/^\s{2}- (\w+):\s*"(.*)"\s*$/);
        if (arrayItemMatch && currentArray !== null) {
            if (currentItem) currentArray.push(currentItem);
            currentItem = { [arrayItemMatch[1]]: arrayItemMatch[2] };
            continue;
        }

        // Array item continuation: "    answer: ..."
        const arrayPropMatch = line.match(/^\s{4}(\w+):\s*"(.*)"\s*$/);
        if (arrayPropMatch && currentItem) {
            currentItem[arrayPropMatch[1]] = arrayPropMatch[2];
            continue;
        }

        // Top-level key with array value: "faqs:"
        const arrayKeyMatch = line.match(/^(\w+):\s*$/);
        if (arrayKeyMatch) {
            // Save previous array if any
            if (currentArray !== null && currentKey) {
                if (currentItem) currentArray.push(currentItem);
                data[currentKey] = currentArray;
            }
            currentKey = arrayKeyMatch[1];
            currentArray = [];
            currentItem = null;
            continue;
        }

        // Top-level key: value (quoted string)
        const quotedMatch = line.match(/^(\w+):\s*"(.*)"\s*$/);
        if (quotedMatch) {
            // Save previous array if any
            if (currentArray !== null && currentKey) {
                if (currentItem) currentArray.push(currentItem);
                data[currentKey] = currentArray;
                currentArray = null;
                currentItem = null;
            }
            data[quotedMatch[1]] = quotedMatch[2];
            continue;
        }

        // Top-level key: value (unquoted — numbers, etc.)
        const unquotedMatch = line.match(/^(\w+):\s*(.+)\s*$/);
        if (unquotedMatch) {
            if (currentArray !== null && currentKey) {
                if (currentItem) currentArray.push(currentItem);
                data[currentKey] = currentArray;
                currentArray = null;
                currentItem = null;
            }
            const val = unquotedMatch[2].trim();
            data[unquotedMatch[1]] = isNaN(Number(val)) ? val : Number(val);
            continue;
        }
    }

    // Flush remaining array
    if (currentArray !== null && currentKey) {
        if (currentItem) currentArray.push(currentItem);
        data[currentKey] = currentArray;
    }

    return { data, content };
}

function parseBlogPost(path: string, raw: string): BlogPostFull {
    const { data, content } = parseFrontmatter(raw);
    const slug = extractSlug(path);

    // Configure marked to add IDs to headings
    const renderer = new marked.Renderer();
    const headings: { id: string; text: string }[] = [];

    renderer.heading = ({ text, depth }: { text: string; depth: number }) => {
        const id = generateHeadingId(text);
        if (depth === 2) {
            headings.push({ id, text });
        }
        return `<h${depth} id="${id}">${text}</h${depth}>`;
    };

    const htmlContent = marked.parse(content, { renderer }) as string;

    return {
        slug,
        title: (data.title as string) || '',
        description: (data.description as string) || '',
        keywords: (data.keywords as string) || '',
        publishDate: (data.publishDate as string) || '',
        updatedDate: (data.updatedDate as string) || '',
        author: (data.author as string) || 'Noble Stack',
        readingTime: (data.readingTime as number) || 5,
        category: (data.category as string) || 'General',
        excerpt: (data.excerpt as string) || '',
        faqs: (data.faqs as FAQ[]) || [],
        htmlContent,
        headings,
    };
}

// Parse all blog posts at import time
const allPosts: BlogPostFull[] = Object.entries(blogFiles)
    .map(([path, raw]) => parseBlogPost(path, raw))
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

export function getAllBlogPosts(): BlogPostMeta[] {
    return allPosts.map(({ htmlContent, headings, ...meta }) => meta);
}

export function getBlogPost(slug: string): BlogPostFull | undefined {
    return allPosts.find(post => post.slug === slug);
}
