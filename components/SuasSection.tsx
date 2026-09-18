"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/suas1.jpeg",
  "/suas2.jpeg",
  "/suas3.jpeg",
];

export default function SuasSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      
      {/* Slideshow */}
      <div className="relative aspect-[4/4] w-full overflow-hidden rounded-2xl border border-border-soft bg-panel shadow-lg">
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            alt="SUAS IITM Team"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
        
        {/* Slideshow Indicators */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-[#0a0a0a]/60 px-3 py-1.5 backdrop-blur-md">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-4 bg-accent" : "w-1.5 bg-[#f2f4f6]/40 hover:bg-[#f2f4f6]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content & Bragging */}
      <div className="flex flex-col gap-6">
        
        {/* 👉 UPDATED HEADING AREA 👈 */}
        <div>
          <div className="mb-3 flex items-center gap-3 font-mono text-sm tracking-widest text-accent uppercase">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
            </span>
            IIT Madras · Founded Feb 2024
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h3 className="font-display text-3xl font-semibold text-[#f2f4f6] sm:text-4xl">
              SUAS IITM (Aerial Robotics)
            </h3>
            {/* The new, prominent website button! */}
            <a 
              href="https://www.suasiitm.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 font-mono text-sm tracking-wide text-accent transition-all hover:bg-accent hover:text-bg"
            >
              Website ↗
            </a>
          </div>
        </div>

        <p className="font-serif text-[15.5px] leading-relaxed text-[#d1d5db] sm:text-[16.5px]">
          In February 2024, I co-founded IIT Madras's first international aerial robotics team. We scaled from four founders to an internationally ranked autonomous aviation team in under a year, building full-stack UAVs designed to navigate, perceive, and deliver payloads in adversarial environments.
        </p>

        {/* 2026 CHAMPIONSHIP */}
        <div className="group relative overflow-hidden rounded-xl border border-border-soft bg-panel p-5 sm:p-6">
          <div className="absolute -mr-16 -mt-16 right-0 top-0 h-32 w-32 rounded-full bg-accent opacity-10 blur-2xl transition-opacity duration-700 group-hover:opacity-20"></div>
          
          <h4 className="mb-4 font-mono text-base font-semibold text-[#f2f4f6]">FALCON UAV (SUAS 2026)</h4>
          
          <p className="mb-6 font-serif text-[15px] leading-relaxed text-[#d1d5db] sm:text-[16px]">
            Migrated to a robust <strong className="font-sans font-medium text-[#f2f4f6]">ROS 2 architecture</strong> for the Storm Response mission in Tulsa, Oklahoma. Armed with proof-of-flight-qualified hardware and an aggressively optimized autonomy pipeline, we secured top global rankings and a cash prize.
          </p>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 border-t border-border-soft pt-5 font-mono text-sm">
            <div>
              <div className="mb-1 text-accent font-semibold">1st Globally</div>
              <div className="text-slate-500">Technical Design</div>
            </div>
            <div>
              <div className="mb-1 text-accent font-semibold">1st Globally</div>
              <div className="text-slate-500">Team Website</div>
            </div>
            <div>
              <div className="mb-1 text-[#f2f4f6]">$1,250 Prize</div>
              <div className="text-slate-500">Combined Award</div>
            </div>
            <div>
              <div className="mb-1 text-[#f2f4f6]">ROS 2 Stack</div>
              <div className="text-slate-500">Storm Response Mission</div>
            </div>
          </div>
        </div>

        {/* 2025 Implementation & Stats */}
        <div className="rounded-xl border border-border-soft bg-[#12161a] p-5 sm:p-6 opacity-90">
          <div className="mb-4">
             <h4 className="font-mono text-sm font-semibold text-ink-dim">SHADOW UAV (SUAS 2025)</h4>
          </div>
          
          <p className="mb-6 font-serif text-[14px] leading-relaxed text-ink-dim sm:text-[15px]">
            Engineered a folding carbon-fiber X-quadcopter running a <strong className="font-sans font-medium text-[#d1d5db]">ROS 1 autonomy stack</strong>. Integrated real-time aerial mapping, object detection, and a winch-based payload delivery mechanism. The architecture allowed the full system to be assembled from a transport case to flight-ready in under 2.5 minutes.
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-border-soft pt-5 font-mono text-[11px] sm:text-xs">
            <div><div className="mb-1 text-[#d1d5db]">8th Globally</div><div className="text-slate-500">Technical Design</div></div>
            <div><div className="mb-1 text-[#d1d5db]">23rd Overall</div><div className="text-slate-500">70+ Int'l Teams</div></div>
            <div><div className="mb-1 text-muted">29:33 Flight</div><div className="text-slate-500">Flawless, Zero Crashes</div></div>
            <div><div className="mb-1 text-muted">1st Attempt</div><div className="text-slate-500">Safety Clearance</div></div>
          </div>
        </div>

      </div>
    </div>
  );
}