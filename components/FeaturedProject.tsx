"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Home, Sofa, Gem } from "lucide-react";
import { siteData } from "@/lib/data";

const features = [
  { icon: Home, label: "Thoughtful\nSpace Planning" },
  { icon: Sofa, label: "Warm & Modern\nAesthetics" },
  { icon: Gem, label: "Premium\nMaterial Selection" },
];

export default function FeaturedProject() {
  const project = siteData.featuredProject;

  return (
    <section className="bg-ivory overflow-hidden py-10 lg:py-14">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.5fr] gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <p className="eyebrow text-terracotta mb-0">{project.label}</p>
              <div className="h-px w-12 bg-terracotta/40" />
            </div>
            <h2 className="text-[2.2rem] lg:text-[3.2rem] tracking-[-0.045em] leading-[1.04] font-semibold text-charcoal mb-4">
              {project.title}{" "}
              <span className="serif-italic text-terracotta">
                {project.location}
              </span>
            </h2>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-5">
              {project.tags.map((tag, i) => (
                <span key={tag} className="flex items-center gap-2">
                  <span className="text-[10px] font-medium tracking-[0.14em] uppercase text-muted">
                    {tag}
                  </span>
                  {i < project.tags.length - 1 && (
                    <span className="text-warm-stone/60 text-[10px]">|</span>
                  )}
                </span>
              ))}
            </div>

            <p className="text-muted text-[14px] lg:text-[15px] leading-[1.65] mb-7 max-w-[420px]">
              {project.description}
            </p>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2.5 bg-terracotta text-white text-[13px] font-medium px-6 py-3 rounded-full hover:bg-terracotta/90 transition-all duration-300 group"
            >
              View Full Project
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Right Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.location}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Image */}
              <div className="absolute -bottom-4 -left-4 w-[35%] overflow-hidden aspect-square shadow-[0_16px_40px_rgba(24,18,15,0.18)] hidden lg:block">
                <img
                  src={project.secondaryImages[0]}
                  alt={`${project.title} detail`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Accent Image with text overlay */}
              <div className="absolute -top-3 -right-3 w-[25%] overflow-hidden aspect-[3/2] shadow-[0_10px_30px_rgba(24,18,15,0.14)] hidden lg:flex flex-col">
                <img
                  src={project.secondaryImages[1]}
                  alt={`${project.title} accent`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-ivory/85 flex items-center justify-center p-3">
                  <p className="text-charcoal text-[11px] font-semibold tracking-[0.15em] uppercase text-center leading-[1.6]">
                    Spaces<br />That Feel<br />Like Home
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-stone/50">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Features */}
          <div className="flex items-center gap-6 lg:gap-8">
            {features.map((feat) => (
              <div key={feat.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-warm-stone/60 flex items-center justify-center shrink-0">
                  <feat.icon size={16} className="text-charcoal" />
                </div>
                <span className="text-[11px] lg:text-[12px] text-muted leading-[1.4] whitespace-pre-line">
                  {feat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button className="w-9 h-9 rounded-full border border-warm-stone/60 flex items-center justify-center text-charcoal hover:bg-warm-stone/40 transition-colors">
              <ArrowLeft size={16} />
            </button>
            <span className="text-[13px] text-charcoal font-medium tracking-wide">
              01 <span className="text-muted">/ 04</span>
            </span>
            <button className="w-9 h-9 rounded-full border border-warm-stone/60 flex items-center justify-center text-charcoal hover:bg-warm-stone/40 transition-colors">
              <ArrowRight size={16} />
            </button>
            <div className="w-px h-5 bg-warm-stone/50 mx-1" />
            <a
              href="#portfolio"
              className="flex items-center gap-2 text-[12px] text-muted hover:text-charcoal transition-colors"
            >
              <span className="uppercase tracking-[0.1em] font-medium">Next</span>
              <span className="text-charcoal font-medium">Project in Patna</span>
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
