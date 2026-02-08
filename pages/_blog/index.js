// pages/blog/index.js
import Link from "next/link";
import { fetchDrupalData } from "../../lib/drupal";

function getSlugFromAlias(alias, fallback) {
  if (!alias || typeof alias !== "string") return fallback;
  const parts = alias.split("/").filter(Boolean);
  return parts[parts.length - 1] || fallback;
}

function formatDate(isoString) {
  try {
    return new Date(isoString).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return "";
  }
}
function getIncludedImageUrl(post, included) {
  const rel = post.relationships?.field_image?.data;
  if (!rel || !included || !Array.isArray(included)) return null;

  // Case 1: field_image points directly to file--file
  if (rel.type === "file--file") {
    const fileEntity = included.find(
      (i) => i.type === "file--file" && i.id === rel.id
    );
    const fileUrl = fileEntity?.attributes?.uri?.url;
    if (!fileUrl) return null;

    return fileUrl.startsWith("http")
      ? fileUrl
      : `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${fileUrl}`;
  }

  // Case 2: field_image points to media--image (node -> media -> file)
  if (rel.type?.startsWith("media--")) {
    const mediaEntity = included.find(
      (i) => i.type === rel.type && i.id === rel.id
    );

    // Common media image field relationship names:
    const fileRel =
      mediaEntity?.relationships?.field_media_image?.data ||
      mediaEntity?.relationships?.thumbnail?.data;

    if (!fileRel) return null;

    const fileEntity = included.find(
      (i) => i.type === fileRel.type && i.id === fileRel.id
    );

    const fileUrl = fileEntity?.attributes?.uri?.url;
    if (!fileUrl) return null;

    return fileUrl.startsWith("http")
      ? fileUrl
      : `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${fileUrl}`;
  }

  return null;
}

export default function BlogIndexPage({ posts }) {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-50">
          Blog
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Notes and updates from my learning journey and projects.
        </p>
      </header>

      {(!posts || posts.length === 0) && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
          No posts yet. Add Blog Post content in Drupal.
        </div>
      )}

      <div className="space-y-4">
        {posts?.map((post) => {
          const alias = post.attributes?.path?.alias;
          const slug = getSlugFromAlias(alias, post.id);
          const title = post.attributes?.title || "Untitled";
          const created = post.attributes?.created;

          return (
            <Link
              key={post.id}
              href={`/blog/${slug}`}
              className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800/60"
            >
              <div className="flex flex-col gap-2">
                {post.image_url && (
                  <img
                    src={post.image_url}
                    alt=""
                    className="mb-4 h-44 w-full rounded-xl object-cover"
                  />
                )}

                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                  {title}
                </h2>
                {created && (
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {formatDate(created)}
                  </p>
                )}
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Read post →
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const data = await fetchDrupalData(
      "/jsonapi/node/blog_post?sort=-created&include=field_image"
    );

    const posts = data?.data || [];
    const included = data?.included || [];

    const postsWithImages = posts.map((p) => ({
      ...p,
      image_url: getIncludedImageUrl(p, included),
    }));

    return {
      props: { posts: postsWithImages },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: { posts: [] },
      revalidate: 1,
    };
  }
}
