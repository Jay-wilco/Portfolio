import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const name = "Juha Vilkko";
  const role = "Junior Fullstack Developer";
  const location = "Finland";
  const goal =
    "an internship where I can learn fast and contribute to real projects";

  return (
    <div className="mx-auto max-w-4xl space-y-12">
      {/* Intro with photo */}
      <section className="grid gap-8 sm:grid-cols-[200px_1fr]">
        {/* Photo placeholder */}
        <div className="h-48 w-48 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
          <Image
            src="/images/profile/naamakuva.jpg"
            alt="Juha Vilkko"
            width={192}
            height={192}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* Intro text */}
        <div>
          <h1 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-slate-50">
            About me
          </h1>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            Hi, I’m <strong className="font-semibold">{name}</strong> — a {role}{" "}
            based in <strong className="font-semibold"> {location}</strong>. I’m
            currently building small but complete web applications with React
            and Next.js, focusing on how frontend code connects to real data
            through APIs and headless CMSs.
          </p>

          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
            I’m coming into development through a career change, which means I’m
            comfortable learning new systems, taking responsibility, and working
            through problems step by step. Right now my main focus is writing
            clearer code, understanding why things work, and improving by
            building real projects rather than following tutorials alone.
          </p>

          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
            I’m currently looking for{" "}
            <strong className="font-semibold">{goal}</strong>. I enjoy turning
            requirements into clear, usable interfaces, and I’m comfortable
            picking up new tools when a project calls for them.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-slate-800"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>

      {/* Focus */}
      <section>
        <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-slate-50">
          What I’m focusing on
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
          <li>Building responsive user interfaces with React and Next.js</li>
          <li>Fetching data from REST APIs and mapping it cleanly to the UI</li>
          <li>Structuring components and state so the code stays readable</li>
          <li>
            Deploying projects and debugging issues that only appear outside
            local development
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-50">
          Current skill set
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-50">
              Frontend
            </h3>
            <ul className="space-y-1 text-slate-700 dark:text-slate-300">
              <li>JavaScript (ES6)</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-50">
              Backend / Tools
            </h3>
            <ul className="space-y-1 text-slate-700 dark:text-slate-300">
              <li>REST APIs</li>
              <li>Git & GitHub</li>
              <li>Basic PHP / Laravel (learning)</li>
              <li>Headless CMS concepts (Drupal / Strapi)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
          A bit more about me
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">
          I enjoy building things that feel clean and intentional, and I learn
          best by shipping real features and improving them over time. I’m
          currently looking for an internship or junior role where I can
          continue developing my skills while contributing to real projects.
        </p>

        <p className="mt-3 text-slate-700 dark:text-slate-300">
          If this sounds like a good fit, feel free to get in touch — I’m happy
          to talk.
        </p>
      </section>
    </div>
  );
}
