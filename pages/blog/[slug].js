// pages/blog/[slug].js
import Link from "next/link";
import { fetchDrupalData } from "../../lib/drupal";

function getIncludedImageUrl(post, included) {
  const rel = post.relationships?.field_image?.data;
  if (!rel || !included || !Array.isArray(included)) return null;

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

  if (rel.type?.startsWith("media--")) {
    const mediaEntity = included.find(
      (i) => i.type === rel.type && i.id === rel.id
    );

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

export default function BlogPostPage({ post }) {
  if (!post) {
    return (
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
          Post not found
        </h1>
        <Link href="/blog" className="text-blue-600 dark:text-blue-400">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const title = post.attributes?.title || "Untitled";
  const created = post.attributes?.created;
  const bodyHtml = post.attributes?.body?.processed;

  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <Link
        href="/blog"
        className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400"
      >
        ← Back to Blog
      </Link>

      <header className="space-y-2">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-50">
          {title}
        </h1>
        {created && (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {formatDate(created)}
          </p>
        )}
      </header>
      {post.image_url && (
        <img
          src={post.image_url}
          alt=""
          className="my-4 w-full rounded-2xl object-cover shadow-sm"
          style={{ maxHeight: "420px" }}
        />
      )}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div
          className="prose max-w-none prose-slate dark:prose-invert
             prose-p:leading-relaxed prose-p:my-4
             prose-headings:mt-8 prose-headings:mb-4
             prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
             dark:prose-a:text-blue-400
             prose-img:rounded-xl prose-img:shadow-sm"
          dangerouslySetInnerHTML={{ __html: bodyHtml || "" }}
        />
      </div>
    </article>
  );
}

export async function getStaticPaths() {
  const data = await fetchDrupalData("/jsonapi/node/blog_post");

  const paths = (data?.data || []).map((post) => {
    const alias = post.attributes?.path?.alias;
    const slug = getSlugFromAlias(alias, post.id);
    return { params: { slug } };
  });

  return {
    paths,
    // Easiest for now (no surprises)
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    // Fetch list and locate UUID by alias slug or fallback UUID
    const listData = await fetchDrupalData("/jsonapi/node/blog_post");

    const match = (listData?.data || []).find((p) => {
      const alias = p.attributes?.path?.alias;
      const candidate = getSlugFromAlias(alias, p.id);
      return candidate === slug;
    });

    if (!match) return { notFound: true, revalidate: 60 };

    const uuid = match.id;
    const detailData = await fetchDrupalData(
      `/jsonapi/node/blog_post/${uuid}?include=field_image`
    );

    const post = detailData?.data || null;
    const included = detailData?.included || [];
    const image_url = post ? getIncludedImageUrl(post, included) : null;

    return {
      props: {
        post: post ? { ...post, image_url } : null,
      },
      revalidate: 60,
    };
  } catch (e) {
    return { notFound: true, revalidate: 1 };
  }
}
