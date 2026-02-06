import { fetchDrupalData } from "../../lib/drupal";
import ProjectCard from "../../components/ProjectCard";

function getIncludedImageUrlFromRelationship(project, included) {
  const rel = project.relationships?.field_project_image?.data;
  if (!rel || !included || !Array.isArray(included)) return null;

  // Case 1: relationship points directly to file--file
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

  // Case 2: relationship points to media--* (node -> media -> file)
  if (rel.type?.startsWith("media--")) {
    const mediaEntity = included.find(
      (i) => i.type === rel.type && i.id === rel.id
    );

    // Common Drupal media image field relationship names
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

export default function ProjectsPage({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          No projects found. Please add content in Drupal!
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="mb-8 border-b border-slate-200 pb-4 text-4xl font-extrabold text-slate-900 dark:border-slate-800 dark:text-slate-50">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* gap-8 creates more space between the cards */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

// --- Data Fetching Function (getStaticProps) ---
export async function getStaticProps() {
  try {
    const path =
      "/jsonapi/node/project?include=field_project_image&sort=-field_completed_on";

    const data = await fetchDrupalData(path);

    const projects = data?.data || [];
    const included = data?.included || [];

    const projectsWithImages = projects.map((p) => ({
      ...p,
      image_url: getIncludedImageUrlFromRelationship(p, included),
    }));

    return {
      props: { projects: projectsWithImages },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching project data:", error);
    return {
      props: { projects: [] },
      revalidate: 1,
    };
  }
}
