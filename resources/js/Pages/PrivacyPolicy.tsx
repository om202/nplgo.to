import Layout from '@/Layouts/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PrivacyPolicy() {
    return (
        <Layout title="Privacy Policy">
            <div className="w-full max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
                    <p className="text-muted-foreground">Last updated: January 18, 2026</p>
                </div>

                <Separator />

                <Card>
                    <CardContent className="prose prose-sm max-w-none pt-6 space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold mb-3">Introduction</h2>
                            <p className="text-muted-foreground">
                                Welcome to npgo.to ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our URL shortening service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
                            <h3 className="text-lg font-medium mt-4 mb-2">Account Information</h3>
                            <p className="text-muted-foreground">
                                When you sign in with Google, we collect:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                <li>Your name</li>
                                <li>Email address</li>
                                <li>Profile picture (avatar)</li>
                                <li>Google account ID</li>
                            </ul>

                            <h3 className="text-lg font-medium mt-4 mb-2">URL Data</h3>
                            <p className="text-muted-foreground">
                                When you create shortened URLs, we store:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                <li>Original URLs you submit</li>
                                <li>Generated short codes</li>
                                <li>Creation timestamps</li>
                                <li>Association with your user account</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
                            <p className="text-muted-foreground">We use the collected information to:</p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                <li>Provide and maintain our URL shortening service</li>
                                <li>Authenticate your account via Google Sign-In</li>
                                <li>Enable you to manage your shortened URLs</li>
                                <li>Generate QR codes for your links</li>
                                <li>Improve and optimize our service</li>
                                <li>Prevent fraud and abuse</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Data Sharing and Disclosure</h2>
                            <p className="text-muted-foreground">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                <li><strong>Service Providers:</strong> With trusted third-party services (like Google for authentication) that help us operate our service</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of all or a portion of our service</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Data Security</h2>
                            <p className="text-muted-foreground">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
                            <p className="text-muted-foreground">You have the right to:</p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                <li>Access your personal information</li>
                                <li>Delete your account and associated data</li>
                                <li>Manage and delete your shortened URLs</li>
                                <li>Opt out of certain data collection practices</li>
                                <li>Request data portability</li>
                            </ul>
                        </section>



                        <section>
                            <h2 className="text-xl font-semibold mb-3">Children's Privacy</h2>
                            <p className="text-muted-foreground">
                                Our service is not intended for users under the age of 13. We do not knowingly collect personal information from children under 13.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
                            <p className="text-muted-foreground">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
                            <p className="text-muted-foreground">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <p className="text-muted-foreground">
                                <strong>NobleStack</strong><br />
                                Email: <a href="mailto:support@noblestack.io" className="text-primary hover:underline">support@noblestack.io</a><br />
                                Website: <a href="https://www.noblestack.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.noblestack.io</a>
                            </p>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}
