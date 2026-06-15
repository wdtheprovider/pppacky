import Link from "next/link";
import { getAllPolicies } from "@/lib/policies";
import PolicyList from "@/components/PolicyList";

export default function Home() {
  const policies = getAllPolicies();

  return (
    <div className="relative flex min-h-screen flex-col bg-white dark:bg-zinc-950 overflow-hidden">

      {/* Dot Grid Background */}
      <div className="dot-grid dot-grid-fade absolute inset-0 z-0" />

      {/* Teal ambient glow at the top center */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-teal-400/10 dark:bg-teal-500/8 blur-[120px] z-0" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-5xl mx-auto w-full">
        <span className="text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          PPPacky
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/wdtheprovider/pppacky"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors font-medium"
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://github.com/wdtheprovider/pppacky/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
          >
            Contribute
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-16 pb-24 text-center">

        {/* Badge */}
        <a
          href="https://github.com/wdtheprovider/pppacky"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:border-teal-400/50 hover:text-teal-600 dark:hover:text-teal-400 transition-all shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
          Open Source — Star on GitHub
          <svg className="h-3 w-3 opacity-60" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>

        {/* Headline */}
        <h1 className="max-w-3xl text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 leading-[1.05] mb-5">
          Privacy policies,{" "}
          <span className="bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            hosted instantly.
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-xl text-base sm:text-lg text-zinc-500 dark:text-zinc-400 mb-10 leading-relaxed">
          A lightweight, open-source platform for hosting your application's privacy policy.
          Add a Markdown file, open a PR — done.
        </p>

        {/* Search + grid — v0.dev-style center prominent input */}
        <div className="w-full max-w-5xl mb-14">
          <PolicyList initialPolicies={policies} />
        </div>

        {/* Scroll hint */}
        <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-4">
          {policies.length} policies hosted · Built by{" "}
          <a
            href="https://github.com/wdtheprovider"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 dark:text-teal-500 hover:underline font-medium"
          >
            Dingaan Letjane
          </a>
        </p>
      </main>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent z-0" />
    </div>
  );
}
