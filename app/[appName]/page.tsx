import { getPolicy, getAllPolicies } from "@/lib/policies";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ appName: string }>;
}

export default async function PolicyPage({ params }: PageProps) {
    const { appName } = await params;
    const policy = await getPolicy(appName);

    if (!policy) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-black">
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-sm rounded-lg border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
                <h1 className="text-3xl font-bold text-zinc-900 mb-2 dark:text-zinc-50">
                    {policy.title}
                </h1>
                <p className="text-sm text-zinc-500 mb-8 dark:text-zinc-400">
                    Effective Date: {policy.effectiveDate}
                </p>
                <div
                    className="prose prose-zinc dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: policy.content }}
                />
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const policies = getAllPolicies();
    return policies.map((policy) => ({
        appName: policy.slug,
    }));
}
