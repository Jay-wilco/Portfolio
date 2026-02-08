import ProjectCard from "../../components/ProjectCard";
import { projects as staticProjects } from "../../data/projects";

export default function ProjectsPage({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          No projects found.
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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { projects: staticProjects },
  };
}
