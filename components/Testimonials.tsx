"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { siteData } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
          <div>
            <p className="eyebrow text-terracotta mb-4">Testimonials</p>
            <h2 className="text-[2rem] lg:text-[2.8rem] leading-[1.12] font-semibold text-charcoal">
              What Our Clients
              <br />
              <span className="serif-italic text-terracotta">Say About Us.</span>
            </h2>
          </div>
          <p className="text-muted text-[15px]">
            Real stories. Real people. Real homes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteData.testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="relative rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Background Image */}
              <img
                src={testimonial.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/75" />

              {/* Content */}
              <div className="relative p-8 lg:p-9">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={15}
                      className="fill-terracotta-light text-terracotta-light"
                    />
                  ))}
                </div>

                <p className="text-white text-[15px] leading-relaxed mb-7">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="border-t border-white/15 pt-5">
                  <p className="text-white text-[15px] font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-white/55 text-[13px] mt-1">
                    {testimonial.location} · {testimonial.projectType}
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
