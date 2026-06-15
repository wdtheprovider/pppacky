import Image from "next/image";

import Link from "next/link";
import { getAllPolicies } from "@/lib/policies";
import PolicyList from "@/components/PolicyList";

export default function Home() {
  const policies = getAllPolicies();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-50/50 p-6 dark:bg-gradient-to-tr dark:from-zinc-950 dark:via-zinc-900 dark:to-teal-950/20 overflow-hidden">
      
      {/* Background Liquid Glass Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-300/30 dark:bg-teal-900/20 blur-3xl animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-300/30 dark:bg-cyan-900/20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-[30%] right-[10%] w-[35%] h-[35%] rounded-full bg-emerald-200/20 dark:bg-emerald-900/10 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <main className="relative z-10 flex w-full max-w-2xl flex-col items-center justify-center p-8 bg-white/70 dark:bg-zinc-950/75 backdrop-blur-2xl rounded-2xl border border-white/40 dark:border-zinc-800/40 shadow-[0_8px_32px_0_rgba(13,148,136,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        
        {/* Open Source Github Badge */}
        <a
          href="https://github.com/wdtheprovider/pppacky"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200/30 bg-teal-50/50 px-3.5 py-1.5 text-xs font-semibold text-teal-800 dark:border-teal-900/30 dark:bg-teal-950/30 dark:text-teal-350 hover:bg-teal-100/60 dark:hover:bg-teal-900/40 transition-all shadow-sm hover:shadow"
        >
          <svg className="h-4 w-4 text-teal-600 dark:text-teal-400" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <span>Open Source on GitHub</span>
        </a>

        <h1 className="text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 dark:from-teal-400 dark:via-emerald-400 dark:to-cyan-400 tracking-tight text-center">
          PPPacky
        </h1>

        <p className="text-zinc-650 dark:text-zinc-350 mb-8 text-center max-w-md text-sm leading-relaxed">
          A lightweight, open-source hosting platform for application privacy policies. 
          Want to host yours? Follow our{" "}
          <a
            href="https://github.com/wdtheprovider/pppacky/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 dark:text-teal-450 font-bold hover:underline"
          >
            Contributing Guide
          </a>.
        </p>

        <PolicyList initialPolicies={policies} />

        <div className="mt-12 text-sm text-zinc-400 dark:text-zinc-500">
          PPPacky by Dingaan Letjane
        </div>
      </main>
    </div>
  );
}
