"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteData } from "@/lib/data";

export default function WhyChooseUs() {
  const topRow = siteData.benefits.slice(0, 3);
  const bottomRow = siteData.benefits.slice(3, 6);

  return (
    <section className="bg-ivory py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="eyebrow text-muted mb-0">Why Choose RK Interiors</span>
              <div className="h-px w-10 bg-terracotta/40" />
            </div>
            <h2 className="text-[2.6rem] lg:text-[3.6rem] tracking-[-0.045em] leading-[1.0] font-semibold text-charcoal mb-6">
              Designed with
              <br />
              intention.
              <br />
              Executed with{" "}
              <span className="serif-italic text-terracotta">precision.</span>
            </h2>
            <p className="text-muted text-[15px] leading-[1.6] mb-6 max-w-[400px]">
              From the first sketch to the final handover, we manage every
              detail that turns a design into a finished space.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-terracotta text-[14px] font-medium border-b border-terracotta/40 pb-1 hover:border-terracotta transition-colors duration-300 group"
            >
              Learn More About Us
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Right Side — Benefits Grid */}
          <div className="lg:pt-[30px]">
            {/* Top Row */}
            <div className="grid grid-cols-3 gap-x-6 gap-y-8">
              {topRow.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-terracotta text-[26px] font-medium leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px w-12 bg-terracotta/30" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-charcoal mb-1.5 leading-snug h-[40px]">
                    {benefit.title}
                  </h3>
                  <p className="text-[13.5px] text-muted leading-[1.5] mb-3 h-[40px] line-clamp-2">
                    {benefit.description}
                  </p>
                  <a
                    href="#about"
                    className="inline-flex items-center gap-1.5 text-terracotta text-[12px] font-medium hover:gap-2.5 transition-all duration-300 mt-auto"
                  >
                    Learn more <ArrowRight size={11} />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-warm-stone/50" />

            {/* Bottom Row */}
            <div className="grid grid-cols-3 gap-x-6 gap-y-8">
              {bottomRow.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (i + 3) * 0.07 }}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-terracotta text-[26px] font-medium leading-none">
                      {String(i + 4).padStart(2, "0")}
                    </span>
                    <div className="h-px w-12 bg-terracotta/30" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-charcoal mb-1.5 leading-snug h-[40px]">
                    {benefit.title}
                  </h3>
                  <p className="text-[13.5px] text-muted leading-[1.5] mb-3 h-[40px] line-clamp-2">
                    {benefit.description}
                  </p>
                  <a
                    href="#about"
                    className="inline-flex items-center gap-1.5 text-terracotta text-[12px] font-medium hover:gap-2.5 transition-all duration-300 mt-auto"
                  >
                    Learn more <ArrowRight size={11} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
