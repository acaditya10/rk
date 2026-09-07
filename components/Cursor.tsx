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
      {/* Corner brackets cursor */}
      <div className="cursor-brackets relative w-[32px] h-[32px] -translate-x-1/2 -translate-y-1/2">
        {/* Top-left */}
        <span className="absolute top-0 left-0 w-2.5 h-2.5 border-l-[1.5px] border-t-[1.5px] border-terracotta/80 rounded-tl-[1px] transition-all duration-200 ease-out" />
        {/* Top-right */}
        <span className="absolute top-0 right-0 w-2.5 h-2.5 border-r-[1.5px] border-t-[1.5px] border-terracotta/80 rounded-tr-[1px] transition-all duration-200 ease-out" />
        {/* Bottom-left */}
        <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-l-[1.5px] border-b-[1.5px] border-terracotta/80 rounded-bl-[1px] transition-all duration-200 ease-out" />
        {/* Bottom-right */}
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-r-[1.5px] border-b-[1.5px] border-terracotta/80 rounded-br-[1px] transition-all duration-200 ease-out" />
        {/* Center dot */}
        <span className="absolute top-1/2 left-1/2 w-[3px] h-[3px] -translate-x-1/2 -translate-y-1/2 bg-terracotta rounded-full transition-all duration-200 ease-out" />
      </div>

      <style jsx>{`
        .cursor-brackets {
          transition: width 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      height 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .cursor-hover .cursor-brackets {
          width: 52px !important;
          height: 52px !important;
        }
        .cursor-hover .cursor-brackets span {
          border-color: rgba(185, 98, 63, 1) !important;
        }
      `}</style>
    </div>
  );
}
