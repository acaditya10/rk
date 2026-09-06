"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { siteData } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-12">
          <div>
            <p className="eyebrow text-terracotta mb-5">Testimonials</p>
            <h2 className="text-[2.6rem] lg:text-[3.9rem] tracking-[-0.045em] leading-[1.03] font-semibold text-charcoal">
              What Our Clients
              <br />
              <span className="serif-italic text-terracotta">Say About Us.</span>
            </h2>
          </div>
          <p className="text-muted text-[16px]">
            Real stories. Real people. Real homes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {siteData.testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="border-t border-charcoal pt-7 lg:pt-8 min-h-[280px] flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-terracotta text-terracotta"
                  />
                ))}
              </div>

              <p className="text-charcoal text-[18px] leading-[1.65] tracking-[-0.012em] mb-9 flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="pt-5 border-t border-warm-stone/60">
                <p className="text-charcoal text-[16px] font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-muted text-[14px] mt-1.5">
                  {testimonial.location} · {testimonial.projectType}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
