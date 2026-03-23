import { Head, usePage } from '@inertiajs/react';
import { ExternalLink, Link2 } from 'lucide-react';

interface BioLinkItem {
    id: number;
    title: string;
    url: string;
    icon: string | null;
}

interface BioPageData {
    username: string;
    display_name: string;
    bio: string | null;
    avatar_url: string | null;
    theme: string;
    links: BioLinkItem[];
}

interface PageProps {
    bioPage: BioPageData;
    [key: string]: unknown;
}

// Detect social platform from URL for icon display
function getSocialIcon(url: string): string | null {
    const lower = url.toLowerCase();
    if (lower.includes('facebook.com') || lower.includes('fb.com')) return 'facebook';
    if (lower.includes('instagram.com')) return 'instagram';
    if (lower.includes('youtube.com') || lower.includes('youtu.be')) return 'youtube';
    if (lower.includes('tiktok.com')) return 'tiktok';
    if (lower.includes('twitter.com') || lower.includes('x.com')) return 'twitter';
    if (lower.includes('linkedin.com')) return 'linkedin';
    if (lower.includes('wa.me') || lower.includes('whatsapp.com') || lower.includes('api.whatsapp.com')) return 'whatsapp';
    if (lower.includes('viber.com')) return 'viber';
    if (lower.includes('github.com')) return 'github';
    return null;
}

// Social SVG icons
function SocialSvg({ platform, className }: { platform: string; className?: string }) {
    const cls = className || 'w-5 h-5';
    switch (platform) {
        case 'facebook':
            return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>;
        case 'instagram':
            return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>;
        case 'youtube':
            return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>;
        case 'tiktok':
            return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>;
        case 'twitter':
            return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
        case 'linkedin':
            return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
        case 'whatsapp':
            return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
        case 'viber':
            return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M11.398.002C9.473.028 5.326.344 3.205 2.308 1.576 3.938.939 6.292.877 9.202c-.062 2.91-.138 8.362 5.116 9.948l.005.002h.004l-.002 2.27s-.036.918.572 1.105c.735.227 1.165-.473 1.868-1.228.385-.414.916-1.022 1.318-1.486 3.632.307 6.424-.393 6.741-.503.734-.254 4.887-.77 5.564-6.285.697-5.677-.334-9.269-2.195-10.885l-.006-.005c-.535-.503-2.672-2.011-7.669-2.117 0 0-.374-.013-.796-.016zM11.47 1.39c.379.004.718.014.718.014 4.468.095 6.376 1.351 6.837 1.783l.003.003c1.636 1.417 2.472 4.677 1.855 9.681-.578 4.728-4.072 5.093-4.706 5.313-.265.092-2.723.7-5.893.478 0 0-2.335 2.823-3.063 3.556-.115.115-.249.168-.338.144-.125-.034-.16-.16-.158-.354l.018-3.86c0-.002-.003-.004-.005-.005-4.577-1.38-4.307-6.1-4.254-8.64.053-2.54.589-4.575 1.978-5.956C6.29 1.796 9.949 1.372 11.47 1.39zM12.05 4.31c-.169 0-.306.138-.306.307 0 .169.137.307.307.307 1.227.014 2.381.49 3.264 1.345.882.855 1.393 1.992 1.44 3.206.003.169.142.303.31.303h.004c.169-.003.305-.144.302-.313-.053-1.38-.635-2.675-1.638-3.645-1.004-.971-2.319-1.517-3.7-1.51h.017zm.192 1.443a.306.306 0 00-.296.313.306.306 0 00.313.296c1.617-.011 2.962 1.277 2.994 2.893.003.17.142.305.311.305h.003c.17-.003.306-.145.303-.314-.037-1.844-1.57-3.333-3.414-3.314l-.214.02zm-4.225.91c-.159-.015-.304.023-.43.106l-.002.003c-.375.27-.716.586-1.017.938l-.002.002c-.23.284-.351.57-.367.855-.01.185.035.37.127.542l.008.002c.48 1.005 1.098 1.943 1.847 2.783l.014.018c.956 1.089 2.072 2.025 3.31 2.77l.022.011c.851.48 1.55.792 2.112.956.351.117.667.175.954.17.34-.02.644-.16.879-.417.277-.32.53-.678.738-1.062.13-.229.115-.498-.036-.68-.395-.465-1.67-1.27-2.127-1.482-.46-.212-.82-.078-1.071.217l-.436.527c-.24.29-.695.24-.695.24l-.005.002c-3.312-.842-4.198-4.2-4.198-4.2s-.05-.455.24-.696l.528-.435c.294-.252.429-.612.217-1.072-.266-.575-.935-1.559-1.447-2.056a.73.73 0 00-.364-.182zm4.34.523a.306.306 0 000 .612c.944.004 1.716.78 1.72 1.727.003.17.14.305.31.305h.003c.169-.003.306-.144.303-.313-.005-1.12-.911-2.027-2.03-2.033l-.305.002z" /></svg>;
        case 'github':
            return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>;
        default:
            return null;
    }
}

