"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteData } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow text-terracotta-light mb-5">Let&apos;s Talk</p>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.1] font-semibold text-white mb-5">
            Your{" "}
            <span className="serif-italic text-terracotta-light">dream</span>{" "}
            home
            <br />
            starts with a conversation.
          </h2>
          <p className="text-white/55 text-[16px] leading-relaxed mb-12 max-w-[420px] mx-auto">
            Tell us about your space. We&apos;ll take it from there.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
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
              href={`https://wa.me/${siteData.brand.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
