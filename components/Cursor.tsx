"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const diamondOuterRef = useRef<HTMLDivElement>(null);
  const diamondInnerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setIsVisible(true);

    let mouseX = -100;
    let mouseY = -100;
    let circleX = -100;
    let circleY = -100;
    let idleFrames = 0;
    let isPageVisible = true;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      idleFrames = 0;
    };

    const onVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible) idleFrames = 0;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    const style = document.createElement("style");
    style.innerHTML = `@media (hover: hover) and (pointer: fine) { * { cursor: none !important; } }`;
    document.head.appendChild(style);

    let animationFrameId: number;

    const render = () => {
      if (!isPageVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      idleFrames++;

      if (idleFrames < 120) {
        circleX += (mouseX - circleX) * 0.35;
        circleY += (mouseY - circleY) * 0.35;

        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%), 0)`;
        }
        if (outerRef.current) {
          outerRef.current.style.transform = `translate3d(calc(${circleX}px - 50%), calc(${circleY}px - 50%), 0)`;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("a, button, input, textarea, select, [data-cursor-hover]")) return;
      diamondOuterRef.current?.classList.add("cursor-expand");
      diamondInnerRef.current?.classList.add("cursor-inner-hover");
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("a, button, input, textarea, select, [data-cursor-hover]")) return;
      diamondOuterRef.current?.classList.remove("cursor-expand");
      diamondInnerRef.current?.classList.remove("cursor-inner-hover");
    };

    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(animationFrameId);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer diamond – follows with lerp */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform mix-blend-difference"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div
          ref={diamondOuterRef}
          className="diamond-shape w-7 h-7 border-[1.5px] border-white/60 transition-[width,height,border-width] duration-300 ease-out"
        />
      </div>

      {/* Inner dot – snaps to cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform mix-blend-difference"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div
          ref={diamondInnerRef}
          className="diamond-shape w-2.5 h-2.5 bg-white/85 transition-[width,height,opacity] duration-200 ease-out"
        />
      </div>

      <style jsx global>{`
        .diamond-shape {
          transform: rotate(45deg);
        }
        .cursor-expand {
          width: 52px !important;
          height: 52px !important;
          border-width: 2px !important;
        }
        .cursor-inner-hover {
          opacity: 0.4 !important;
          width: 6px !important;
          height: 6px !important;
        }
      `}</style>
    </>
  );
}
