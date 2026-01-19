import { Separator } from '@/components/ui/separator';
import { Link2 } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative w-full border-t bg-background mt-20 pb-32 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12">
            <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        {/* Brand Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-primary">
                                <Link2 className="h-5 w-5" />
                                <span className="font-bold text-lg">npgo.to</span>
                            </div>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Free URL shortener for Nepal by Noble Stack
                            </p>
                        </div>

                        {/* Product Links */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-base">Product</h3>
                            <nav className="flex flex-col gap-3">
                                <a href="/about" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                                    About
                                </a>
                                <a href="/features" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                                    Features
                                </a>
                            </nav>
                        </div>

                        {/* Legal Links */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-base">Legal</h3>
                            <nav className="flex flex-col gap-3">
                                <a href="/privacy" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="/terms" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                                    Terms of Service
                                </a>
                            </nav>
                        </div>

                        {/* Company */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-base">Company</h3>
                            <a
                                href="https://www.noblestack.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <img
                                    src="/images/noblestack-logo.webp"
                                    alt="Noble Stack"
                                    className="h-4 w-4"
                                />
                                Noble Stack
                            </a>
                        </div>
                    </div>

                    <Separator className="mb-8" />

                    {/* Bottom Section */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground">
                            © 2026 npgo.to by Noble Stack. All rights reserved.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Made with ❤️ in Nepal
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
