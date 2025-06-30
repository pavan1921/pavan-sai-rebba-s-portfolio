"use client";

import VerticalMenu from "@/components/VerticalMenu";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Importing Tech Stack Icons
import { FaGitAlt, FaPython, FaJava, FaNodeJs, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiDjango, SiMongodb, SiPostman, SiJavascript, SiC, SiCplusplus, SiPostgresql, SiNextdotjs } from "react-icons/si";

// Tech Stack Data
const skills = [
  { name: "Git", icon: <FaGitAlt className="text-orange-400 text-8xl" /> },
  { name: "Django", icon: <SiDjango className="text-green-400 text-8xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-8xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400 text-8xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-8xl" /> },
  { name: "C", icon: <SiC className="text-blue-400 text-8xl" /> },
  { name: "Java", icon: <FaJava className="text-red-500 text-8xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-400 text-8xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500 text-8xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 text-8xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-8xl" /> },
  { name: "React", icon: <FaReact className="text-blue-500 text-8xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-8xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-8xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-8xl" /> }
];

export default function TechStacksPage() {
  return (
    <div className="flex-1 ml-0 bg-gradient-to-b from-black to-gray-900 text-white min-h-screen">
      <VerticalMenu />

      {/* Page Header */}
      <motion.div 
        className="relative pt-14 px-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-black drop-shadow-lg shadow-blue-500/50">
  Tech Universe
</h1>

      </motion.div>

      {/* Scrolling Tech Icons */}
      <motion.div 
  className="overflow-hidden w-[1200px] h-[250px] mt-16 flex justify-center"
>
        <motion.div 
          className="flex space-x-20 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" }}
        >
          {[...skills, ...skills].map((skill, index) =>(
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.2, rotate: 5 }} 
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              {skill.icon}
              <p className="text-2xl font-semibold mt-4">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Experience Timeline */}
     <motion.div
  className="mt-8 px-6 flex justify-start"
>
  <div className="w-full ml-12 max-w-[80%]">
    <h1 className="text-5xl h-[80px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-black drop-shadow-lg shadow-blue-500/50 mb-6">
      My Learning Journey
    </h1>


    {/* Ensure timeline moves left */}
    <VerticalTimeline className="items-start">
      {[
        { date: "2022", title: "Started Competitive Programming", desc: "Learned C, Java, and Python for problem-solving.", icon: <SiC className="text-white text-2xl" />, bg: "#1e40af" },
        { date: "2023", title: "Explored MERN Stack & Built Projects", desc: "Worked with MongoDB, Express.js, React, and Node.js.", icon: <FaReact className="text-white text-2xl" />, bg: "#2563eb" },
        { date: "2023", title: "Worked on Python Full Stack Development", desc: "Built web applications using Django, Flask, and MySQL.", icon: <SiDjango className="text-white text-2xl" />, bg: "#16a34a" },
        { date: "2024", title: "Developed Java Full Stack Applications", desc: "Gained experience with Spring Boot, Hibernate, and PostgreSQL.", icon: <FaJava className="text-white text-2xl" />, bg: "#dc2626" },
        { date: "2024", title: "Dived into AI, ML & Deep Learning", desc: "Implemented models with TensorFlow, PyTorch, and OpenCV.", icon: <FaPython className="text-white text-2xl" />, bg: "#facc15" },
        { date: "2025", title: "Mastered DevOps & Tech Tools", desc: "Worked with Git, Docker, Kubernetes for development & deployment.", icon: <FaGitAlt className="text-white text-2xl" />, bg: "#f97316" }
      ].map((item, index) => (
        <VerticalTimelineElement 
          key={index}
          date={item.date}
          icon={item.icon}
          iconStyle={{ background: item.bg, color: "#fff" }}
          contentStyle={{ background: "rgba(30, 41, 59, 0.9)", color: "#fff", boxShadow: "0px 0px 12px rgba(0, 150, 255, 0.5)" }}
          className="self-start"
        >
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-gray-300">{item.desc}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
</motion.div>
 {/* Footer */}
 <footer className="bg-gray-950 text-center text-gray-400 py-6 mt-20 border-t border-gray-700">
        <p className="text-sm">
          © {new Date().getFullYear()} Pavan Sai • Designed with ❤️ using Next.js & TailwindCSS
        </p>
      </footer>
    </div>
  );
}
