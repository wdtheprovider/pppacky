import Image from "next/image";

import Link from "next/link";
import { getAllPolicies } from "@/lib/policies";

export default function Home() {
  const policies = getAllPolicies();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-6 dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <h1 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-50 tracking-tight">
          Privacy Policies
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-center max-w-md">
          Select an application below to view its privacy policy.
        </p>

        <div className="grid w-full gap-4">
          {policies.map((policy) => (
            <Link
              key={policy.slug}
              href={`/${policy.slug}`}
              className="group flex items-center justify-between p-4 rounded-lg border border-zinc-200 hover:border-zinc-400 hover:shadow-md transition-all dark:border-zinc-700 dark:hover:border-zinc-500 bg-zinc-50 dark:bg-zinc-800/50"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-lg text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {policy.title}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  Effective: {policy.effectiveDate}
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-sm text-zinc-400 dark:text-zinc-600">
          PPPacky by Dingaan Letjane
        </div>
      </main>
    </div>
  );
}
