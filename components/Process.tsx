"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Process() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Subtle Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/process-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.04]"
        />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="eyebrow text-terracotta mb-4">Our Process</p>
          <h2 className="text-[2rem] lg:text-[2.8rem] leading-[1.12] font-semibold text-charcoal">
            From Idea to Move-In,
            <br />
            <span className="serif-italic text-terracotta">We Handle It All.</span>
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Horizontal line */}
          <div className="absolute top-[32px] left-[70px] right-[70px] h-px bg-warm-stone" />

          <div className="grid grid-cols-6 gap-6">
            {siteData.processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-ivory border-2 border-warm-stone flex items-center justify-center mb-6">
                  <span className="text-[13px] font-semibold text-terracotta tracking-wide">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-[15px] font-semibold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed max-w-[150px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-[31px] top-0 bottom-0 w-px bg-warm-stone" />
          <div className="space-y-10">
            {siteData.processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-ivory border-2 border-warm-stone flex items-center justify-center">
                  <span className="text-[13px] font-semibold text-terracotta">
                    {step.number}
                  </span>
                </div>
                <div className="pt-3">
                  <h3 className="text-[15px] font-semibold text-charcoal mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
