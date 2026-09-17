import Link from "next/link";
import HeroSim from "@/components/HeroSim";
import ResearchMap from "@/components/ResearchMap";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative border-b border-border-soft px-6 pb-20 pt-44 sm:pt-48">
        <div className="absolute left-6 right-6 top-24 flex items-start justify-between sm:left-10 sm:right-10 xl:left-14 xl:right-14">
          <img src="/Charukhesh_Portfolio/iitmlogo.png" alt="IIT Madras" className="animate-rise h-16 w-auto opacity-100 sm:h-40" style={{ animationDelay: "0.0s" }}/>
          <img src="/Charukhesh_Portfolio/photo.jpeg" alt="Charukhesh B R" className="animate-rise h-20 w-20 rounded-full border-2 border-border-soft object-cover shadow-lg sm:h-40 sm:w-40" style={{ animationDelay: "0.05s" }}/>
        </div>

        <div className="mx-auto max-w-wide">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="animate-rise mb-4 font-mono text-[13px] tracking-widest text-accent sm:text-sm" style={{ animationDelay: "0.1s" }}>
                ROBOTICS · MACHINE LEARNING · CONTROL · INTELLIGENT SYSTEMS
              </div>
              
              <h1 className="animate-rise mb-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-[#f2f4f6] sm:text-6xl" style={{ animationDelay: "0.15s" }}>
                CHARUKHESH B R
              </h1>
              
              <div className="animate-rise mb-6 font-mono text-[15px] text-ink-dim sm:text-base" style={{ animationDelay: "0.2s" }}>
                AI / ML RESEARCH ENGINEER · IIT MADRAS
              </div>
              
              {/* ACADEMIC SERIF FONT APPLIED HERE */}
              <p className="animate-rise mb-10 max-w-[60ch] font-serif text-[15px] leading-relaxed text-[#d1d5db] sm:text-[16px]" style={{ animationDelay: "0.25s" }}>
                {profile.statement}
              </p>
              
              <div className="animate-rise flex flex-wrap items-center gap-3 xl:flex-nowrap" style={{ animationDelay: "0.3s" }}>
                <Link href="/projects" className="whitespace-nowrap rounded-full border border-accent bg-accent px-4 py-2.5 font-mono text-[11px] tracking-wide text-bg transition-colors hover:bg-transparent hover:text-accent sm:px-5 sm:text-xs">
                  VIEW PROJECTS →
                </Link>
                <a href="mailto:ae22b028@smail.iitm.ac.in" className="whitespace-nowrap rounded-full border border-border px-4 py-2.5 font-mono text-[11px] tracking-wide text-[#f2f4f6] hover:border-accent hover:text-accent sm:px-5 sm:text-xs">EMAIL</a>
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap rounded-full border border-border px-4 py-2.5 font-mono text-[11px] tracking-wide text-ink-dim hover:border-accent hover:text-accent sm:px-5 sm:text-xs">GITHUB</a>
                <a href={profile.links.researchGate} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap rounded-full border border-border px-4 py-2.5 font-mono text-[11px] tracking-wide text-ink-dim hover:border-accent hover:text-accent sm:px-5 sm:text-xs">RESEARCH GATE</a>
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap rounded-full border border-border px-4 py-2.5 font-mono text-[11px] tracking-wide text-ink-dim hover:border-accent hover:text-accent sm:px-5 sm:text-xs">LINKEDIN</a>
              </div>
            </div>

            <div className="animate-rise relative" style={{ animationDelay: "0.35s" }}>
              <div className="flex w-full items-center justify-center overflow-hidden rounded-2xl border border-border-soft bg-panel p-4">
                <HeroSim />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH MAP */}
      <section className="px-6 py-20 pb-32">
        <div className="mx-auto max-w-wide">
          <SectionHeading title="Research map" note="hover to explore" />
          <p className="mb-10 max-w-10xl font-serif text-[15px] leading-relaxed text-[#d1d5db] sm:text-[16px]">
            Work spans learned policies for robotic manipulation, language-grounded planning over structured scene representations, and stochastic control / estimation for physical and financial systems operating under uncertainty.
          </p>
          <ResearchMap />
        </div>
      </section>
    </main>
  );
}