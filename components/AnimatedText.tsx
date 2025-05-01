"use client";

import { useState, useEffect } from "react";

const skills = [
  "Computer Science Student",
  "Full Stack Developer",
  "AI & Machine Learning Enthusiast",
  "Programmer",
];

export default function AnimatedText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === skills[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 800); // Pause before deleting
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % skills.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(skills[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 30 : 40); // Faster typing & deleting speed

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  return (
    <p className="text-lg md:text-xl font-medium flex space-x-2 h-12">
      <span className="text-white">I am a</span>
      <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{text}</span>
      <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text animate-blink">|</span> {/* Blinking cursor */}
    </p>
  );
}