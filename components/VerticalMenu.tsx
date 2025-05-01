"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  User,
  Briefcase,
  Code,
  Award,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
} from "lucide-react";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [hasExpandedOnce, setHasExpandedOnce] = useState(false);

  useEffect(() => {
    if (expanded) {
      setHasExpandedOnce(true);
    }
  }, [expanded]);

  // Handle auto collapse on small screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setExpanded(false);
        setHasExpandedOnce(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="md:hidden fixed top-4 right-4 z-50 text-white bg-gray-800 p-2 rounded-lg"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <motion.div
        initial={{ width: "4rem" }}
        animate={{ width: expanded ? "14rem" : "4rem" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="h-screen fixed right-0 top-0 bg-gray-900 bg-opacity-90 
                   shadow-lg flex flex-col justify-between py-6 px-3 rounded-l-3xl 
                   border-r-4 border-blue-500 z-40"
        onMouseEnter={() => {
          if (window.innerWidth >= 768 && !hasExpandedOnce) setExpanded(true);
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 768 && !hasExpandedOnce) setExpanded(false);
        }}
      >
        {/* Name & Title */}
        <div className={`text-white text-lg font-bold flex items-center space-x-2 pl-3 transition-all duration-300 ${expanded ? "mb-2 mt-14" : "mb-0 mt-0"}`}>
          <span className="text-blue-400 text-2xl">{expanded && "<"}</span>
          <span className="text-white text-xl">{expanded && "Pavan Sai"}</span>
          <span className="text-blue-400 text-2xl">{expanded && "/>"}</span>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-4 mt-8">
          {[
            { href: "/", icon: <Home />, label: "Home" },
            { href: "/about", icon: <User />, label: "About Me" },
            { href: "/achievements", icon: <Award />, label: "Achievements" },
            { href: "/projects", icon: <Briefcase />, label: "Projects" },
            { href: "/tech-stack", icon: <Code />, label: "Tech Stack" },
            { href: "/contact", icon: <MessageCircle />, label: "Contact" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center text-gray-300 hover:text-white transition-all space-x-4 
                       w-full py-3 px-3 rounded-lg hover:bg-gray-800 group"
            >
              <span className={`transition-all duration-300 text-[28px] group-hover:scale-125`}>
                {item.icon}
              </span>
              {expanded && (
                <span className="text-md font-semibold bg-gradient-to-r from-blue-300 via-pink-400 to-purple-500 
                                bg-clip-text text-transparent tracking-wide 
                                transition-all duration-300 group-hover:shadow-md group-hover:shadow-purple-500">
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Social Media Icons */}
       {/* Social Media Icons */}
<div className={`mt-auto pt-4 transition-all duration-300 ${expanded ? "px-4" : "px-0"} overflow-hidden`}>
  <div className="flex justify-center space-x-4 text-gray-500">
    <a href="https://www.facebook.com/profile.php?id=100087187421174" target="_blank" rel="noopener noreferrer">
      <Facebook size={20} className="hover:text-blue-500 transition" />
    </a>
    <a href="https://x.com/rebba_pavansai" target="_blank" rel="noopener noreferrer">
      <Twitter size={20} className="hover:text-blue-400 transition" />
    </a>
    <a href="https://www.instagram.com/pavansai_rebba" target="_blank" rel="noopener noreferrer">
      <Instagram size={20} className="hover:text-pink-500 transition" />
    </a>
    <a href="https://www.linkedin.com/in/rebbavenkatapavansai/" target="_blank" rel="noopener noreferrer">
      <Linkedin size={20} className="hover:text-blue-600 transition" />
    </a>
  </div>
</div>

      </motion.div>
    </>
  );
}
