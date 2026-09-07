"use client";

import { useEffect, useRef, useCallback } from "react";

function luminance(r: number, g: number, b: number): number {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function parseRgb(color: string): [number, number, number] | null {
  const m = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  return m ? [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])] : null;
}

function findBgColor(el: Element | null): string | null {
  let node = el as HTMLElement | null;
  while (node && node !== document.body) {
    const style = getComputedStyle(node);
    // Check backgroundColor
    const bg = style.backgroundColor;
    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;
    // Check background image (gradients)
    const bgImg = style.backgroundImage;
    if (bgImg && bgImg !== "none") {
      // Extract color from gradient - look for rgb/rgba values
      const match = bgImg.match(/rgba?\(\d+,\s*\d+,\s*\d+/);
      if (match) return match[0] + ")";
    }
    node = node.parentElement;
  }
  return null;
}

function isDark(color: string): boolean {
  const rgb = parseRgb(color);
  if (!rgb) return false;
  return luminance(rgb[0], rgb[1], rgb[2]) < 0.5;
}

function detectColor(el: HTMLElement, cursorEl: HTMLElement) {
  const override = el.closest("[data-cursor]");
  cursorEl.classList.remove("cursor-dark", "cursor-light");
  if (override) {
    const val = override.getAttribute("data-cursor");
    if (val === "dark") cursorEl.classList.add("cursor-dark");
    else if (val === "light") cursorEl.classList.add("cursor-light");
  } else {
    const bg = findBgColor(el);
    if (bg && isDark(bg)) {
      cursorEl.classList.add("cursor-light");
    }
  }
}

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const visible = useRef(false);
  const lastColorCheck = useRef(0);
  const lastTarget = useRef<Element | null>(null);

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

      // Throttled color detection on every move
      const now = performance.now();
      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target && (now - lastColorCheck.current > 80 || target !== lastTarget.current)) {
        lastColorCheck.current = now;
        lastTarget.current = target;
        detectColor(target as HTMLElement, el);
      }
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover], input, textarea, select")) {
        el.classList.add("cursor-hover");
      }
      detectColor(target, el);
    };

    const out = (e: MouseEvent) => {
      el.classList.remove("cursor-hover");
      const related = e.relatedTarget as HTMLElement | null;
      if (related) {
        detectColor(related, el);
      }
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
        .cursor-box {
          width: 0;
          height: 0;
        }
        .diamond-outer {
          position: absolute;
          top: -14px;
          left: -14px;
          width: 28px;
          height: 28px;
          border: 1.5px solid rgba(185, 98, 63, 0.5);
          transform: rotate(45deg);
          transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      border-color 0.3s ease;
        }
        .diamond-inner {
          position: absolute;
          top: -5px;
          left: -5px;
          width: 10px;
          height: 10px;
          background: rgba(185, 98, 63, 0.8);
          transform: rotate(45deg);
          transition: width 0.25s ease, height 0.25s ease,
                      top 0.25s ease, left 0.25s ease,
                      background 0.25s ease;
        }
        .cursor-hover .diamond-outer {
          width: 48px;
          height: 48px;
          top: -24px;
          left: -24px;
          border-color: rgba(185, 98, 63, 0.9);
          animation: dspin 2.5s linear infinite;
        }
        .cursor-hover .diamond-inner {
          width: 8px;
          height: 8px;
          top: -4px;
          left: -4px;
          background: white;
          animation: dspin-rev 1.8s linear infinite;
        }

        /* Light cursor on dark backgrounds */
        .cursor-light .diamond-outer {
          border-color: rgba(255, 255, 255, 0.5) !important;
        }
        .cursor-light .diamond-inner {
          background: rgba(255, 255, 255, 0.8) !important;
        }
        .cursor-light.cursor-hover .diamond-outer {
          border-color: rgba(255, 255, 255, 0.9) !important;
        }
        .cursor-light.cursor-hover .diamond-inner {
          background: rgba(185, 98, 63, 1) !important;
        }

        /* Dark cursor for explicit light override */
        .cursor-dark .diamond-outer {
          border-color: rgba(23, 26, 24, 0.3) !important;
        }
        .cursor-dark .diamond-inner {
          background: rgba(23, 26, 24, 0.7) !important;
        }
        .cursor-dark.cursor-hover .diamond-outer {
          border-color: rgba(23, 26, 24, 0.8) !important;
        }
        .cursor-dark.cursor-hover .diamond-inner {
          background: white !important;
        }

        @keyframes dspin {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        @keyframes dspin-rev {
          from { transform: rotate(45deg); }
          to { transform: rotate(-315deg); }
        }
      `}</style>
    </>
  );
}
