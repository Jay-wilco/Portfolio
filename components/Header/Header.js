import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "../Theme/ThemeToggle";

function NavLink({ href, children }) {
  const router = useRouter();
  const isActive =
    router.pathname === href || router.pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={[
        "rounded-md px-3 py-2 text-sm font-medium transition",
        isActive
          ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-slate-50",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50"
        >
          Juha Vilkko
        </Link>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          <ThemeToggle />
        </div>
      </nav>

      {/* Simple mobile nav (no hamburger yet): */}
      <div className="border-t border-slate-200 px-4 py-2 sm:hidden dark:border-slate-800">
        <div className="flex flex-wrap gap-2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </header>
  );
}
