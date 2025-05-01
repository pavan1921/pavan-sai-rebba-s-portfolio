"use client";

import Image from "next/image";
import VerticalMenu from "@/components/VerticalMenu";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Developed a full-stack e-commerce website using MERN stack, with Stripe payment integration.",
    image: "/mern.jpg", // Replace with actual image path
    link: "https://myecommerce.com"
  },
  {
    title: "Farmer Empowerment System",
    description: "Built a platform to connect farmers directly with consumers using Spring Boot & React.",
    image: "/java.png", // Replace with actual image path
    link: "https://farmerconnect.com"
  },
  {
    title: "Stock Management System",
    description: "Developed an enterprise stock management system using Red Hat Studio, ensuring real-time inventory tracking and data security.",
    image: "/eppro.webp", // Replace with actual image path
    link: "#"
  },
  {
    title: "Feature Extraction from Images using Machine Learning",
    description: "Developed and trained a CNN for image feature extraction & OCR, enabling entity prediction with real-time web-based deployment.",
    image: "/mlpro.webp", // Replace with actual image path
    link: "#"
  },
  {
    title: "Movie Recommendation System",
    description: "Built a movie recommendation system using Python Full Stack (Django, Flask, and MySQL) to suggest personalized movies.",
    image: "/pfsd.webp", // Replace with actual image path
    link: "#"
  }
];

export default function ProjectsPage() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen">
      {/* Sidebar */}
      <VerticalMenu />

      {/* Page Container */}
      <div className="max-w-6xl flex-1 ml-0 mx-auto pt-24 px-8">
        <motion.h1 
          className="text-5xl font-bold text-violet-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Projects
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 162, 255, 0.6)" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Animated Glow Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-500 opacity-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                whileHover={{ opacity: 0.6 }}
              />

              <Image 
                src={project.image} 
                alt={project.title} 
                width={400} 
                height={250} 
                className="rounded-lg"
              />
              <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <motion.a 
                href={project.link} 
                target="_blank" 
                className="text-blue-400 mt-2 inline-block hover:underline"
                whileHover={{ scale: 1.1 }}
              >
                View Project
              </motion.a>
            </motion.div>
          ))}
        </div>
        
      </div>
      <footer className="bg-gray-950 text-center text-gray-400 py-6 mt-20 border-t border-gray-700">
        <p className="text-sm">
          © {new Date().getFullYear()} Pavan Sai • Designed with ❤️ using Next.js & TailwindCSS
        </p>
      </footer>
    </div>
  );
}
