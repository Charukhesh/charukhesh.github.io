import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import Link from "next/link";
import { getProjectBySlug, flagshipProjects } from "@/data/projects";

// If you have a custom mdx-components file, import it here:
// import { mdxComponents } from "@/components/mdx-components";

/**
 * REQUIRED FOR GITHUB PAGES (Static Export):
 * This tells Next.js exactly which dynamic [slug] pages to build at compile time.
 */
export function generateStaticParams() {
  return flagshipProjects
    .filter((project) => project.hasCaseStudy)
    .map((project) => ({
      slug: project.slug,
    }));
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  // 1. Validate that the project exists in data/projects.ts
  const project = getProjectBySlug(params.slug);
  
  if (!project || !project.hasCaseStudy) {
    notFound();
  }

  // 2. Locate and read the corresponding MDX file
  const filePath = path.join(process.cwd(), "content", "case-studies", `${params.slug}.mdx`);
  
  let source = "";
  try {
    source = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error(`Case study MDX file not found at: ${filePath}`);
    notFound();
  }

  return (
    <main className="min-h-screen px-6 pb-32 pt-32 sm:pt-40">
      <div className="mx-auto max-w-[800px]">
        
        {/* Back Button */}
        <Link 
          href="/projects" 
          className="group mb-12 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to projects
        </Link>

        {/* Case Study Header */}
        <header className="mb-12 border-b border-border-soft pb-8">
          <div className="mb-4 flex flex-wrap gap-2 font-mono text-xs uppercase tracking-widest text-accent">
            {project.category.join(" · ")}
          </div>
          <h1 className="mb-6 font-display text-4xl font-semibold leading-tight text-[#f2f4f6] sm:text-5xl">
            {project.title}
          </h1>
          {project.repo.url && (
            <a 
              href={project.repo.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex rounded-full border border-border-soft px-5 py-2.5 font-mono text-xs tracking-wide text-ink-dim transition-colors hover:border-accent hover:text-accent"
            >
              GITHUB REPOSITORY ↗
            </a>
          )}
        </header>

        {/* MDX Content Rendering */}
        {/* We use the serif font and larger text base to match your academic styling */}
        <article className="case-study-body prose prose-invert max-w-none font-serif text-base leading-relaxed text-[#d1d5db] sm:text-lg">
          <MDXRemote
            source={source}
            // components={mdxComponents} <-- Uncomment if you use custom MDX components
            options={{
              mdxOptions: {
                remarkPlugins: [remarkMath, remarkGfm],
                rehypePlugins: [rehypeKatex],
              },
              parseFrontmatter: true, // Automatically handles YAML --- frontmatter block at the top of files
            }}
          />
        </article>

      </div>
    </main>
  );
}