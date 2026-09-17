import SectionHeading from "@/components/SectionHeading";
import { publications } from "@/data/publications";
import { profile } from "@/data/profile";
import { Trophy, FileText } from "lucide-react"; 

export default function PublicationsPage() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-wide">
        <SectionHeading title="Publications & Achievements" note="Research & Recognition" />

        {/* Widescreen Split Layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* LEFT: PUBLICATIONS */}
          <div>
            <h3 className="mb-8 flex items-center gap-3 font-display text-2xl font-semibold text-[#f2f4f6]">
              <FileText className="text-accent" size={24} />
              Publications & Conferences
            </h3>
            
            <div className="flex flex-col gap-10">
              {publications.map((pub, i) => (
                <div key={i} className="border-l-2 border-border-soft pl-5 transition-colors hover:border-accent">
                  {/* Scaled Academic Serif Font */}
                  <div className="mb-3 font-serif text-[16px] leading-relaxed text-[#f2f4f6] sm:text-[18px]">
                    "{pub.title}"
                  </div>
                  <div className="mb-2 font-mono text-sm text-ink-dim sm:text-[15px]">
                    {pub.authors}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-sm text-muted">
                    <i className="text-[#d1d5db]">{pub.venue}</i>
                    <span className="inline-block rounded-full border border-accent/50 bg-accent/10 px-2.5 py-0.5 text-xs text-accent">
                      {pub.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-10 pl-5">
              <a href={profile.links.researchGate} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-accent underline decoration-dotted underline-offset-4 hover:text-[#f2f4f6] sm:text-base">
                Full profile on ResearchGate →
              </a>
            </p>
          </div>

          {/* RIGHT: ACHIEVEMENTS */}
          <div>
            <h3 className="mb-8 flex items-center gap-3 font-display text-2xl font-semibold text-[#f2f4f6]">
              <Trophy className="text-accent" size={24} />
              Key Achievements
            </h3>
            
            <ul className="flex flex-col gap-5">
              {profile.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-4 rounded-xl border border-border-soft bg-panel p-5 sm:p-6 transition-colors hover:border-accent/50">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 font-mono text-xs text-accent">
                    {i + 1}
                  </span>
                  {/* Scaled Academic Serif Font */}
                  <span className="font-serif text-[15px] leading-relaxed text-[#d1d5db] sm:text-[16px]">
                    {a}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </main>
  );
}