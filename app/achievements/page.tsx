"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import VerticalMenu from "@/components/VerticalMenu";

const certifications = [
  {
    title: "RedHat Certified Enterprise Application Developer",
    image: "/redhat.png",
    link: "https://www.credly.com/badges/ff3f03c8-5202-4068-9767-8ac8d3d6bbd4/linked_in_profile",
  },
  {
    title: "Salesforce Certified AI Associate",
    image: "/salesforceaii.png",
    width: 300,
    height: 300,
    link: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=zdnwveydt40WE/pCk6Jm9Ta6kSJcbLTx27Ip5pTOHfKB+S5v9l3vyyrYNWyTQUVr",
  },
  {
    title: "Multicloud Network Associate",
    image: "/avtrix.png",
    width: 300,
    height: 300,
    link: "https://www.credly.com/badges/ff0ecdfd-fbc0-4660-9b24-11be70b127c8",
  },
  {
    title: "Oracle Cloud Infrastructure 2023 Certified Data Science Professional",
    image: "/oracle.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BA1018B7E8F89612F0EFA17B1291E14B560E12F66AF6B939474A080835B8ED15",
  },
  {
    title: "Problem Solving (Intermediate) by HackerRank",
    image: "/problemsolving.jpg",
    link: "https://www.hackerrank.com/certificates/3bffb10fcca3",
  },
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    image: "/oracleaii.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A61AEC19BA7BE05085CFAD9AC05B3A96B95606F9A5161088694D2A3C9FE8E807",
  },
  {
    title: "Problem Solving Through Programming in C",
    image: "/nptelc.jpg",
    link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM1/Ecertificates/106/noc23-cs53/Course/NPTEL23CS53S3491115404235927.jpg",
  },
  {
    title: "REST API (Intermediate) by HackerRank",
    image: "/restapi.jpg",
    link: "https://www.hackerrank.com/certificates/483451587c9c",
  },
  {
    title: "Database Management System",
    image: "/npteldbms.jpg",
    link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs79/Course/NPTEL23CS79S3425106610100440.pdf",
  },
  {
    title: "Automation Anywhere Certified Essentials RPA Professional 2024",
    image: "/rpa.jpg",
    link: "https://certificates.automationanywhere.com/92cd264d-6bd3-4426-8dae-f47ce6580d7f#acc.plMctQsD",
  },
  {
    title: "JavaScript (Basic)",
    image: "/javascriptbasic.jpg",
    link: "https://www.hackerrank.com/certificates/iframe/d8408c0058c6",
  },
  {
    title: "Data Science Master Virtual Internship",
    image: "/aicte.jpg",
    width: 280,
    height: 280,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7312362779296821248/",
  },
];

export default function Certifications() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <VerticalMenu />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-10 ml-16">
        {/* 🏆 Animated Heading */}
        <motion.h1
          className="text-6xl font-extrabold mb-10 tracking-wide text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 
                       bg-clip-text text-transparent"
            animate={{
              textShadow: [
                "0px 0px 15px rgba(142, 156, 245, 0.7)",
                "0px 0px 20px rgba(176, 142, 245, 0.6)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            🏆 My Achievements 🏆
          </motion.span>
        </motion.h1>

        {/* 📜 Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-80 h-112 rounded-2xl bg-gray-800 shadow-lg 
                        backdrop-blur-lg flex flex-col items-center p-6 cursor-pointer 
                        border border-gray-700 transition-all duration-300 hover:shadow-glow"
              whileHover={{
                scale: 1.1, // Faster zoom effect
                y: -10, // Moves up quickly
                boxShadow: "0px 10px 30px rgba(138, 43, 226, 0.6)", // Brighter glow
              }}
              whileTap={{ scale: 0.95 }} // Click effect
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Certificate Image */}
              <div className="flex-grow flex items-center justify-center w-full h-64">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={cert.width || 270}
                  height={cert.height || 270}
                  className="object-contain w-[300px] h-[300px]"
                />
              </div>

              {/* Certificate Title */}
              <h2 className="text-lg font-semibold text-white text-center mt-4">
                {cert.title}
              </h2>
            </motion.a>
          ))}
        </div>
        <footer className="bg-gray-950 text-center text-gray-400 py-6 mt-20 border-t border-gray-700">
        <p className="text-sm">
          © {new Date().getFullYear()} Pavan Sai • Designed with ❤️ using Next.js & TailwindCSS
        </p>
      </footer>
      </div>
      
    </div>
  );
}
