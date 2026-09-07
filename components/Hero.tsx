"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[78vh] min-h-[600px] max-h-[860px] pt-[88px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
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
        {/* Warm cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#18120F]/92 via-[#18120F]/52 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18120F]/68 via-transparent to-[#18120F]/8" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-center">
        <div className="max-w-[800px]">
          <motion.div
            className="flex items-center gap-4 mb-6 lg:mb-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="eyebrow mb-0" style={{ color: "#fff" }}>
              Interior Designers in Patna
            </p>
            <div className="h-px w-16 bg-white" />
          </motion.div>

          <motion.h1
            className="text-[3.15rem] sm:text-[4rem] lg:text-[4.45rem] xl:text-[4.85rem] leading-[0.98] tracking-[-0.045em] font-semibold text-white mb-8 lg:mb-10"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Beautiful Spaces.
            <br />
            <span className="serif-italic text-terracotta-light">Happier Lives.</span>
          </motion.h1>

          <motion.p
            className="text-white/72 text-[16px] lg:text-[18px] leading-[1.65] mb-9 max-w-[540px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            Premium residential &amp; commercial interiors, designed and
            executed around the way you live.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 mb-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-terracotta text-white text-[14px] font-medium px-8 py-4 rounded-full hover:bg-terracotta/90 transition-all duration-300 group"
            >
              Book a Free Consultation
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-[14px] font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Explore Projects
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
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
