import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  const pos      = useRef({ x: -100, y: -100 });
  const ringPos  = useRef({ x: -100, y: -100 });
  const rafId    = useRef(null);

  const [hovered,  setHovered]  = useState(false);
  const [clicked,  setClicked]  = useState(false);
  const [visible,  setVisible]  = useState(false);
  const [hidden,   setHidden]   = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.id = "custom-cursor-style";
    style.textContent = `
      *, *::before, *::after { cursor: none !important; }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    const onDown = () => setClicked(true);
    const onUp   = () => setClicked(false);

    const onOver = (e) => {
      const t = e.target;
      const isInput = t.tagName === "INPUT" || t.tagName === "TEXTAREA";
      setHidden(isInput);

      const isClickable =
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.closest("a") ||
        t.closest("button") ||
        t.classList.contains("cursor-pointer") ||
        t.closest(".cursor-pointer") ||
        window.getComputedStyle(t).cursor === "pointer";

      setHovered(!!isClickable && !isInput);
    };

    document.addEventListener("mousemove",  onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown",  onDown);
    document.addEventListener("mouseup",    onUp);
    document.addEventListener("mouseover",  onOver);

    return () => {
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown",  onDown);
      document.removeEventListener("mouseup",    onUp);
      document.removeEventListener("mouseover",  onOver);
    };
  }, [visible]);

  useEffect(() => {
    const LERP = 0.12;

    const loop = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * LERP;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * LERP;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: hovered ? 8 : clicked ? 6 : 8,
          height: hovered ? 8 : clicked ? 6 : 8,
          borderRadius: "50%",
          background: hidden ? "transparent" : "rgb(251, 191, 36)",
          opacity: visible ? 1 : 0,
          transition: "width 0.15s, height 0.15s, opacity 0.2s, background 0.2s",
          willChange: "transform",
        }}
      />

      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width:  hovered ? 44 : clicked ? 28 : 36,
          height: hovered ? 44 : clicked ? 28 : 36,
          borderRadius: "50%",
          border: hidden
            ? "1.5px solid rgba(255,255,255,0.3)"
            : `1.5px solid ${hovered ? "rgb(251, 191, 36)" : "rgba(0,209,255,0.55)"}`,
          background: hovered ? "rgba(0,209,255,0.08)" : "transparent",
          opacity: visible ? 1 : 0,
          transition: "width 0.22s ease, height 0.22s ease, border 0.2s ease, background 0.2s ease, opacity 0.2s",
          willChange: "transform",
        }}
      />
    </>
  );
}
