"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteData } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-dark-bg">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#18120F]/72 via-[#18120F]/88 to-[#18120F]/96" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow text-terracotta-light mb-6">Let&apos;s Talk</p>
          <h2 className="text-[2.8rem] sm:text-[3.5rem] lg:text-[4.7rem] tracking-[-0.05em] leading-[1.01] font-semibold text-white mb-7">
            Your{" "}
            <span className="serif-italic text-terracotta-light">dream</span>{" "}
            home
            <br />
            starts with a conversation.
          </h2>
          <p className="text-white/58 text-[17px] leading-relaxed mb-10 max-w-[440px] mx-auto">
            Tell us about your space. We&apos;ll take it from there.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-terracotta text-white text-[15px] font-medium px-10 py-5 rounded-full hover:bg-terracotta/90 transition-all duration-300 group"
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
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[15px] font-medium px-9 py-4.5 rounded-full hover:bg-white/20 transition-all duration-300"
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
