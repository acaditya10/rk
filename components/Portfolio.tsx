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

  const filtered = showAll ? allFiltered : allFiltered.slice(0, 6);

  return (
    <section id="projects" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <p className="eyebrow text-terracotta mb-4">Our Work</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-[2rem] lg:text-[2.8rem] leading-[1.12] font-semibold text-charcoal">
              Real Homes.
              <br />
              <span className="serif-italic text-terracotta">Real Results.</span>
            </h2>
            <p className="text-muted text-[15px] max-w-[360px]">
              See how RK Interiors transforms spaces across Patna.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2.5 mb-12 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {siteData.portfolioFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => { setActiveFilter(filter); setShowAll(false); }}
              className={`text-[13px] font-medium px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-charcoal text-white"
                  : "bg-ivory text-muted hover:text-charcoal border border-warm-stone/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white text-[17px] font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-[13px]">
                    {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        {!showAll && allFiltered.length > 6 && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2.5 text-charcoal text-[15px] font-medium border border-warm-stone px-8 py-3.5 rounded-full hover:bg-charcoal hover:text-white transition-all duration-300 group"
            >
              View All Projects
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
