"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Process() {
  return (
    <section className="bg-white py-14 lg:py-18">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-[620px]">
            <div className="flex items-center gap-4 mb-5">
              <p className="eyebrow text-terracotta mb-0">Our Process</p>
              <div className="h-px w-12 bg-terracotta/40" />
            </div>
            <h2 className="text-[2.4rem] lg:text-[3.6rem] tracking-[-0.04em] leading-[1.05] font-semibold text-charcoal">
              From Idea to Move-In,
              <br />
              <span className="serif-italic text-terracotta">We Handle It All.</span>
            </h2>
          </div>
          <div className="max-w-[400px] lg:max-w-[420px] lg:pt-8">
            <p className="text-muted text-[15px] lg:text-[16px] leading-[1.7]">
              A streamlined six-step journey from your first consultation to the final handover.
              We manage every detail so you can focus on the excitement of your new space.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {siteData.processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              className="group relative overflow-hidden bg-charcoal cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2">
                  <span className="text-white/60 text-[10px] sm:text-[12px] font-medium tracking-wide">{step.number}</span>
                  <div className="h-px w-3 sm:w-4 bg-white/30" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                  <h3 className="text-[13px] sm:text-[16px] font-semibold text-white mb-0.5 sm:mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-[13px] text-white/70 leading-relaxed hidden sm:block">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
