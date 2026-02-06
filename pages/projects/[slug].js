import { useRouter } from "next/router";

import { fetchDrupalData } from "../../lib/drupal";

function getSlugFromAlias(alias, fallback) {
  if (!alias) return fallback;
  const parts = alias.split("/").filter(Boolean);
  return parts[parts.length - 1];
}

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

      {/* Image (only render if it exists) */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="mb-8 w-full rounded-lg object-cover shadow-xl"
        />
      )}

      {/* Project description */}
      <div
        className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: body?.processed }}
      />

      {/* External project link */}
      {field_project_url && (
        <div className="mt-8 text-center">
          <a
            href={field_project_url.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-xl font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Link to live page
          </a>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------
   Next.js data fetching
------------------------------------ */

export async function getStaticPaths() {
  const data = await fetchDrupalData("/jsonapi/node/project");

  const paths = (data?.data || []).map((project) => {
    const alias = project.attributes?.path?.alias;
    const slug = getSlugFromAlias(alias, project.id);

    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    const listData = await fetchDrupalData("/jsonapi/node/project");

    const projectInList = listData.data.find((p) => {
      const alias = p.attributes?.path?.alias;
      const candidateSlug = getSlugFromAlias(alias, p.id);
      return candidateSlug === slug;
    });

    if (!projectInList) {
      return { notFound: true };
    }

    const projectUUID = projectInList.id;
    const detailData = await fetchDrupalData(
      `/jsonapi/node/project/${projectUUID}`
    );

    let project = detailData.data;

    // Image fetch (simple, optional)
    const imageRel =
      project.relationships?.field_project_image?.data ||
      project.relationships?.field_image?.data;

    if (imageRel) {
      const fileData = await fetchDrupalData(
        `/jsonapi/file/file/${imageRel.id}`
      );

      const fileUrl = fileData?.data?.attributes?.uri?.url;

      if (fileUrl) {
        project.image_url = fileUrl.startsWith("http")
          ? fileUrl
          : `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${fileUrl}`;
      }
    }

    return {
      props: { project },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error loading project:", error);
    return { notFound: true };
  }
}
