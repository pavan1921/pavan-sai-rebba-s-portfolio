"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-10">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="text-3xl font-bold text-center"
      >
        About Me
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }} 
        className="text-lg text-gray-300 text-center mt-4 max-w-2xl mx-auto"
      >
        I am a software engineer specialized in building interactive web applications with modern technologies.
      </motion.p>
    </section>
  );
}
