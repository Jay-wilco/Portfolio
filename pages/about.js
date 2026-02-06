export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      {/* Intro with photo */}
      <section className="grid gap-8 sm:grid-cols-[200px_1fr]">
        {/* Photo placeholder */}
        <div className="flex h-48 w-48 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          Photo coming soon
        </div>

        {/* Intro text */}
        <div>
          <h1 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-slate-50">
            About me
          </h1>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            I am a career-changing developer with a long professional background
            in harbour and logistics work. After many years in that field, I
            made a deliberate decision to move toward something new and more
            creative: software development.
          </p>
        </div>
      </section>

      {/* Motivation */}
      <section>
        <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-slate-50">
          Motivation
        </h2>
        <p className="leading-relaxed text-slate-700 dark:text-slate-300">
          Gaming has been a long-standing passion of mine, and it is also the
          direction I ultimately aim toward professionally. With the technical
          skills I am building now, my long-term goal is to work within the
          gaming industry, contributing to interactive and engaging digital
          experiences.
        </p>
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
              <li>JavaScript</li>
              <li>React & Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-50">
              Backend / CMS
            </h3>
            <ul className="space-y-1 text-slate-700 dark:text-slate-300">
              <li>Drupal (headless, JSON:API)</li>
              <li>PHP (basic)</li>
              <li>Laravel (introductory)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Personal / location */}
      <section className="border-t border-slate-200 pt-6 dark:border-slate-800">
        <p className="text-slate-700 dark:text-slate-300">
          Outside of development, gaming remains an important personal interest.
          I am currently based in Finland and open to learning-oriented roles,
          projects, and collaborations.
        </p>
      </section>
    </div>
  );
}