// Theme configurations with modern design language
interface ThemeConfig {
    // Background
    bgClass: string;
    bgStyle?: React.CSSProperties;
    // Text
    text: string;
    subtext: string;
    // Link buttons
    button: string;
    buttonText: string;
    // Social icon buttons
    socialButton: string;
    // Footer
    footer: string;
    // Avatar ring
    avatarRing: string;
    // Meta theme color
    themeColor: string;
    // CSS animation keyframes (injected as <style>)
    animationCss?: string;
}

const themes: Record<string, ThemeConfig> = {
    default: {
        bgClass: 'bg-gradient-to-b from-gray-50 via-white to-gray-50',
        text: 'text-gray-900',
        subtext: 'text-gray-500',
        button: 'bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5',
        buttonText: 'text-gray-900',
        socialButton: 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm',
        footer: 'text-gray-400',
        avatarRing: 'ring-4 ring-gray-200/60',
        themeColor: '#f9fafb',
    },
    dark: {
        bgClass: 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950',
        text: 'text-white',
        subtext: 'text-gray-400',
        button: 'bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.1] hover:border-white/[0.15] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]',
        buttonText: 'text-white',
        socialButton: 'bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.12]',
        footer: 'text-gray-600',
        avatarRing: 'ring-4 ring-white/10',
        themeColor: '#030712',
    },
    crimson: {
        bgClass: '',
        bgStyle: { background: 'linear-gradient(135deg, #DC143C 0%, #b91c3c 40%, #8B0000 100%)' },
        text: 'text-white',
        subtext: 'text-red-200/80',
        button: 'bg-white/[0.12] border border-white/[0.18] backdrop-blur-md hover:bg-white/[0.2] hover:border-white/[0.3] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(139,0,0,0.3)]',
        buttonText: 'text-white',
        socialButton: 'bg-white/[0.1] border border-white/[0.15] hover:bg-white/[0.2]',
        footer: 'text-red-300/40',
        avatarRing: 'ring-4 ring-white/20',
        themeColor: '#DC143C',
    },
    minimal: {
        bgClass: 'bg-white',
        text: 'text-gray-900',
        subtext: 'text-gray-400',
        button: 'bg-transparent border border-gray-300 hover:border-gray-900 hover:bg-gray-50 hover:-translate-y-0.5',
        buttonText: 'text-gray-800',
        socialButton: 'bg-transparent border border-gray-300 hover:border-gray-900',
        footer: 'text-gray-300',
        avatarRing: 'ring-2 ring-gray-200',
        themeColor: '#ffffff',
    },
    gradient: {
        bgClass: 'bio-gradient-animated',
        animationCss: `
            .bio-gradient-animated {
                background: linear-gradient(-45deg, #7c3aed, #6366f1, #3b82f6, #8b5cf6, #a855f7);
                background-size: 400% 400%;
                animation: bioGradientShift 12s ease infinite;
            }
            @keyframes bioGradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `,
        text: 'text-white',
        subtext: 'text-white/70',
        button: 'bg-white/[0.15] border border-white/[0.2] backdrop-blur-md hover:bg-white/[0.25] hover:border-white/[0.35] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.3)]',
        buttonText: 'text-white',
        socialButton: 'bg-white/[0.12] border border-white/[0.18] hover:bg-white/[0.22]',
        footer: 'text-white/30',
        avatarRing: 'ring-4 ring-white/25',
        themeColor: '#6366f1',
    },
    glass: {
        bgClass: 'bio-glass-bg',
        animationCss: `
            .bio-glass-bg {
                background: linear-gradient(135deg, #e0f2fe 0%, #c7d2fe 30%, #ddd6fe 60%, #e0e7ff 100%);
                position: relative;
            }
            .bio-glass-bg::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(ellipse at 30% 20%, rgba(56, 189, 248, 0.15) 0%, transparent 50%),
                            radial-gradient(ellipse at 70% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 50%);
                animation: bioGlassFloat 20s ease-in-out infinite;
                pointer-events: none;
            }
            @keyframes bioGlassFloat {
                0%, 100% { transform: translate(0, 0); }
                33% { transform: translate(3%, -3%); }
                66% { transform: translate(-2%, 2%); }
            }
        `,
        text: 'text-gray-900',
        subtext: 'text-gray-600',
        button: 'bg-white/50 border border-white/60 backdrop-blur-lg shadow-sm hover:bg-white/70 hover:shadow-md hover:-translate-y-0.5',
        buttonText: 'text-gray-800',
        socialButton: 'bg-white/40 border border-white/50 backdrop-blur-sm hover:bg-white/60',
        footer: 'text-gray-400',
        avatarRing: 'ring-4 ring-white/50',
        themeColor: '#e0f2fe',
    },
    sunset: {
        bgClass: 'bio-sunset-animated',
        animationCss: `
            .bio-sunset-animated {
                background: linear-gradient(-45deg, #f97316, #fb923c, #e11d48, #f43f5e, #f97316);
                background-size: 400% 400%;
                animation: bioSunsetShift 15s ease infinite;
            }
            @keyframes bioSunsetShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `,
        text: 'text-white',
        subtext: 'text-white/75',
        button: 'bg-white/[0.18] border border-white/[0.25] backdrop-blur-md hover:bg-white/[0.28] hover:border-white/[0.4] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(249,115,22,0.25)]',
        buttonText: 'text-white',
        socialButton: 'bg-white/[0.12] border border-white/[0.2] hover:bg-white/[0.24]',
        footer: 'text-white/25',
        avatarRing: 'ring-4 ring-white/25',
        themeColor: '#f97316',
    },
    neon: {
        bgClass: 'bg-[#0a0118]',
        animationCss: `
            .bio-neon-glow {
                box-shadow: 0 0 15px rgba(168, 85, 247, 0.15), 0 0 40px rgba(168, 85, 247, 0.05);
            }
            .bio-neon-glow:hover {
                box-shadow: 0 0 20px rgba(168, 85, 247, 0.3), 0 0 60px rgba(168, 85, 247, 0.1);
            }
            .bio-neon-social:hover {
                box-shadow: 0 0 12px rgba(168, 85, 247, 0.25);
            }
            .bio-neon-ring {
                box-shadow: 0 0 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(168, 85, 247, 0.1);
            }
        `,
        text: 'text-white',
        subtext: 'text-purple-300/70',
        button: 'bio-neon-glow bg-white/[0.04] border border-purple-500/30 backdrop-blur-sm hover:bg-white/[0.08] hover:border-purple-400/60 hover:-translate-y-0.5',
        buttonText: 'text-purple-100',
        socialButton: 'bio-neon-social bg-white/[0.04] border border-purple-500/20 hover:bg-white/[0.08] hover:border-purple-400/50',
        footer: 'text-purple-400/20',
        avatarRing: 'bio-neon-ring ring-2 ring-purple-500/40',
        themeColor: '#0a0118',
    },
    elegant: {
        bgClass: 'bg-gradient-to-b from-amber-50/80 via-orange-50/50 to-stone-50',
        text: 'text-stone-800',
        subtext: 'text-stone-500',
        button: 'bg-white/80 border border-amber-200/60 shadow-sm hover:shadow-md hover:border-amber-300 hover:-translate-y-0.5',
        buttonText: 'text-stone-700',
        socialButton: 'bg-white/60 border border-amber-200/50 hover:border-amber-300 hover:bg-white/80',
        footer: 'text-stone-400/50',
        avatarRing: 'ring-4 ring-amber-200/40',
        themeColor: '#fffbeb',
    },
    facebook: {
        bgClass: '',
        bgStyle: { background: 'linear-gradient(135deg, #1877F2 0%, #0d5bbf 50%, #0a4a9e 100%)' },
        text: 'text-white',
        subtext: 'text-blue-200/80',
        button: 'bg-white/[0.12] border border-white/[0.18] backdrop-blur-md hover:bg-white/[0.22] hover:border-white/[0.3] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(24,119,242,0.3)]',
        buttonText: 'text-white',
        socialButton: 'bg-white/[0.1] border border-white/[0.15] hover:bg-white/[0.2]',
        footer: 'text-blue-300/30',
        avatarRing: 'ring-4 ring-white/20',
        themeColor: '#1877F2',
    },
    x: {
        bgClass: 'bg-black',
        text: 'text-white',
        subtext: 'text-gray-500',
        button: 'bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.12] hover:border-white/[0.2] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)]',
        buttonText: 'text-white',
        socialButton: 'bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.14]',
        footer: 'text-gray-700',
        avatarRing: 'ring-4 ring-white/10',
        themeColor: '#000000',
    },
    instagram: {
        bgClass: 'bio-instagram-animated',
        animationCss: `
            .bio-instagram-animated {
                background: linear-gradient(-45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #8a3ab9, #4c68d7, #f09433);
                background-size: 500% 500%;
                animation: bioInstagramShift 10s ease infinite;
            }
            @keyframes bioInstagramShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `,
        text: 'text-white',
        subtext: 'text-white/70',
        button: 'bg-white/[0.15] border border-white/[0.2] backdrop-blur-md hover:bg-white/[0.25] hover:border-white/[0.35] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(225,48,108,0.25)]',
        buttonText: 'text-white',
        socialButton: 'bg-white/[0.12] border border-white/[0.18] hover:bg-white/[0.22]',
        footer: 'text-white/25',
        avatarRing: 'ring-4 ring-white/25',
        themeColor: '#E1306C',
    },
    youtube: {
        bgClass: '',
        bgStyle: { background: 'linear-gradient(135deg, #FF0000 0%, #cc0000 40%, #1a1a1a 100%)' },
        text: 'text-white',
        subtext: 'text-red-200/70',
        button: 'bg-white/[0.1] border border-white/[0.15] backdrop-blur-sm hover:bg-white/[0.18] hover:border-white/[0.25] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,0,0,0.2)]',
        buttonText: 'text-white',
        socialButton: 'bg-white/[0.08] border border-white/[0.12] hover:bg-white/[0.16]',
        footer: 'text-red-300/25',
        avatarRing: 'ring-4 ring-white/15',
        themeColor: '#FF0000',
    },
    tiktok: {
        bgClass: 'bio-tiktok-bg',
        animationCss: `
            .bio-tiktok-bg {
                background: #010101;
                position: relative;
            }
            .bio-tiktok-bg::before {
                content: '';
                position: absolute;
                inset: 0;
                background: radial-gradient(ellipse at 20% 80%, rgba(37, 244, 238, 0.12) 0%, transparent 50%),
                            radial-gradient(ellipse at 80% 20%, rgba(254, 44, 85, 0.12) 0%, transparent 50%);
                animation: bioTiktokPulse 8s ease-in-out infinite alternate;
                pointer-events: none;
            }
            @keyframes bioTiktokPulse {
                0% { opacity: 0.6; }
                100% { opacity: 1; }
            }
            .bio-tiktok-btn {
                box-shadow: -2px 0 8px rgba(37, 244, 238, 0.08), 2px 0 8px rgba(254, 44, 85, 0.08);
            }
            .bio-tiktok-btn:hover {
                box-shadow: -3px 0 15px rgba(37, 244, 238, 0.15), 3px 0 15px rgba(254, 44, 85, 0.15);
            }
        `,
        text: 'text-white',
        subtext: 'text-gray-400',
        button: 'bio-tiktok-btn bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.18] hover:-translate-y-0.5',
        buttonText: 'text-white',
        socialButton: 'bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1]',
        footer: 'text-gray-700',
        avatarRing: 'ring-4 ring-[#25F4EE]/20',
        themeColor: '#010101',
    },
    linkedin: {
        bgClass: '',
        bgStyle: { background: 'linear-gradient(135deg, #0A66C2 0%, #084d94 50%, #063d75 100%)' },
        text: 'text-white',
        subtext: 'text-blue-200/75',
        button: 'bg-white/[0.12] border border-white/[0.18] backdrop-blur-md hover:bg-white/[0.2] hover:border-white/[0.3] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(10,102,194,0.3)]',
        buttonText: 'text-white',
        socialButton: 'bg-white/[0.1] border border-white/[0.15] hover:bg-white/[0.2]',
        footer: 'text-blue-300/25',
        avatarRing: 'ring-4 ring-white/20',
        themeColor: '#0A66C2',
    },
};

