"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="fixed w-5 h-5 bg-white rounded-full pointer-events-none mix-blend-difference transition-transform duration-75"
      style={{ top: position.y, left: position.x, transform: "translate(-50%, -50%)" }}
    />
  );
}
