"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[88vh] min-h-[680px] max-h-[960px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            src="/images/hero.jpg"
            alt="Premium interior design living room by RK Interiors"
            width={1600}
            height={900}
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
        </motion.div>
        {/* Gradient Overlay - stronger left for text, lighter right */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/45 to-charcoal/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-center">
        <div className="max-w-[700px]">
          <motion.p
            className="eyebrow text-white/60 mb-5 lg:mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Interior Designers in Patna
          </motion.p>

          <motion.h1
            className="text-[2.8rem] sm:text-[3.8rem] lg:text-[4.8rem] xl:text-[5.2rem] leading-[1.06] font-semibold text-white mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Beautiful Spaces.
            <br />
            <span className="serif-italic text-terracotta-light">Happier Lives.</span>
          </motion.h1>

          <motion.p
            className="text-white/70 text-[16px] lg:text-[18px] leading-relaxed mb-10 max-w-[500px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Premium residential &amp; commercial interiors, designed and
            executed around the way you live.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-terracotta text-white text-[15px] font-medium px-8 py-4 rounded-full hover:bg-terracotta/90 transition-all duration-300 group"
            >
              Book a Free Consultation
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Explore Projects
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  className="fill-terracotta-light text-terracotta-light"
                />
              ))}
            </div>
            <span className="text-white/55 text-[13px] tracking-wide">
              Trusted by homeowners across Patna
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
