import Link from "next/link";
import ProjectVisual from "./ProjectVisual";
import { Project } from "@/data/projects";
import { Tag } from "./Tag";

export default function ProjectPanel({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative mb-24 grid grid-cols-1 items-center gap-10 border-b border-border-soft pb-24 last:border-none lg:grid-cols-[1.1fr_0.9fr]">
      <div className="order-2 lg:order-1">
        
        {/* 👉 ADDED: Institution & Advisor Metadata */}
        <div className="mb-4 flex flex-wrap items-center gap-2.5 font-mono text-xs text-muted sm:text-sm">
          <span className="uppercase text-accent">{project.category.join(" · ")}</span>
          <span className="hidden h-px w-6 bg-border-soft sm:block"></span>
          <span className="uppercase text-ink-dim">{project.institution}</span>
          {project.advisor && (
            <>
              <span className="text-border-soft">/</span>
              <span className="uppercase text-ink-dim">{project.advisor}</span>
            </>
          )}
        </div>
        
        <h3 className="mb-5 font-display text-3xl font-semibold text-[#f2f4f6] sm:text-4xl">
          {project.title}
        </h3>
        
        <p className="mb-5 font-serif text-[14.5px] leading-relaxed text-[#d1d5db] sm:text-[15.5px]">
          {project.summary}
        </p>

        {/* 👉 ADDED: Result Highlight Box */}
        {project.result && (
          <div className="mb-8 border-l-2 border-accent pl-4 font-mono text-xs leading-relaxed text-[#d1d5db] sm:text-[13px]">
            <span className="mr-2 font-semibold text-accent">↳ OUTCOME:</span> 
            {project.result}
          </div>
        )}
        
        <div className="mb-8 flex flex-wrap gap-2">
          {project.methods.map((m) => (
            <Tag key={m} active={false}>{m}</Tag>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          {project.hasCaseStudy && (
            <Link href={`/projects/${project.slug}`} className="rounded-full border border-accent bg-accent px-5 py-2.5 font-mono text-xs tracking-wide text-bg transition-colors hover:bg-transparent hover:text-accent">
              READ CASE STUDY →
            </Link>
          )}
          {project.repo.url && (
            <a href={project.repo.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border px-5 py-2.5 font-mono text-xs tracking-wide text-ink-dim transition-colors hover:border-accent hover:text-accent">
              GITHUB
            </a>
          )}
        </div>
      </div>
      
      <div className="order-1 lg:order-2">
        {project.image ? (
          <div className="relative w-full overflow-hidden rounded-2xl border border-border-soft bg-panel shadow-sm aspect-[4/3] sm:aspect-video">
            <img 
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ) : (
          <ProjectVisual slug={project.slug} />
        )}
      </div>
    </article>
  );
}