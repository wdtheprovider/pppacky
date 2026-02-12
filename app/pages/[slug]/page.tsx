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
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 dark:bg-black">
      <Header />
      <main className="flex w-full mt-8 max-w-3xl flex-col items-start p-8 bg-white rounded-xl shadow-lg dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <div className="w-full mb-6">
          <Link
            href="/pages"
            className="text-sm text-zinc-500 hover:text-blue-500 hover:underline transition-colors flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
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

        <h1 className="text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-50 tracking-tight">
          {page.title}
        </h1>

        <article
          className="prose prose-zinc dark:prose-invert max-w-none w-full"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />

        <div className="mt-12 w-full border-t border-zinc-200 dark:border-zinc-800 pt-6 flex justify-between items-center text-sm text-zinc-400 dark:text-zinc-600">
          <span>Generated from {page.slug}.md</span>
        </div>
      </main>
    </div>
  );
}
