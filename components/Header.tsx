"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteData } from "@/lib/data";

const navLinks = siteData.quickLinks;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[68px] lg:h-[78px]">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="RK Interiors"
                className="h-9 lg:h-10 w-auto"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-9">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`text-[13px] font-medium tracking-wide transition-colors duration-300 hover:text-terracotta ${
                    scrolled ? "text-charcoal" : "text-white/85"
                  }`}
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-terracotta text-white text-[13px] font-medium px-6 py-3 rounded-full hover:bg-terracotta/90 transition-all duration-300"
              >
                Book a Consultation
                <span className="text-sm">→</span>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors duration-500 ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="text-white text-2xl font-light tracking-wide hover:text-terracotta transition-colors"
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                className="mt-4 bg-terracotta text-white text-[15px] font-medium px-8 py-3.5 rounded-full"
              >
                Book a Consultation →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
