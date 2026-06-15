import { getPolicy, getAllPolicies } from "@/lib/policies";
import { notFound } from "next/navigation";
import Link from "next/link";

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
        <div className="relative min-h-screen bg-zinc-50/50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gradient-to-tr dark:from-zinc-950 dark:via-zinc-900 dark:to-teal-950/20 overflow-hidden flex flex-col justify-center">
            
            {/* Background Liquid Glass Blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-300/30 dark:bg-teal-900/20 blur-3xl animate-blob" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-300/30 dark:bg-cyan-900/20 blur-3xl animate-blob animation-delay-2000" />
            </div>

            <div className="relative z-10 max-w-3xl w-full mx-auto bg-white/70 p-8 sm:p-12 shadow-[0_8px_32px_0_rgba(13,148,136,0.06)] rounded-2xl border border-white/40 dark:bg-zinc-950/75 dark:border-zinc-800/40 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-2xl">
                <div className="mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        Back to Policies
                    </Link>
                </div>

                <h1 className="text-3xl font-extrabold text-zinc-900 mb-2 dark:text-zinc-50 tracking-tight">
                    {policy.title}
                </h1>
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-8">
                    Effective Date: {policy.effectiveDate}
                </p>
                <hr className="border-zinc-200/60 dark:border-zinc-800/60 mb-8" />
                <div
                    className="prose prose-teal prose-zinc dark:prose-invert max-w-none prose-p:text-zinc-650 dark:prose-p:text-zinc-350 prose-headings:text-zinc-900 dark:prose-headings:text-zinc-100 prose-a:text-teal-600 dark:prose-a:text-teal-400 prose-a:no-underline hover:prose-a:underline"
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
