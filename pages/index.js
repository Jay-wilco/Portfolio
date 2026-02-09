import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { projects as allProjects } from "../data/projects";

export default function Home() {
  const name = "Juha Vilkko";
  const role = "Junior FullStack Developer";
  const location = "Helsinki, Finland";
  const oneLiner =
    "I build responsive web apps with React/Next.js and enjoy integrating APIs and headless CMSs.";
  const availability = "Currently looking for an internship.";

  const featured = allProjects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        {/* Background image */}
        {/* Desktop background */}
        <div
          className="absolute inset-0 hidden bg-cover bg-center sm:block"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        {/* Mobile rotated background */}
        <div className="absolute inset-0 sm:hidden overflow-hidden">
          <div
            className="
    absolute left-1/2 top-1/2
    h-[120vw] w-[120vh]
    -translate-x-1/2 -translate-y-1/2
    rotate-90 scale-[1.06]
    bg-contain bg-center bg-no-repeat
  "
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
          />
        </div>
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
        <div className="relative mx-auto min-h-[80vh] sm:min-h-[60vh] max-w-[1200px]">
          {/* This is the "box target" */}
          <div
            className="
    absolute
    left-2 top-12 w-[96%]
    sm:left-28 sm:top-16 sm:w-[520px]
    lg:left-60 lg:top-20 lg:w-[600px]
    text-center flex flex-col pb-6
    h-[68vh] sm:h-auto
  "
          >
            <div>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {name}
              </h1>

              <h2 className="mx-auto mt-3 max-w-[22ch] px-3 text-balance text-xl font-bold text-slate-100 sm:max-w-none sm:px-0 sm:text-2xl">
                {role}
              </h2>

              <p className="mx-auto mt-4 max-w-[28ch] text-sm leading-snug text-slate-200 sm:mt-4 sm:max-w-2xl sm:text-lg">
                {oneLiner}
              </p>

              <p className="mt-2 text-sm text-slate-200/90">{location}</p>
            </div>

            <div className="flex-1" />

            {/*BUTTONS*/}

            <div className="flex flex-col items-center pt-2">
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
                >
                  View projects
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  About me
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact
                </Link>
              </div>

              {/*LINKS*/}

              <div className="mt-8 sm:mt-6 flex flex-wrap justify-center gap-4 text-sm">
                <a
                  href="https://github.com/Jay-wilco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 underline decoration-white/30 underline-offset-4 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/juhavilkko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 underline decoration-white/30 underline-offset-4 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="/files/CV_vilkko.pdf"
                  className="text-slate-200 underline decoration-white/30 underline-offset-4 hover:text-white"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Frontend
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              React, Next.js, Tailwind CSS, responsive layouts, component-based
              UI.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              APIs & data
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              REST APIs, JSON, async fetching, and clean data mapping to UI.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Team work
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              GitHub workflow, teamwork, and solving real deployment/debugging
              issues.
            </p>
          </div>
        </section>

        {/* Featured projects */}
        <section>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                Featured projects
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                A few highlights — see all projects for full details.
              </p>
            </div>

            <Link
              href="/projects"
              className="hidden rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-slate-800 sm:inline-flex"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
            >
              View all projects
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
            Want to build something together?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            I’m looking for an internship and I’m happy to do a short coding
            task or a quick call.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
            >
              Contact me
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-slate-800"
            >
              Browse projects
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
