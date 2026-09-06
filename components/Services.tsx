"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteData } from "@/lib/data";

function ServiceCard({
  service,
  index,
  className = "",
}: {
  service: (typeof siteData.services)[number];
  index: number;
  className?: string;
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.div
      className={`group relative overflow-hidden cursor-pointer bg-charcoal ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-white/50 text-[11px] font-medium tracking-wide">{num}</span>
            <div className="h-px w-4 bg-white/30" />
          </div>
          <h3 className="text-[11px] lg:text-[12px] font-semibold tracking-[0.1em] uppercase text-white mb-1">
            {service.title}
          </h3>
          <p className="text-[11.5px] text-white/70 leading-snug mb-2">
            {service.description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-terracotta text-[11px] font-medium tracking-wide group-hover:gap-2.5 transition-all duration-300">
            Explore <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [featured, ...rest] = siteData.services;

  return (
    <section id="services" className="bg-white py-14 lg:py-18">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-[620px]">
            <div className="flex items-center gap-4 mb-5">
              <p className="eyebrow text-terracotta mb-0">Our Services</p>
              <div className="h-px w-12 bg-terracotta/40" />
            </div>
            <h2 className="text-[2.4rem] lg:text-[3.6rem] tracking-[-0.04em] leading-[1.05] font-semibold text-charcoal">
              Interior Design Solutions
              <br />
              for <span className="serif-italic text-terracotta">Every Space.</span>
            </h2>
          </div>
          <div className="max-w-[400px] lg:max-w-[420px]">
            <p className="text-muted text-[15px] lg:text-[16px] leading-[1.7] mb-5">
              From complete home interiors to modular kitchens, offices and
              renovations, we design and execute spaces that are functional,
              beautiful and built around your life.
            </p>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2.5 text-terracotta text-[14px] font-medium hover:gap-3.5 transition-all duration-300"
            >
              View All Services <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-4">
          {/* Left: Featured large card */}
          <ServiceCard service={featured} index={0} />

          {/* Right: 2x2 grid of smaller cards */}
          <div className="grid grid-cols-2 gap-4">
            {rest.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i + 1} className="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
