"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu } from "lucide-react"; // Make sure you installed: `npm install lucide-react`

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Toggle Button (hamburger or X) */}
      <button onClick={toggleMenu} className="text-white z-50">
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 text-white text-2xl"
          >
            {/* Menu Links (clicking any closes menu) */}
            <a onClick={closeMenu} href="#home">Home</a>
            <a onClick={closeMenu} href="#about">About</a>
            <a onClick={closeMenu} href="#projects">Projects</a>
            <a onClick={closeMenu} href="#skills">Skills</a>
            <a onClick={closeMenu} href="#contact">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
