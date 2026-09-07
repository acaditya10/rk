"use client";

import { useEffect, useRef, useCallback } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const hovered = useRef(false);
  const visible = useRef(false);

  const updateVisibility = useCallback((show: boolean) => {
    if (!dotRef.current) return;
    if (show && !visible.current) {
      visible.current = true;
      dotRef.current.style.opacity = "1";
    } else if (!show && visible.current) {
      visible.current = false;
      dotRef.current.style.opacity = "0";
    }
  }, []);

  useEffect(() => {
    const el = dotRef.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      updateVisibility(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover], input, textarea, select")) {
        hovered.current = true;
        el.classList.add("cursor-hover");
      }
    };

    const out = () => {
      hovered.current = false;
      el.classList.remove("cursor-hover");
    };

    const leave = () => updateVisibility(false);
    const enter = () => updateVisibility(true);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [updateVisibility]);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block opacity-0"
      style={{
        width: 0,
        height: 0,
        willChange: "transform",
        transition: "opacity 0.2s ease",
      }}
    >
      <div className="pinpoint-cursor relative -translate-x-1/2 -translate-y-1/2">
        {/* Center dot */}
        <span className="center-dot absolute top-1/2 left-1/2 w-[5px] h-[5px] -translate-x-1/2 -translate-y-1/2 bg-terracotta rounded-full transition-all duration-200 ease-out" />
        {/* Ring 1 */}
        <span className="ring ring-1 absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 border border-terracotta/60 rounded-full transition-all duration-300 ease-out" />
        {/* Ring 2 */}
        <span className="ring ring-2 absolute top-1/2 left-1/2 w-7 h-7 -translate-x-1/2 -translate-y-1/2 border border-terracotta/30 rounded-full transition-all duration-400 ease-out" />
      </div>

      <style jsx>{`
        .pinpoint-cursor {
          width: 28px;
          height: 28px;
          transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .cursor-hover .center-dot {
          width: 4px !important;
          height: 4px !important;
          background: white !important;
        }
        .cursor-hover .ring-1 {
          width: 36px !important;
          height: 36px !important;
          border-color: rgba(185, 98, 63, 0.9) !important;
        }
        .cursor-hover .ring-2 {
          width: 52px !important;
          height: 52px !important;
          border-color: rgba(185, 98, 63, 0.4) !important;
        }
        /* Ripple pulse on hover */
        @keyframes ripple {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
        }
        .cursor-hover .ring-2 {
          animation: ripple 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
