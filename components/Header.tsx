"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { siteData } from "@/lib/data";

const navLinks = siteData.quickLinks;

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y < 10) {
        setHidden(false);
      } else if (y > lastScrollY + 5) {
        setHidden(true);
      } else if (y < lastScrollY - 5) {
        setHidden(false);
      }
      setLastScrollY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

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
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${mobileOpen ? "z-[60]" : "z-50"} ${
          scrolled
            ? "bg-ivory shadow-[0_1px_12px_rgba(24,18,15,0.06)]"
            : "bg-ivory"
        }`}
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-[52px] lg:h-[56px]">
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/images/logo.png"
                alt="RK Interiors"
                className="h-7 lg:h-8 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[12.5px] font-medium tracking-[0.06em] text-charcoal/80 transition-colors duration-300 hover:text-terracotta"
                >
                  {link}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 bg-terracotta text-white text-[12px] font-semibold tracking-wide px-5 py-2 rounded-full hover:bg-terracotta/90 transition-all duration-300"
              >
                Book a Consultation
                <span className="text-xs">→</span>
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-1.5 text-charcoal z-[60] relative"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Curtain Sweep Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Diagonal curtain panel */}
            <motion.div
              className="fixed inset-0 z-50 lg:hidden"
              initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              {/* Background with texture */}
              <div className="absolute inset-0 bg-[#171A18]">
                {/* Subtle diagonal lines texture */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      -45deg,
                      transparent,
                      transparent 20px,
                      rgba(185, 98, 63, 0.5) 20px,
                      rgba(185, 98, 63, 0.5) 21px
                    )`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center px-10 sm:px-14">
                {/* Navigation links */}
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{
                        delay: 0.25 + i * 0.07,
                        duration: 0.4,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                    >
                      <a
                        href={`#${link.toLowerCase()}`}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center gap-4 py-3"
                      >
                        <span className="text-white/20 text-[11px] font-mono tabular-nums w-5">
                          0{i + 1}
                        </span>
                        <span className="text-white/85 text-[1.6rem] sm:text-[1.9rem] font-light tracking-[-0.01em] transition-colors duration-300 group-hover:text-terracotta-light">
                          {link}
                        </span>
                        <div className="h-px flex-1 bg-white/8 group-hover:bg-terracotta-light/30 transition-colors duration-300" />
                      </a>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.25 + navLinks.length * 0.07, duration: 0.4 }}
                  className="mt-8"
                >
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center gap-3 bg-terracotta text-white text-[13px] font-medium tracking-wide px-7 py-3.5 rounded-full hover:bg-terracotta-light transition-colors duration-300"
                  >
                    Book a Consultation
                    <span>→</span>
                  </a>
                </motion.div>

                {/* Bottom info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="absolute bottom-8 left-10 sm:left-14 right-10 flex items-center justify-between"
                >
                  <p className="text-white/25 text-[11px] tracking-wide">
                    {siteData.brand.phone}
                  </p>
                  <p className="text-white/25 text-[11px] tracking-wide">
                    Patna, Bihar
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
