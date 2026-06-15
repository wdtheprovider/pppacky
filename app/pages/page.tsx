import Link from "next/link";
import { getAllPages } from "@/lib/pages";
import Header from "@/components/Header";

export default function PagesIndex() {
  const pages = getAllPages();

  return (
    <div className="relative flex min-h-screen flex-col items-center bg-zinc-50/50 dark:bg-gradient-to-tr dark:from-zinc-950 dark:via-zinc-900 dark:to-teal-950/20 overflow-hidden pb-12">
      
      {/* Background Liquid Glass Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-300/20 dark:bg-teal-900/15 blur-3xl animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-300/20 dark:bg-cyan-900/15 blur-3xl animate-blob animation-delay-2000" />
      </div>

      <Header />
      
      <main className="relative z-10 flex w-full mt-8 max-w-2xl flex-col items-center justify-center p-8 bg-white/70 backdrop-blur-2xl rounded-2xl border border-white/40 dark:border-zinc-800/40 dark:bg-zinc-950/75 shadow-[0_8px_32px_0_rgba(13,148,136,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 dark:from-teal-400 dark:via-emerald-400 dark:to-cyan-400 tracking-tight">
          Pages
        </h1>

        <p className="text-zinc-650 dark:text-zinc-350 mb-8 text-center max-w-md text-sm">
          Select a page below to view its content.
        </p>

        <div className="grid w-full gap-4">
          {pages.map((page) => (
            <Link
              key={page.slug}
              href={`/pages/${page.slug}`}
              className="group flex items-center justify-between p-4 rounded-xl border border-zinc-200/50 hover:border-teal-300/40 hover:shadow-md transition-all dark:border-zinc-800/40 dark:hover:border-teal-800/40 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-md"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-lg text-zinc-800 dark:text-zinc-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {page.title}
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-zinc-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-sm text-zinc-400 dark:text-zinc-500">
          <Link
            href="/"
            className="hover:underline hover:text-teal-500 dark:hover:text-teal-400 font-semibold transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
