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
    <section className="bg-dark-bg py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.58fr_1.9fr] gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <motion.div
            className="order-2 lg:order-1 pb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow text-terracotta-light mb-5">Transformation</p>
            <h2 className="text-[2.5rem] lg:text-[3.7rem] tracking-[-0.04em] leading-[1.02] font-semibold text-white mb-6">
              See What
              <br />
              <span className="serif-italic text-terracotta-light">Transformation</span>
              <br />
              Looks Like.
            </h2>
            <p className="text-white/55 text-[16px] leading-relaxed max-w-[220px]">
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
              className="relative w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden cursor-ew-resize select-none shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
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

              {/* Before (clipped) */}
              <img
                src="/images/before.png"
                alt="Before renovation"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              />

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white z-10"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-ivory flex items-center justify-center shadow-xl">
                  <div className="flex gap-2">
                    <span className="block w-px h-6 bg-charcoal/70" />
                    <span className="block w-px h-6 bg-charcoal/70" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-6 left-6 bg-charcoal/80 text-white text-[11px] font-semibold tracking-[0.18em] uppercase px-4 py-2 z-10">
                Before
              </div>
              <div className="absolute top-6 right-6 bg-ivory/90 text-charcoal text-[11px] font-semibold tracking-[0.18em] uppercase px-4 py-2 z-10">
                After
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
