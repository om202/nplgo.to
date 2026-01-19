import Layout from '@/Layouts/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function TermsOfService() {
    return (
        <Layout title="Terms of Service">
            <div className="w-full max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
                    <p className="text-muted-foreground">Last updated: January 18, 2026</p>
                </div>

                <Separator />

                <Card>
                    <CardContent className="prose prose-sm max-w-none pt-6 space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold mb-3">Agreement to Terms</h2>
                            <p className="text-muted-foreground">
                                By accessing or using npgo.to ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Description of Service</h2>
                            <p className="text-muted-foreground">
                                npgo.to is a URL shortening service that allows users to:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                <li>Create shortened versions of long URLs</li>
                                <li>Manage their shortened URLs through an admin dashboard</li>
                                <li>Generate QR codes for their shortened links</li>
                                <li>Track and organize their links via Google authentication</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">User Accounts</h2>
                            <h3 className="text-lg font-medium mt-4 mb-2">Account Creation</h3>
                            <p className="text-muted-foreground">
                                To use certain features of the Service, you must authenticate using Google Sign-In. You are responsible for:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                <li>Maintaining the security of your Google account</li>
                                <li>All activities that occur under your account</li>
                                <li>Notifying us immediately of any unauthorized use</li>
                            </ul>

                            <h3 className="text-lg font-medium mt-4 mb-2">Account Termination</h3>
                            <p className="text-muted-foreground">
                                We reserve the right to suspend or terminate your account if you violate these Terms or engage in activities that harm the Service or other users.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Acceptable Use</h2>
                            <p className="text-muted-foreground">You agree NOT to use the Service to:</p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                <li>Shorten URLs that link to illegal, harmful, or malicious content</li>
                                <li>Distribute malware, viruses, or other harmful code</li>
                                <li>Engage in phishing, spam, or fraudulent activities</li>
                                <li>Violate intellectual property rights</li>
                                <li>Harass, abuse, or harm others</li>
                                <li>Circumvent security measures or abuse the Service</li>
                                <li>Share content that is defamatory, obscene, or offensive</li>
                                <li>Impersonate others or misrepresent your affiliation</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Content and Ownership</h2>
                            <h3 className="text-lg font-medium mt-4 mb-2">Your Content</h3>
                            <p className="text-muted-foreground">
                                You retain ownership of the URLs you submit. By using the Service, you grant us a license to store and display your shortened URLs as necessary to provide the Service.
                            </p>

                            <h3 className="text-lg font-medium mt-4 mb-2">Our Content</h3>
                            <p className="text-muted-foreground">
                                The Service, including its design, features, and functionality, is owned by NobleStack and protected by copyright, trademark, and other intellectual property laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Service Availability</h2>
                            <p className="text-muted-foreground">
                                We strive to maintain high availability but do not guarantee that the Service will be:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                <li>Always available or uninterrupted</li>
                                <li>Free from errors or defects</li>
                                <li>Secure from unauthorized access</li>
                            </ul>
                            <p className="text-muted-foreground mt-3">
                                We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Link Expiration and Deletion</h2>
                            <p className="text-muted-foreground">
                                While we aim to maintain your shortened URLs indefinitely, we reserve the right to:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                <li>Remove URLs that violate these Terms</li>
                                <li>Delete inactive accounts and their associated URLs</li>
                                <li>Modify or remove URLs for technical or legal reasons</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Disclaimer of Warranties</h2>
                            <p className="text-muted-foreground">
                                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
                            <p className="text-muted-foreground">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, NOBLESTACK SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Indemnification</h2>
                            <p className="text-muted-foreground">
                                You agree to indemnify and hold harmless NobleStack and its affiliates from any claims, damages, losses, liabilities, and expenses arising from your use of the Service or violation of these Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
                            <p className="text-muted-foreground">
                                The Service uses Google Sign-In for authentication. Your use of Google services is subject to Google's terms and privacy policies. We are not responsible for third-party services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
                            <p className="text-muted-foreground">
                                These Terms shall be governed by and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Changes to Terms</h2>
                            <p className="text-muted-foreground">
                                We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the "Last updated" date. Your continued use of the Service after changes constitutes acceptance of the new Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
                            <p className="text-muted-foreground">
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <p className="text-muted-foreground">
                                <strong>NobleStack</strong><br />
                                Email: <a href="mailto:support@noblestack.io" className="text-primary hover:underline">support@noblestack.io</a><br />
                                Website: <a href="https://www.noblestack.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.noblestack.io</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3">Severability</h2>
                            <p className="text-muted-foreground">
                                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                            </p>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}
