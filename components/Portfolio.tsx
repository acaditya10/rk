"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteData } from "@/lib/data";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const allFiltered =
    activeFilter === "All"
      ? siteData.projects
      : siteData.projects.filter((p) => p.category === activeFilter);

  const capPerCategory = (list: typeof siteData.projects) => {
    const counts: Record<string, number> = {};
    return list.filter((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
      return counts[p.category] <= 5;
    });
  };

  const capped = capPerCategory(allFiltered);

  const filtered = showAll ? capped : capped.slice(0, 5);

  return (
    <section id="projects" className="bg-white py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-9 lg:mb-10">
          <p className="eyebrow text-terracotta mb-5">Our Work</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-[2.7rem] lg:text-[3.4rem] tracking-[-0.045em] leading-[1.02] font-semibold text-charcoal">
              Real Homes. <span className="serif-italic text-terracotta">Real Results.</span>
            </h2>
            <p className="text-muted text-[16px] lg:text-[17px] leading-relaxed max-w-[360px]">
              See how RK Interiors transforms spaces across Patna.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-7 lg:gap-9 items-baseline mb-9 lg:mb-10 overflow-x-auto border-b border-warm-stone/60 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {siteData.portfolioFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => { setActiveFilter(filter); setShowAll(false); }}
              className={`relative text-[12px] font-medium tracking-[0.12em] uppercase pb-4 whitespace-nowrap transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-px after:bg-terracotta after:transition-transform after:duration-300 ${
                activeFilter === filter
                  ? "text-terracotta after:right-0 after:scale-x-100"
                  : "text-muted hover:text-charcoal after:right-0 after:scale-x-0"
              }`}
            >
              {filter}
            </button>
          ))}
          {capped.length > 5 && (
            <button
              onClick={() => setShowAll((v) => !v)}
              className="relative ml-auto text-[12px] font-medium tracking-[0.12em] uppercase pb-4 whitespace-nowrap text-charcoal hover:text-terracotta transition-colors duration-300 inline-flex items-center gap-2"
            >
              {showAll ? "View Less" : "View All Projects"}
              <ArrowRight size={13} className={showAll ? "rotate-90 transition-transform duration-300" : "transition-transform duration-300"} />
            </button>
          )}
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 gap-4 lg:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const gridClass = [
                "lg:col-span-6 lg:row-span-2 aspect-[4/3] lg:aspect-auto lg:min-h-[500px]",
                "lg:col-span-3 aspect-[4/3] lg:aspect-auto lg:min-h-[240px]",
                "lg:col-span-3 aspect-[4/3] lg:aspect-auto lg:min-h-[240px]",
                "lg:col-span-3 aspect-[4/3] lg:aspect-auto lg:min-h-[240px]",
                "lg:col-span-3 aspect-[4/3] lg:aspect-auto lg:min-h-[240px]",
                "lg:col-span-6 aspect-[4/3] lg:aspect-auto lg:min-h-[240px]",
              ][i] || "lg:col-span-4 aspect-[4/3]";
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative overflow-hidden cursor-pointer bg-charcoal ${gridClass}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/5 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/65 text-[11px] font-medium tracking-[0.14em] uppercase mb-2">
                      {project.location} · {project.category}
                    </p>
                    <h3 className="text-white text-[20px] lg:text-[22px] font-semibold tracking-[-0.02em]">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
