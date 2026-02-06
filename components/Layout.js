import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col light:bg-slate-50 light:text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        {children}
      </main>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />

      <Footer />
    </div>
  );
}
