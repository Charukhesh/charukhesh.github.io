import { Project } from "@/data/projects";

export default function AdvancedItem({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col justify-between gap-6 border-b border-border-soft py-7 sm:flex-row sm:items-start">
      <div className="flex-1">
        
        {/* 👉 ADDED: Institution & Advisor Metadata */}
        <div className="mb-2.5 flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
          <span className="uppercase text-accent">{project.institution}</span>
          {project.advisor && (
            <>
              <span className="text-border-soft">|</span>
              <span>{project.advisor}</span>
            </>
          )}
        </div>

        <h4 className="mb-2 font-display text-xl font-semibold text-[#f2f4f6] transition-colors group-hover:text-accent sm:text-2xl">
          {project.title}
        </h4>
        
        <p className="mb-4 max-w-4xl font-serif text-[14.5px] leading-relaxed text-[#d1d5db] sm:text-[15.5px]">
          {project.summary}
        </p>
        
        {/* 👉 ADDED: Result text */}
        {project.result && (
          <div className="mb-5 font-mono text-xs text-[#f2f4f6] sm:text-[13px]">
            <span className="mr-2 text-accent">↳</span>{project.result}
          </div>
        )}

        <div className="flex flex-wrap gap-2 font-mono text-xs text-muted sm:text-sm">
          {project.methods.join(" · ")}
        </div>
      </div>
      
      {project.repo.url && (
        <a href={project.repo.url} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-lg border border-border-soft px-4 py-2 font-mono text-xs text-ink-dim transition-colors hover:border-accent hover:text-accent sm:text-sm">
          GitHub ↗
        </a>
      )}
    </article>
  );
}