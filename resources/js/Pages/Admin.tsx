import Layout from '@/Layouts/Layout';
import { usePage } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AuthUser {
    id: number;
    name: string;
    email: string;
    avatar: string | null;
}

interface PageProps {
    auth: {
        user: AuthUser;
    };
    [key: string]: unknown;
}

export default function Admin() {
    const { auth } = usePage<PageProps>().props;

    return (
        <Layout title="Admin">
            <div className="max-w-2xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Welcome to your Admin Page</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Hello, <span className="font-semibold text-foreground">{auth.user.name}</span>! You are signed in with {auth.user.email}.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}
