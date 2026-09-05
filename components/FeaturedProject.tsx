"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteData } from "@/lib/data";

export default function FeaturedProject() {
  const project = siteData.featuredProject;

  return (
    <section className="bg-warm-stone/50 py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-14 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow text-terracotta mb-5">{project.label}</p>
            <h2 className="text-[2rem] lg:text-[2.8rem] leading-[1.12] font-semibold text-charcoal mb-6">
              {project.title}
              <br />
              in{" "}
              <span className="serif-italic text-terracotta">
                {project.location}
              </span>
            </h2>

            <div className="flex flex-wrap gap-3 mb-7">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] font-medium tracking-wider text-muted border border-warm-stone px-3.5 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-muted text-[15px] leading-relaxed mb-9 max-w-[460px]">
              {project.description}
            </p>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2.5 bg-charcoal text-white text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-charcoal-light transition-all duration-300 group"
            >
              View Full Project
              <ArrowRight
                size={16}
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
              {/* Main Image - larger */}
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.location}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Image - larger overlap */}
              <div className="absolute -bottom-8 -left-8 w-[48%] rounded-2xl overflow-hidden aspect-square shadow-xl hidden lg:block">
                <img
                  src={project.secondaryImages[0]}
                  alt={`${project.title} detail`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small Accent Image */}
              <div className="absolute -top-5 -right-5 w-[32%] rounded-xl overflow-hidden aspect-[3/2] shadow-lg hidden lg:block">
                <img
                  src={project.secondaryImages[1]}
                  alt={`${project.title} accent`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Fourth Image - bottom right */}
              <div className="absolute -bottom-6 -right-6 w-[35%] rounded-xl overflow-hidden aspect-[3/2] shadow-lg hidden lg:block border-4 border-white">
                <img
                  src="/images/featured-4.jpg"
                  alt={`${project.title} view`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
