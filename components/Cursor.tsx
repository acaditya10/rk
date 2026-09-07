"use client";

import { useEffect, useRef, useCallback } from "react";

function parseRgb(color: string): [number, number, number] | null {
  const m = color.match(/rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/);
  return m ? [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])] : null;
}

function luminance(r: number, g: number, b: number): number {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function getBgColor(x: number, y: number): [number, number, number] | null {
  const el = document.elementFromPoint(x, y);
  if (!el) return null;

  let node = el as HTMLElement;
  while (node && node !== document.body) {
    const s = getComputedStyle(node);
    const bg = s.backgroundColor;
    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
      return parseRgb(bg);
    }
    node = node.parentElement!;
  }
  return null;
}

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const visible = useRef(false);
  const lastCheck = useRef(0);

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

      // Throttled color inversion
      const now = performance.now();
      if (now - lastCheck.current > 60) {
        lastCheck.current = now;
        const rgb = getBgColor(e.clientX, e.clientY);
        if (rgb) {
          const lum = luminance(rgb[0], rgb[1], rgb[2]);
          if (lum > 0.5) {
            // Light background → dark cursor
            el.classList.add("cursor-dark");
            el.classList.remove("cursor-light");
          } else {
            // Dark background → light cursor
            el.classList.add("cursor-light");
            el.classList.remove("cursor-dark");
          }
        }
      }
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover], input, textarea, select")) {
        el.classList.add("cursor-hover");
      }
    };

    const out = () => el.classList.remove("cursor-hover");

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
    <>
      <div
        ref={dotRef}
        className="cursor-box fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block opacity-0"
        style={{ willChange: "transform", transition: "opacity 0.2s ease" }}
      >
        <div className="diamond-outer" />
        <div className="diamond-inner" />
      </div>

      <style jsx global>{`
        .cursor-box { width: 0; height: 0; }

        .diamond-outer {
          position: absolute;
          top: -14px; left: -14px;
          width: 28px; height: 28px;
          border: 1.5px solid rgba(185, 98, 63, 0.6);
          transform: rotate(45deg);
          transition: width 0.3s cubic-bezier(0.25,0.46,0.45,0.94),
                      height 0.3s cubic-bezier(0.25,0.46,0.45,0.94),
                      top 0.3s cubic-bezier(0.25,0.46,0.45,0.94),
                      left 0.3s cubic-bezier(0.25,0.46,0.45,0.94),
                      border-color 0.15s ease,
                      background 0.15s ease;
        }
        .diamond-inner {
          position: absolute;
          top: -5px; left: -5px;
          width: 10px; height: 10px;
          background: rgba(185, 98, 63, 0.85);
          transform: rotate(45deg);
          transition: width 0.25s ease, height 0.25s ease,
                      top 0.25s ease, left 0.25s ease,
                      background 0.15s ease;
        }

        /* Hover expand */
        .cursor-hover .diamond-outer {
          width: 48px; height: 48px;
          top: -24px; left: -24px;
          animation: dspin 2.5s linear infinite;
        }
        .cursor-hover .diamond-inner {
          width: 8px; height: 8px;
          top: -4px; left: -4px;
          animation: dspin-rev 1.8s linear infinite;
        }

        /* Invert: dark bg → white cursor */
        .cursor-light .diamond-outer { border-color: rgba(255,255,255,0.6); }
        .cursor-light .diamond-inner { background: rgba(255,255,255,0.85); }
        .cursor-light.cursor-hover .diamond-outer { border-color: rgba(255,255,255,0.9); }
        .cursor-light.cursor-hover .diamond-inner { background: rgba(185,98,63,1); }

        /* Invert: light bg → dark cursor */
        .cursor-dark .diamond-outer { border-color: rgba(23,26,24,0.35); }
        .cursor-dark .diamond-inner { background: rgba(23,26,24,0.75); }
        .cursor-dark.cursor-hover .diamond-outer { border-color: rgba(23,26,24,0.85); }
        .cursor-dark.cursor-hover .diamond-inner { background: rgba(255,255,255,1); }

        @keyframes dspin   { from{transform:rotate(45deg)} to{transform:rotate(405deg)} }
        @keyframes dspin-rev { from{transform:rotate(45deg)} to{transform:rotate(-315deg)} }
      `}</style>
    </>
  );
}
