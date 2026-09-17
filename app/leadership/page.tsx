import SuasSection from "@/components/SuasSection";
import SectionHeading from "@/components/SectionHeading";

export default function LeadershipPage() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-wide">
        <SectionHeading title="Leadership Experience" note="Founding SUAS IITM" />
        <SuasSection />
      </div>
    </main>
  );
}