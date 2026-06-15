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
    <div className="w-full space-y-6">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 text-zinc-400 dark:text-zinc-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21-21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search privacy policies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full rounded-lg border border-zinc-200/60 bg-white/40 py-3 pl-10 pr-10 text-zinc-900 placeholder-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-zinc-800/60 dark:bg-zinc-900/30 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400 text-sm shadow-sm transition-all backdrop-blur-md"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      <div className="grid w-full gap-4">
        {filteredPolicies.length > 0 ? (
          filteredPolicies.map((policy) => (
            <Link
              key={policy.slug}
              href={`/${policy.slug}`}
              className="group flex items-center justify-between p-4 rounded-xl border border-zinc-200/50 hover:border-teal-300/40 hover:shadow-md transition-all dark:border-zinc-800/40 dark:hover:border-teal-800/40 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-md"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-lg text-zinc-800 dark:text-zinc-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
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
                className="w-5 h-5 text-zinc-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          ))
        ) : (
          <div className="text-center py-8 text-zinc-500 dark:text-zinc-400 border border-dashed border-zinc-200/60 dark:border-zinc-800/60 rounded-xl bg-white/20 dark:bg-zinc-900/10 backdrop-blur-sm">
            No privacy policies match &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>
    </div>
  );
}
