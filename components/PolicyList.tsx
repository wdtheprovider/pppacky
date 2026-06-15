"use client";

import { useState } from "react";
import Link from "next/link";

interface PolicyItem {
  slug: string;
  title: string;
  effectiveDate: string;
}

interface PolicyListProps {
  initialPolicies: PolicyItem[];
}

export default function PolicyList({ initialPolicies }: PolicyListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPolicies = initialPolicies.filter((policy) =>
    policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    policy.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full space-y-4">
      {/* v0.dev-style search input */}
      <div className="glow-input relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-all">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <svg
            className="h-4 w-4 text-zinc-400 dark:text-zinc-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search an app's privacy policy..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full rounded-xl bg-transparent py-3.5 pl-10 pr-10 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Policy grid */}
      {filteredPolicies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredPolicies.map((policy) => (
            <Link
              key={policy.slug}
              href={`/${policy.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 hover:border-teal-400/60 dark:hover:border-teal-700/60 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                {/* Shield icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-900/50">
                  <svg className="h-4 w-4 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                {/* Arrow */}
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 shrink-0 text-zinc-300 dark:text-zinc-700 group-hover:text-teal-500 transition-colors mt-0.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug mb-1">
                  {policy.title}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                  Effective: {policy.effectiveDate}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : searchQuery ? (
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-8 text-center">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            No results for <span className="font-medium text-zinc-600 dark:text-zinc-300">&ldquo;{searchQuery}&rdquo;</span>
          </p>
        </div>
      ) : null}
    </div>
  );
}

