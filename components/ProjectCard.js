import React from "react";
import Link from "next/link";

function getSlugFromAlias(alias, fallback) {
  if (!alias || typeof alias !== "string") return fallback;

  const parts = alias.split("/").filter(Boolean);
  return parts[parts.length - 1] || fallback;
}

const ProjectCard = ({ project }) => {
  const attrs = project?.attributes || {};
  const {
    title,
    field_project_url,
    field_technologies_used,
    field_short_description,
  } = attrs;

  const slug = project.slug || getSlugFromAlias(attrs?.path?.alias, project.id);

  const projectUrl = field_project_url?.uri;
  const projectLinkTitle = field_project_url?.title || "Live Demo";
  const technologies = field_technologies_used || "N/A";

  return (
    <Link href={`/projects/${slug}`} className="block">
      <div className="project-card">
        {project.image_url && (
          <img
            src={project.image_url}
            alt={`${title} preview`}
            className="mb-4 h-44 w-full rounded-xl object-cover"
            loading="lazy"
          />
        )}

        <h2 className="card-title">{title}</h2>
        {field_short_description && (
          <p className="mb-4 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">
            {field_short_description}
          </p>
        )}

        <div className="mb-4">
          <strong className="card-tech-label">Tech Stack:</strong>{" "}
          <span className="card-tech-value">{technologies}</span>
        </div>

        <p className="card-footer">
          <span className="card-details-link">View Details &rarr;</span>

          {projectUrl && (
            <span
              role="button"
              tabIndex={0}
              className="card-external-link"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(projectUrl, "_blank");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(projectUrl, "_blank");
                }
              }}
            >
              {projectLinkTitle}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
