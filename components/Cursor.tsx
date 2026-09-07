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
      <div className="diamond-cursor relative -translate-x-1/2 -translate-y-1/2">
        {/* Outer diamond */}
        <span className="diamond-outer absolute top-1/2 left-1/2 w-7 h-7 -translate-x-1/2 -translate-y-1/2 border-[1.5px] border-terracotta/50 rotate-45 transition-all duration-300 ease-out" />
        {/* Inner diamond */}
        <span className="diamond-inner absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-terracotta/80 rotate-45 transition-all duration-250 ease-out" />
      </div>

      <style jsx>{`
        .diamond-cursor {
          width: 28px;
          height: 28px;
        }
        .cursor-hover .diamond-outer {
          width: 48px !important;
          height: 48px !important;
          border-color: rgba(185, 98, 63, 0.9) !important;
          animation: diamond-spin 2s linear infinite;
        }
        .cursor-hover .diamond-inner {
          width: 8px !important;
          height: 8px !important;
          background: white !important;
          animation: diamond-spin-reverse 1.5s linear infinite;
        }
        @keyframes diamond-spin {
          from { transform: translate(-50%, -50%) rotate(45deg); }
          to { transform: translate(-50%, -50%) rotate(405deg); }
        }
        @keyframes diamond-spin-reverse {
          from { transform: translate(-50%, -50%) rotate(45deg); }
          to { transform: translate(-50%, -50%) rotate(-315deg); }
        }
      `}</style>
    </div>
  );
}
