import ContactForm from "../components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-50">
          Contact me
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
          If you’d like to discuss a project, collaboration, or opportunity,
          feel free to send me a message.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
