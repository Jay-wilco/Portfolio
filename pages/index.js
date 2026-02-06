import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Full-width hero image */}
      <section className="relative h-[60vh] w-full">
        {/* Image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950" />

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />

        {/* Hero text */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Clean, content-driven web experiences
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-200">
              Career-changing developer building modern web applications with
              Next.js, Tailwind CSS, and Drupal (JSON:API).
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                View projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Centered content below */}
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        {/* What I do */}
        <section className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Frontend
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              React, Next.js, Tailwind CSS, accessible UI components.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              CMS & APIs
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Headless Drupal, JSON:API, content modeling.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Reliable work
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Clear code, steady progress, practical problem-solving.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
            Explore my work
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            See selected projects with details, tech stacks, and live demos.
          </p>
          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
            >
              Go to projects
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
