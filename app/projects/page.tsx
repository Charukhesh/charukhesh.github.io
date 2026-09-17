import ProjectPanel from "@/components/ProjectPanel";
import AdvancedProjectsToggle from "@/components/AdvancedProjectsToggle";
import { flagshipProjects, advancedProjects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-wide">
        <SectionHeading title="Selected research & technical projects" note={`${flagshipProjects.length} projects`} />
        <div>
          {flagshipProjects.map((p, i) => (
            <ProjectPanel key={p.slug} project={p} index={i + 1} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="mb-2 font-display text-5xl font-semibold text-[#f2f4f6]">Systems & Algorithms</h3>
          <p className="mb-6 max-w-wide text-ink-dim">
            Supporting work spanning computer vision, sequence modeling, estimation, control and quantitative systems, implemented end-to-end rather than notebook-only.
          </p>
          <AdvancedProjectsToggle projects={advancedProjects} />
        </div>
      </div>
    </main>
  );
}