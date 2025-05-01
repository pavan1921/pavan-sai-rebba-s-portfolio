"use client";
import Link from "next/link";
import { Home, User, Briefcase, Code, Award, MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md text-white py-3 px-6 flex justify-center space-x-6">
      {[
        { href: "/", icon: <Home />, label: "Home" },
        { href: "/about", icon: <User />, label: "About" },
        { href: "/certifications", icon: <Award />, label: "Certifications" }, // Updated label
        { href: "/projects", icon: <Briefcase />, label: "Projects" },
        { href: "/tech-stack", icon: <Code />, label: "Tech Stack" },
        { href: "/contact", icon: <MessageCircle />, label: "Contact" },
      ].map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-all"
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
