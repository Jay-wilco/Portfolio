import { useRouter } from "next/router";
import { projects } from "../../data/projects";

export default function ProjectDetail({ project }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="py-10 text-center">Loading project details...</div>;
  }

  if (!project) {
    return (
      <div className="py-10 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-3">
          Project Not Found
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          The requested project could not be loaded.
        </p>
      </div>
    );
  }

  const { title, body, field_project_url } = project.attributes;
  const imageUrl = project.image_url;

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-6 border-b pb-2 text-5xl font-extrabold text-gray-900 dark:text-gray-100">
        {title}
      </h1>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="mb-8 w-full rounded-lg object-cover shadow-xl"
        />
      )}

      <div
        className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: body?.processed }}
      />

      {field_project_url?.uri && (
        <div className="mt-8 text-center">
          {/* <a
            href={field_project_url.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-xl font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Link to live page
          </a> */}
        </div>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return { notFound: true };

  return {
    props: { project },
  };
}
