"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";



export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/tech-stack", label: "Tech Stack" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Toggle Button (hamburger or X) */}
      <button
        onClick={toggleMenu}
        className="text-white z-50 p-2 rounded bg-gray-800"
      >
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
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="hover:text-purple-400 transition"
              >
                {item.label}
              </Link>
            ))}

            {/* Optional: social icons */}
            <div className="flex space-x-4 mt-8 text-gray-400">
              <a
                href="https://www.facebook.com/profile.php?id=100087187421174"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://x.com/rebba_pavansai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/pavansai_rebba"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rebbavenkatapavansai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
