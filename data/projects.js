export const projects = [
  // UNELMA APP
  {
    id: "p1",
    slug: "unelma-platforms",
    image_url: "/images/projects/unelma.png",
    attributes: {
      title: "Unelma Platforms",
      body: {
        processed: `
      <section class="mx-auto max-w-3xl space-y-6">
        <header class="space-y-2">
          <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            UNELMA Website (Team Project)
          </h1>
          <p class="text-slate-600 dark:text-slate-300">
            Company website for <strong class="font-semibold">UNELMA Solutions</strong> using
            <strong class="font-semibold"> Next.js</strong> and <strong class="font-semibold">Strapi</strong>.
          </p>
        </header>
      
        <div class="space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            A team-built company website developed for <strong class="font-semibold">UNELMA Solutions</strong>, using
            <strong class="font-semibold"> React (Next.js)</strong> and <strong class="font-semibold">Strapi</strong> as a headless CMS.
            The project focused on creating a clear, responsive, and maintainable website structure suitable for a real client.
          </p>
      
          <p>
            My contribution centered on frontend development and CMS integration, including implementing a responsive layout,
            connecting dynamic content from Strapi, and adding internationalization (i18n) support with a language switcher.
          </p>
        </div>
      
        <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 class="text-xl font-bold text-slate-900 dark:text-slate-50">Technologies Used</h2>
      
          <div class="mt-4 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Frontend</h3>
              <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript (ES6)</li>
                <li>HTML5</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
      
            <div>
              <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Backend</h3>
              <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                <li>Strapi</li>
                <li>REST API</li>
              </ul>
            </div>
      
            <div>
              <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Database</h3>
              <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                <li>SQLite</li>
              </ul>
            </div>
      
            <div>
              <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Infrastructure</h3>
              <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                <li>Vercel</li>
                <li>HTTPS / Reverse proxy handling</li>
                <li>Environment-based configuration</li>
              </ul>
            </div>
      
            <div>
              <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">APIs & Integrations</h3>
              <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                <li>CMS content integration via Strapi REST API</li>
              </ul>
            </div>
      
            <div>
              <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Version Control</h3>
              <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                <li>Git</li>
                <li>GitHub (team workflow)</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
  <a
    href="https://unelma-platforms.vercel.app/en"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700"
  >
    Live Demo
  </a>

  <a
    href="https://github.com/YOUR-USERNAME/YOUR-REPO"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-lg font-semibold text-slate-800 shadow-md transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
  >
    View on GitHub
  </a>
</section>

      </section>
      `,
      },

      field_project_url: {
        uri: "https://unelma-platforms.vercel.app/en",
      },
      // optional if you still want it available:
      field_short_description:
        "Second Team Project in school with real customer. Created a web page for Unelma Solutions",
      field_technologies_used:
        "React · NextJs · Strapi  · TypeScript · Vercel ",
      field_completed_on: "2025-12-17",
    },
  },

  //COUNTRIES APP

  {
    id: "p2",
    slug: "countries-app",
    image_url: "/images/projects/countries.png",
    attributes: {
      title: "Countries App",
      body: {
        processed: `<section class="mx-auto max-w-3xl space-y-6">
  <header class="space-y-2">
    <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
      Countries App (School Project)
    </h1>
    <p class="text-slate-600 dark:text-slate-300">
      A React-based learning project built with <strong class="font-semibold">Next.js</strong>, focused on modern
      frontend data-fetching and UI rendering patterns.
    </p>
  </header>

  <div class="space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
    <p>
      A React-based application developed in a classroom setting to practice
      <strong class="font-semibold"> Next.js</strong> and modern frontend data-fetching patterns.
      The app displays information about countries around the world, including flags, currencies,
      and basic weather data.
    </p>

    <p>
      The project focused on learning how to structure a Next.js application, fetch and render data
      from external APIs, and manage dynamic content in a React-based UI. It was built primarily as a
      learning exercise to strengthen understanding of React, routing, and API integration.
    </p>
  </div>

  <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <h2 class="text-xl font-bold text-slate-900 dark:text-slate-50">Technologies Used</h2>

    <div class="mt-4 grid gap-6 sm:grid-cols-2">
      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Frontend</h3>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
          <li>React</li>
          <li>Next.js</li>
          <li>JavaScript (ES6)</li>
          <li>HTML5</li>
          <li>CSS</li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Backend / Services</h3>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
          <li>Supabase</li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">APIs &amp; Integrations</h3>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
          <li>REST APIs for country and weather data</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Links -->
  <section class="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
    <a
      href="https://react-countries-app-lac.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700"
    >
      Live Demo
    </a>

    <a
      href="https://github.com/Jay-wilco/React_countriesApp.git"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-lg font-semibold text-slate-800 shadow-md transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      View on GitHub
    </a>
  </section>
</section>

        `,
      },
      field_project_url: {
        uri: "https://react-countries-app-kappa.vercel.app/",
      },
      // optional if you still want it available:
      field_short_description:
        "A Next.js learning project that displays country information and weather data, using Supabase as a backend service.",
      field_technologies_used:
        "React · Next.js · Supabase · REST APIs · JavaScript · CSS",
      field_completed_on: "2025-11-20",
    },
  },

  //FINNISH EVENT PLANNER

  {
    id: "p3",
    slug: "event-planner",
    image_url: "/images/projects/eventori.png",
    attributes: {
      title: "Finnish Event Planner",
      body: {
        processed: `<section class="mx-auto max-w-3xl space-y-6">
  <header class="space-y-2">
    <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
      Finnish Event Planner (Team Project)
    </h1>
    <p class="text-slate-600 dark:text-slate-300">
      A full-stack team project built with <strong class="font-semibold">React (Vite)</strong> and a
      <strong class="font-semibold"> Laravel REST API</strong>, deployed on
      <strong class="font-semibold"> Render</strong> with <strong class="font-semibold">PostgreSQL</strong>.
    </p>
  </header>

  <div class="space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
    <p>
      A full-stack application developed as a team project that allows users to browse and create local events,
      with integrated weather data to enhance the user experience.
    </p>

    <p>
      My primary contribution focused on <strong class="font-semibold">deployment and production debugging</strong>:
      fixing HTTPS and reverse proxy issues, resolving API routing and environment mismatches, and stabilizing
      event creation in production.
    </p>

    <p>
      The project was developed as a learning-oriented team effort, so some areas (notably authentication flow
      and demo UX) were intentionally kept simple to prioritize core functionality and deployment experience.
    </p>
  </div>

  <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <h2 class="text-xl font-bold text-slate-900 dark:text-slate-50">Technologies Used</h2>

    <div class="mt-4 grid gap-6 sm:grid-cols-2">
      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Frontend</h3>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
          <li>React</li>
          <li>Vite</li>
          <li>JavaScript (ES6)</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Backend</h3>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
          <li>Laravel (PHP)</li>
          <li>REST API</li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Database</h3>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
          <li>PostgreSQL</li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
          Infrastructure &amp; Deployment
        </h3>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
          <li>Render</li>
          <li>HTTPS / Reverse proxy handling</li>
          <li>Environment-based configuration</li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
          APIs &amp; Integrations
        </h3>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
          <li>OpenWeatherMap API</li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
          Version Control
        </h3>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
          <li>Git</li>
          <li>GitHub (team workflow)</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Links -->
  <section class="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
    <a
      href="https://finnish-event-planner-dxbm.onrender.com"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700"
    >
      Live Demo
    </a>

    <a
      href="https://github.com/Jay-wilco/Finnish-event-planner.git"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-lg font-semibold text-slate-800 shadow-md transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      View on GitHub
    </a>
  </section>
</section>

          `,
      },
      field_project_url: {
        uri: "https://example.com",
      },
      // optional if you still want it available:
      field_short_description:
        "A React + Laravel team project that allows users to browse and create local events. Deployed on Render as a learning-focused full-stack demo.",
      field_technologies_used:
        "React · Vite · Laravel · PostgreSQL · REST API · Render · OpenWeatherMap API",
      field_completed_on: "2025-06-13",
    },
  },

  //HR APP

  {
    id: "p4",
    slug: "hrapp",
    image_url: "/images/projects/hrapp.png",
    attributes: {
      title: "HR App",
      body: {
        processed: `<section class="mx-auto max-w-3xl space-y-6">
  <header class="space-y-2">
    <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
      HR App (School Practice Project)
    </h1>
    <p class="text-slate-600 dark:text-slate-300">
      A React-based practice project focused on <strong class="font-semibold">React fundamentals</strong> and basic
      CRUD interactions in a simple employee management UI.
    </p>
  </header>

  <div class="space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
    <p>
      A React-based application developed as a school assignment to practice React fundamentals. The app allows users to
      view, add, edit, and manage basic employee information.
    </p>

    <p>
      The project focused on learning core React concepts such as <strong class="font-semibold">components</strong>,
      <strong class="font-semibold"> props</strong>, <strong class="font-semibold">state management</strong>,
      <strong class="font-semibold"> conditional rendering</strong>, and basic <strong class="font-semibold">CRUD</strong>
      operations. It was built as an early hands-on exercise to understand how data flows in a React application and how
      UI updates respond to user actions.
    </p>
  </div>

  <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <h2 class="text-xl font-bold text-slate-900 dark:text-slate-50">Technologies Used</h2>

    <div class="mt-4 grid gap-6 sm:grid-cols-2">
      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Frontend</h3>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
          <li>React</li>
          <li>JavaScript (ES6)</li>
          <li>HTML5</li>
          <li>CSS</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Links -->
  <section class="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
    <a
      href="https://hr-app-flax.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700"
    >
      Live Demo
    </a>

    <a
      href="https://github.com/Jay-wilco/HRApp.git"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-lg font-semibold text-slate-800 shadow-md transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      View on GitHub
    </a>
  </section>
</section>

          `,
      },
      field_project_url: {
        uri: "https://example.com",
      },
      // optional if you still want it available:
      field_short_description:
        "A beginner React practice app for managing employee data and learning core React concepts.",
      field_technologies_used: "React  + Vite · JavaScript · HTML · CSS",
      field_completed_on: "2025-05-20",
    },
  },

  //PANCAKE MAKER

  {
    id: "p5",
    slug: "pancake-maker",
    image_url: "/images/projects/pancake.png",
    attributes: {
      title: "Pancake Maker",
      body: {
        processed: `<section class="mx-auto max-w-3xl space-y-6">
  <header class="space-y-2">
    <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
      Pancake Maker (School Practice Project)
    </h1>
    <p class="text-slate-600 dark:text-slate-300">
      A beginner-friendly frontend project focused on learning
      <strong class="font-semibold"> vanilla JavaScript</strong> and core web development concepts.
    </p>
  </header>

  <div class="space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
    <p>
      A simple frontend application built as one of my first programming practice projects using
      <strong class="font-semibold"> JavaScript</strong>, <strong class="font-semibold">HTML</strong>,
      and <strong class="font-semibold">CSS</strong>. The app allows users to create a pancake order by
      selecting toppings and placing the order.
    </p>

    <p>
      The project focuses on practicing core web development fundamentals such as
      <strong class="font-semibold"> DOM manipulation</strong>,
      <strong class="font-semibold"> event handling</strong>, and
      <strong class="font-semibold"> basic state management</strong>. An orders view allows previously
      created orders to be reviewed and managed.
    </p>

    <p>
      The project was created as a learning exercise to build confidence with vanilla JavaScript and
      UI logic, serving as a foundation for more advanced frontend development.
    </p>
  </div>

  <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <h2 class="text-xl font-bold text-slate-900 dark:text-slate-50">Technologies Used</h2>

    <div class="mt-4 grid gap-6 sm:grid-cols-2">
      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
          Frontend
        </h3>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
          <li>JavaScript (ES6)</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Links -->
  <section class="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
    <a
      href="https://pancake-maker-six.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700"
    >
      Live Demo
    </a>

    <a
      href="https://github.com/Jay-wilco/Pancake_Maker.git"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-lg font-semibold text-slate-800 shadow-md transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      View on GitHub
    </a>
  </section>
</section>

          `,
      },
      field_project_url: {
        uri: "https://example.com",
      },
      // optional if you still want it available:
      field_short_description:
        "A beginner JavaScript practice project for creating and managing pancake orders using HTML, CSS, and JS",
      field_technologies_used: "JavaScript · HTML · CSS",
      field_completed_on: "2025-03-28",
    },
  },

  // PROTOFOLIO

  {
    id: "p6",
    slug: "my-first-project",
    image_url: "/images/projects/protofolio.png",
    attributes: {
      title: "My First Portfolio",
      body: {
        processed: `<section class="mx-auto max-w-3xl space-y-6">
  <header class="space-y-2">
    <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
      Prototype Portfolio Page (First School Project)
    </h1>
    <p class="text-slate-600 dark:text-slate-300">
      My very first frontend practice project after completing the
      <strong class="font-semibold"> JavaScript basics</strong> lessons.
    </p>
  </header>

  <div class="space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
    <p>
      This project was one of the very first assignments completed after finishing the introductory
      JavaScript lessons. The goal was to build a simple prototype portfolio page to practice basic
      HTML structure, styling, and simple JavaScript interactions.
    </p>

    <p>
      The page includes basic personal information, a small image gallery (featuring cats), and a
      simple contact form. The focus was not on advanced functionality, but on understanding how
      different parts of a web page fit together and how user input can be handled in a basic way.
    </p>

    <p>
      Although simple, this project marked an important starting point in my learning journey and
      helped build confidence before moving on to more complex React-based applications.
    </p>
  </div>

  <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <h2 class="text-xl font-bold text-slate-900 dark:text-slate-50">Technologies Used</h2>

    <div class="mt-4 grid gap-6 sm:grid-cols-2">
      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
          Frontend
        </h3>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
          <li>JavaScript (Basics)</li>
          <li>HTML5</li>
          <li>CSS</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Links -->
  <section class="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
    <a
      href="https://demo-portfolio-tawny.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700"
    >
      Live Demo
    </a>

    <a
      href="https://github.com/YOUR-USERNAME/YOUR-REPO"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-lg font-semibold text-slate-800 shadow-md transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      View on GitHub
    </a>
  </section>
</section>

          `,
      },
      field_project_url: {
        uri: "https://example.com",
      },
      // optional if you still want it available:
      field_short_description:
        "Very simple prototype portfolio, the vert first thingy ever made in class",
      field_technologies_used: "JavaScript · HTML · CSS",
      field_completed_on: "2025-01-30",
    },
  },

  // {
  //   id: "p1", // can be any unique string
  //   slug: "my-first-project",
  //   image_url: "/images/projects/my-first-project.png",
  //   attributes: {
  //     title: "My First Project",
  //     body: {
  //       processed: `
  //         <p>Longer project description here.</p>
  //         <ul>
  //           <li>What you built</li>
  //           <li>What you learned</li>
  //         </ul>
  //       `,
  //     },
  //     field_project_url: {
  //       uri: "https://example.com",
  //     },
  //     // optional if you still want it available:
  //     field_short_description: "One line summary",
  //     field_technologies_used: "Next.js, React",
  //     field_completed_on: "2025-11-01",
  //   },
  // },
];
