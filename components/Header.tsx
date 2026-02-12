import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/75 backdrop-blur-md dark:border-zinc-800 dark:bg-black/75">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 hover:opacity-80 transition-opacity"
        >
          PPPacky
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/pages"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
          >
            Pages
          </Link>
        </nav>
      </div>
    </header>
  );
}
