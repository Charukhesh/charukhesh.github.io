import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";
import { Tag } from "@/components/Tag";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-32 sm:pt-40">
      <div className="mx-auto max-w-wide">
        <SectionHeading title="About Me" note="Background & Skills" />
        
        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* LEFT COLUMN: Education & TA */}
          <div className="flex flex-col gap-16">
            
            {/* Education */}
            <section>
              <h3 className="mb-6 font-mono text-sm tracking-widest text-accent uppercase flex items-center gap-3">
                <span className="h-px w-6 bg-accent/50"></span>
                Education
              </h3>
              <div className="rounded-xl border border-border-soft bg-panel p-6 sm:p-8">
                <div className="mb-2 flex flex-wrap items-end justify-between gap-2">
                  <h4 className="font-display text-2xl font-semibold text-[#f2f4f6]">
                    {profile.education.institution}
                  </h4>
                  <span className="font-mono text-sm text-accent">{profile.education.period}</span>
                </div>
                <div className="mb-4 font-mono text-sm text-ink-dim sm:text-[15px]">
                  {profile.education.degree}
                </div>
                <div className="inline-block rounded-md bg-[#1e2329] px-3 py-1 font-mono text-sm text-[#f2f4f6] border border-border-soft">
                  CGPA: <span className="text-accent font-semibold">{profile.education.cgpa}</span>
                </div>
              </div>
            </section>

            {/* Teaching Assistant */}
            <section>
              <h3 className="mb-6 font-mono text-sm tracking-widest text-accent uppercase flex items-center gap-3">
                <span className="h-px w-6 bg-accent/50"></span>
                Teaching Experience
              </h3>
              <div className="flex flex-col gap-6">
                {profile.teaching.map((ta, i) => (
                  <div key={i} className="border-l-2 border-border-soft pl-5 transition-colors hover:border-accent">
                    <div className="mb-1 font-display text-xl font-semibold text-[#f2f4f6]">
                      {ta.course}
                    </div>
                    <div className="mb-3 font-mono text-[13px] text-muted sm:text-sm">
                      TA · {ta.program} · {ta.professor} 
                      <span className="mx-2 text-border-soft">|</span> 
                      <span className={ta.status === "Ongoing" ? "text-accent" : "text-ink-dim"}>{ta.status}</span>
                    </div>
                    <p className="font-serif text-[15px] leading-relaxed text-[#d1d5db]">
                      {ta.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN: Skills & Coursework */}
          <div className="flex flex-col gap-16">
            
            {/* Technical Arsenal */}
            <section>
              <h3 className="mb-6 font-mono text-sm tracking-widest text-accent uppercase flex items-center gap-3">
                <span className="h-px w-6 bg-accent/50"></span>
                Technical Arsenal
              </h3>
              
              <div className="mb-6">
                <div className="mb-3 font-mono text-xs text-ink-dim uppercase tracking-wider">Languages</div>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.languages.map((lang) => (
                    <Tag key={lang} active={false}>{lang}</Tag>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="mb-3 font-mono text-xs text-ink-dim uppercase tracking-wider">Frameworks & Tools</div>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.frameworks.map((fw) => (
                    <Tag key={fw} active={true}>{fw}</Tag>
                  ))}
                </div>
              </div>
            </section>

            {/* Coursework */}
            <section>
              <h3 className="mb-6 font-mono text-sm tracking-widest text-accent uppercase flex items-center gap-3">
                <span className="h-px w-6 bg-accent/50"></span>
                Relevant Coursework
              </h3>
              <ul className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 gap-x-4">
                {profile.courses.map((course, i) => (
                  <li key={i} className="flex items-start gap-2 font-serif text-[14.5px] leading-snug text-[#d1d5db]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/50"></span>
                    {course}
                  </li>
                ))}
              </ul>
            </section>

          </div>
        </div>

        {/* RESUME DISPLAY SECTION */}
        <section className="mt-24 border-t border-border-soft pt-20">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="mb-2 font-display text-3xl font-semibold text-[#f2f4f6] sm:text-4xl">
                Curriculum Vitae
              </h3>
              <p className="font-mono text-sm text-ink-dim">
                View or download my full academic and professional timeline.
              </p>
            </div>
            
            {/* Download Button targets the PDF in the public folder */}
            <a 
              href="/Charukhesh_CV.pdf" 
              download="Charukhesh_BR_CV.pdf"
              className="group inline-flex items-center gap-3 rounded-full border border-accent bg-accent/10 px-6 py-3 font-mono text-sm tracking-wide text-accent transition-all hover:bg-accent hover:text-bg"
            >
              DOWNLOAD PDF 
              <span className="transition-transform group-hover:translate-y-1">↓</span>
            </a>
          </div>
          
          {/* Native PDF Embed Viewer */}
          <div className="h-[600px] w-full overflow-hidden rounded-2xl border border-border-soft bg-[#12161a] sm:h-[800px]">
            <iframe 
              src="/Charukhesh_CV.pdf" 
              className="h-full w-full border-none"
              title="Charukhesh B R Resume"
            />
          </div>
        </section>

      </div>
    </main>
  );
}