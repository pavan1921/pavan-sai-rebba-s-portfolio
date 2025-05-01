"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import VerticalMenu from "@/components/VerticalMenu";
import MobileMenu from "@/components/MobileMenu"; // 👈 NEW IMPORT

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen bg-black px-6 md:px-16 relative">
      {/* Mobile Menu (Only shown on small screens) */}
      <div className="block md:hidden absolute top-6 right-6 z-50">
        <MobileMenu />
      </div>

      <div className="flex-grow flex flex-col md:flex-row items-center">
        {/* Left Side - Text Content (Unchanged) */}
        <motion.div
          className="text-white w-full md:w-1/2 text-center md:text-left flex"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-lg">
            <p className="text-xl text-purple-400 mb-3">Hi There... 👋</p>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight font-poppins max-w-xl whitespace-nowrap">
              I am{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Venkata <br /> Pavan Sai Rebba
              </span>
            </h1>
            <AnimatedText />
            <p className="mt-4 text-lg text-gray-300">
              Passionate about AI & ML and Full Stack Development.
            </p>
            <p className="text-lg text-gray-400 mt-2">
              B.Tech at KL University | MERN Stack | AI Enthusiast
            </p>

            <div className="mt-10 flex justify-center md:justify-start space-x-6">
  {/* Download Resume Button */}
  <a 
    href="/RebbaVenkataPavanSai_Resume.pdf" 
    download="RebbaVenkataPavanSai_Resume.pdf"
    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg text-lg shadow-lg hover:scale-105 transition"
  >
    Download Resume
  </a>

  {/* Contact Me Button */}
  <a 
    href="/contact" 
    className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg text-lg hover:scale-105 transition"
  >
    Contact Me
  </a>
</div>

          </div>
        </motion.div>

        {/* Desktop Profile Image (Unchanged) */}
        <motion.div
          className="relative w-[600px] h-[600px] md:w-[600px] md:h-[600px] ml-[-80px] md:ml-[-100px] hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/mypic-removebg-preview.png"
            alt="Profile Picture"
            width={600}
            height={600}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Desktop Right Side Menu (Unchanged) */}
        <div className="hidden md:block">
          <VerticalMenu />
        </div>
      </div>

      {/* Mobile Image (Shown only on small screens) */}
      <div className="md:hidden my-10 flex justify-center">
        <Image
          src="/mypic-removebg-preview.png"
          alt="Profile Picture"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Footer (Unchanged) */}
      <footer className="bg-gray-950 text-center text-gray-400 py-6 mt-10 border-t border-gray-700">
        <p className="text-sm">
          © {new Date().getFullYear()} Pavan Sai • Designed with ❤️ using
          Next.js & TailwindCSS
        </p>
      </footer>
    </div>
  );
}