export default function BioPagePublic() {
    const { bioPage } = usePage<PageProps>().props;
    const theme = themes[bioPage.theme] || themes.default;

    // Separate social links from regular links
    const socialLinks = bioPage.links.filter((l: BioLinkItem) => getSocialIcon(l.url));
    const regularLinks = bioPage.links.filter((l: BioLinkItem) => !getSocialIcon(l.url));

    const pageTitle = `${bioPage.display_name} | npgo.to`;
    const pageDescription = bioPage.bio || `Check out ${bioPage.display_name}'s links on npgo.to`;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="profile" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:url" content={`https://npgo.to/@${bioPage.username}`} />
                {bioPage.avatar_url && <meta property="og:image" content={bioPage.avatar_url} />}
                <meta name="theme-color" content={theme.themeColor} />
                <link rel="canonical" href={`https://npgo.to/@${bioPage.username}`} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <style>{`
                    body { margin: 0; padding: 0; }
                    .bio-page-root { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
                    .bio-link-enter { opacity: 0; transform: translateY(12px); animation: bioLinkEnter 0.4s ease forwards; }
                    @keyframes bioLinkEnter {
                        to { opacity: 1; transform: translateY(0); }
                    }
                    ${theme.animationCss || ''}
                `}</style>
            </Head>

            <div
                className={`bio-page-root min-h-screen ${theme.bgClass} flex flex-col items-center px-4 py-12 relative overflow-hidden`}
                style={theme.bgStyle}
            >
                {/* Profile Section */}
                <div className="w-full max-w-md flex flex-col items-center text-center space-y-4 relative z-10">
                    {/* Avatar */}
                    {bioPage.avatar_url ? (
                        <img
                            src={bioPage.avatar_url}
                            alt={bioPage.display_name}
                            className={`w-24 h-24 rounded-full object-cover shadow-lg ${theme.avatarRing}`}
                            style={{ animationDelay: '0ms' }}
                        />
                    ) : (
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg ${theme.avatarRing} ${
                            ['dark', 'crimson', 'gradient', 'sunset', 'neon'].includes(bioPage.theme)
                                ? 'bg-white/15 text-white'
                                : 'bg-gray-200 text-gray-600'
                        }`}>
                            {bioPage.display_name.charAt(0).toUpperCase()}
                        </div>
                    )}

                    {/* Name & Bio */}
                    <div className="space-y-1">
                        <h1 className={`text-2xl font-bold tracking-tight ${theme.text}`}>
                            {bioPage.display_name}
                        </h1>
                        <p className={`text-sm font-medium ${theme.subtext}`}>
                            @{bioPage.username}
                        </p>
                    </div>

                    {bioPage.bio && (
                        <p className={`text-sm max-w-xs leading-relaxed ${theme.subtext}`}>
                            {bioPage.bio}
                        </p>
                    )}

                    {/* Social Icons Row */}
                    {socialLinks.length > 0 && (
                        <div className="flex items-center gap-2.5 pt-2">
                            {socialLinks.map((link: BioLinkItem) => {
                                const platform = getSocialIcon(link.url);
                                return platform ? (
                                    <a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${theme.socialButton} ${theme.buttonText}`}
                                        title={link.title}
                                    >
                                        <SocialSvg platform={platform} className="w-6 h-6" />
                                    </a>
                                ) : null;
                            })}
                        </div>
                    )}

                    {/* Link Buttons */}
                    <div className="w-full space-y-3 pt-4">
                        {regularLinks.map((link: BioLinkItem, index: number) => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                    bio-link-enter block w-full px-6 py-4 rounded-2xl text-center font-medium
                                    transition-all duration-200 ${theme.button} ${theme.buttonText}
                                `}
                                style={{ animationDelay: `${index * 60}ms` }}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    {link.title}
                                    <ExternalLink className="w-3.5 h-3.5 opacity-30" />
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* If no links at all */}
                    {bioPage.links.length === 0 && (
                        <div className={`pt-8 ${theme.subtext}`}>
                            <p className="text-sm">No links yet</p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className={`mt-auto pt-12 text-center relative z-10 ${theme.footer}`}>
                    <a
                        href="https://npgo.to"
                        className="inline-flex items-center gap-1.5 text-xs font-medium opacity-60 hover:opacity-100 transition-opacity duration-200"
                    >
                        <Link2 className="w-3 h-3" />
                        Made with npgo.to
                    </a>
                </div>
            </div>
        </>
    );
}
