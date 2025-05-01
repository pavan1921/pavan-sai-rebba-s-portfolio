"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Copyright Text */}
        <p className="text-sm mb-3 md:mb-0">
          © {new Date().getFullYear()} Pavan Sai. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-400 transition-all"><Facebook size={20} /></a>
          <a href="#" className="hover:text-blue-400 transition-all"><Twitter size={20} /></a>
          <a href="#" className="hover:text-pink-400 transition-all"><Instagram size={20} /></a>
          <a href="#" className="hover:text-blue-500 transition-all"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
