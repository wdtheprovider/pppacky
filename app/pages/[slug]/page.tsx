import { getPage, getAllPages } from "@/lib/pages";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";

export async function generateStaticParams() {
  const pages = getAllPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center bg-zinc-50/50 dark:bg-gradient-to-tr dark:from-zinc-950 dark:via-zinc-900 dark:to-teal-950/20 overflow-hidden pb-12">
      
      {/* Background Liquid Glass Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-300/20 dark:bg-teal-900/15 blur-3xl animate-blob" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-300/20 dark:bg-cyan-900/15 blur-3xl animate-blob animation-delay-2000" />
      </div>

      <Header />
      
      <main className="relative z-10 flex w-full mt-8 max-w-3xl flex-col items-start p-8 sm:p-12 bg-white/70 backdrop-blur-2xl rounded-2xl border border-white/40 dark:border-zinc-800/40 dark:bg-zinc-950/75 shadow-[0_8px_32px_0_rgba(13,148,136,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        <div className="w-full mb-6">
          <Link
            href="/pages"
            className="text-sm font-semibold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Pages
          </Link>
        </div>

        <h1 className="text-4xl font-extrabold mb-6 text-zinc-900 dark:text-zinc-50 tracking-tight">
          {page.title}
        </h1>

        <article
          className="prose prose-teal prose-zinc dark:prose-invert max-w-none w-full prose-p:text-zinc-650 dark:prose-p:text-zinc-350 prose-headings:text-zinc-900 dark:prose-headings:text-zinc-100 prose-a:text-teal-600 dark:prose-a:text-teal-400 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />

        <div className="mt-12 w-full border-t border-zinc-200/60 dark:border-zinc-800/60 pt-6 flex justify-between items-center text-sm text-zinc-400 dark:text-zinc-500">
          <span>Generated from {page.slug}.md</span>
        </div>
      </main>
    </div>
  );
}
