"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPos(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true;
      handleMove(e.clientX);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [handleMove]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      handleMove(e.clientX);
    },
    [handleMove]
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <section className="bg-dark-bg py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2.5fr_1.2fr] gap-10 lg:gap-14 items-center">
          {/* Left Text */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow text-terracotta-light mb-4">Transformation</p>
            <h2 className="text-[1.8rem] lg:text-[2.2rem] leading-[1.18] font-semibold text-white mb-5">
              See What
              <br />
              <span className="serif-italic text-terracotta-light">Transformation</span>
              <br />
              Looks Like.
            </h2>
            <p className="text-white/45 text-[14px] leading-relaxed">
              Drag the slider to see the difference.
            </p>
          </motion.div>

          {/* Slider */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              ref={containerRef}
              className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              role="slider"
              aria-label="Before and after comparison"
              aria-valuenow={Math.round(sliderPos)}
              aria-valuemin={0}
              aria-valuemax={100}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") setSliderPos((p) => Math.max(p - 2, 5));
                if (e.key === "ArrowRight") setSliderPos((p) => Math.min(p + 2, 95));
              }}
            >
              {/* After (full) */}
              <img
                src="/images/after.png"
                alt="After renovation"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before (clipped via clip-path) */}
              <img
                src="/images/before.png"
                alt="Before renovation"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              />

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white/80 z-10"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <div className="flex gap-1">
                    <div className="w-[3px] h-4 bg-charcoal/50 rounded-full" />
                    <div className="w-[3px] h-4 bg-charcoal/50 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-5 left-5 bg-charcoal/70 backdrop-blur-sm text-white text-[11px] font-semibold tracking-[0.15em] uppercase px-4 py-2 rounded-full z-10">
                Before
              </div>
              <div className="absolute top-5 right-5 bg-white/80 backdrop-blur-sm text-charcoal text-[11px] font-semibold tracking-[0.15em] uppercase px-4 py-2 rounded-full z-10">
                After
              </div>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="order-3 text-center lg:text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white text-[20px] lg:text-[22px] font-semibold mb-2">
              Same Space.
            </h3>
            <p className="serif-italic text-terracotta-light text-[22px] lg:text-[26px]">
              A Completely Different Feel.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
