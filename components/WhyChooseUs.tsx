"use client";

import { motion } from "framer-motion";
import { ArrowRight, Palette, Gem, BadgeCheck, Users, Settings, Headphones } from "lucide-react";
import { siteData } from "@/lib/data";

const iconMap = [Palette, Gem, BadgeCheck, Users, Settings, Headphones];

export default function WhyChooseUs() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow text-terracotta mb-4">
              Why Choose RK Interiors
            </p>
            <h2 className="text-[2rem] lg:text-[2.8rem] leading-[1.12] font-semibold text-charcoal mb-6">
              Designed with intention.
              <br />
              Executed with{" "}
              <span className="serif-italic text-terracotta">precision.</span>
            </h2>
            <p className="text-muted text-[15px] leading-relaxed mb-10 max-w-[420px]">
              From the first sketch to the final handover, we manage the
              details that turn a design into a finished space.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2.5 border border-charcoal text-charcoal text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-charcoal hover:text-white transition-all duration-300 group"
            >
              Learn More About Us
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteData.benefits.map((benefit, i) => {
              const Icon = iconMap[i];
              return (
                <motion.div
                  key={benefit.title}
                  className="bg-white rounded-xl p-6 border border-warm-stone/40"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-ivory flex items-center justify-center mb-4">
                    <Icon size={18} className="text-terracotta" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-charcoal mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="text-[13px] text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
