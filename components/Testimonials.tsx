"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { siteData } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const testimonials = siteData.testimonials;

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <p className="eyebrow text-terracotta mb-0">Testimonials</p>
              <div className="h-px w-8 bg-terracotta/50" />
            </div>
            <h2 className="text-[2.6rem] lg:text-[3.9rem] tracking-[-0.045em] leading-[1.03] font-semibold text-charcoal">
              What Our Clients
              <br />
              <span className="serif-italic text-terracotta">Say About Us.</span>
            </h2>
          </div>
          <p className="text-muted text-[15px] lg:text-[16px] leading-[1.7] max-w-[320px]">
            Real stories. Real people. Real homes.
            <br />
            Trusted by hundreds of happy families across Patna and Bihar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="border border-warm-stone/40 rounded-lg p-6 lg:p-7 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Quote + Stars */}
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[40px] leading-none text-warm-stone/60 font-serif">&ldquo;</span>
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-terracotta text-terracotta"
                    />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-charcoal text-[15px] leading-[1.7] mb-6 flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-warm-stone/40 pt-5 mt-auto">
                <p className="text-charcoal text-[15px] font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-muted text-[13px] mt-1">
                  {testimonial.location} · {testimonial.projectType}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-10 lg:mt-12">
          {/* Google Rating */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="28" height="28" className="flex-shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-[22px] font-semibold text-charcoal">5.0</span>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={13} className="fill-terracotta text-terracotta" />
              ))}
            </div>
            <p className="text-[11px] tracking-[0.14em] uppercase text-charcoal/40 font-medium">
              Based on 345+ Google Reviews
            </p>
          </div>

          {/* Nav + Read More */}
          <div className="flex items-center gap-5">
            <div className="flex gap-2">
              <button
                onClick={() => setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1))}
                className="w-10 h-10 rounded-full border border-warm-stone/50 flex items-center justify-center text-charcoal/50 hover:text-terracotta hover:border-terracotta/40 transition-colors duration-300"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setCurrent((p) => (p === testimonials.length - 1 ? 0 : p + 1))}
                className="w-10 h-10 rounded-full border border-warm-stone/50 flex items-center justify-center text-charcoal/50 hover:text-terracotta hover:border-terracotta/40 transition-colors duration-300"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] uppercase text-charcoal/50 hover:text-terracotta transition-colors duration-300"
            >
              <div className="h-px w-8 bg-charcoal/20" />
              Read More Reviews
              <ChevronRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
