"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteData } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-[580px]">
            <p className="eyebrow text-terracotta mb-4">Our Services</p>
            <h2 className="text-[2rem] lg:text-[2.8rem] leading-[1.12] font-semibold text-charcoal">
              Interior Design Solutions
              <br />
              for <span className="serif-italic text-terracotta">Every Space.</span>
            </h2>
          </div>
          <div className="max-w-[420px] lg:max-w-[440px]">
            <p className="text-muted text-[15px] leading-relaxed mb-5">
              From complete home interiors to modular kitchens, offices and
              renovations, we design and execute spaces that are functional,
              beautiful and built around your life.
            </p>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-terracotta text-[15px] font-medium hover:gap-3 transition-all duration-300"
            >
              View All Services <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {siteData.services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <div className="relative aspect-[4/3.2] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5 pb-6">
                <h3 className="text-[15px] font-semibold text-charcoal mb-1.5">
                  {service.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="w-9 h-9 rounded-full border border-warm-stone flex items-center justify-center group-hover:bg-terracotta group-hover:border-terracotta transition-all duration-300">
                  <ArrowRight
                    size={14}
                    className="text-muted group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
