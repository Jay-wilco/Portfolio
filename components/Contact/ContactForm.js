import React from "react";

export default function ContactForm() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
      <form
        action="https://formsubmit.co/jtvilkko@gmail.com"
        method="POST"
        className="space-y-5"
      >
        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium text-slate-900 dark:text-slate-100"
          >
            Your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="John Doe"
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-400/30"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-slate-900 dark:text-slate-100"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-400/30"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-sm font-medium text-slate-900 dark:text-slate-100"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Tell me about your project or opportunity..."
            className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-400/30"
          />
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            I typically respond within 1–2 days.
          </p>
        </div>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Portfolio contact form" />

        <input type="hidden" name="_next" value="/thank-you" />

        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
