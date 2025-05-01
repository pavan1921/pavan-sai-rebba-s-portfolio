"use client";

import { FaFilePdf } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import VerticalMenu from "@/components/VerticalMenu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Skills from "@/components/Skills";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex flex-col justify-between">
      {/* Sidebar */}
      <VerticalMenu />

      {/* Main Content */}
      <div>
        {/* About Me Heading */}
        <div className="max-w-6xl ml-4 md:ml-14 mx-auto pt-24 px-4 sm:px-6 md:px-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 animate-gradient-x mb-8">
            About Me
          </h1>
        </div>

        {/* Page Container */}
        <div className="flex-1 ml-4 md:ml-14 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row justify-start items-start gap-8">
          {/* Left: Profile Image */}
          <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
            <Image
              src="/propic2.jpg"
              alt="Pavan Sai"
              width={300}
              height={300}
              className="rounded-xl border-2 border-purple-500"
            />
          </div>

          {/* Right: Details Section */}
          <div className="flex-1 md:ml-[-40px]">
            <h1 className="text-4xl font-bold">
              My Name Is{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Pavan Sai
              </span>{" "}
              & I Am A Full-Stack Developer
            </h1>

            <div className="mt-4 text-lg space-y-2">
              <p>🌟 Full-Stack Developer, Built E-Commerce & Farmer-empowerment Platforms (MERN, Spring Boot)</p>
              <p>🌟 Strong Problem-Solver (Codechef 2-Star, Leetcode Badges)</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 text-lg">
              <p><span className="text-purple-400">Age:</span> 20</p>
              <p><span className="text-purple-400">Freelance:</span> Available</p>
              <p><span className="text-purple-400">Gender:</span> Male</p>
              <p><span className="text-purple-400">Instagram:</span> @Pavansai_rebba</p>
              <p><span className="text-purple-400">Language:</span> Telugu, English, Hindi</p>
              <p><span className="text-purple-400">Email:</span> rebbavenkatapavansai@gmail.com</p>
              <p><span className="text-purple-400">Work:</span> Student</p>
              <p><span className="text-purple-400">Country:</span> India</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-6">
              <button
                onClick={() => router.push("/resume")}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-lg hover:scale-105 transition shadow-lg"
              >
                <FaFilePdf className="mr-2" /> My Resume
              </button>

              <a
                href="/RebbaVenkataPavanSai_Resume.pdf"
                download="RebbaVenkataPavanSai_Resume.pdf"
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-lg hover:scale-105 transition shadow-lg"
              >
                <MdDownload className="mr-2" /> Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="max-w-6xl flex-1 ml-4 md:ml-14 mx-auto mt-16 px-4 sm:px-6 md:px-8">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x mb-8">
            My Education
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                logo: "/kllogo.jpg",
                title: "B.Tech - Computer Science",
                institute: "KL University",
                year: "2022 - 2026",
              },
              {
                logo: "/suryalogo.jpg",
                title: "Intermediate - MPC",
                institute: "Surya Junior College",
                year: "2020 - 2022",
              },
              {
                logo: "/suryalogo.jpg",
                title: "Schooling - SSC",
                institute: "Surya High School",
                year: "2019 - 2020",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-purple-500/30 shadow-md hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 backdrop-blur-md"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={edu.logo}
                    alt={edu.title}
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-purple-500 shadow-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white text-center">
                  {edu.title}
                </h3>
                <p className="text-gray-300 text-sm text-center">{edu.institute}</p>
                <p className="text-purple-400 text-sm text-center">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="max-w-6xl flex-1 ml-2 md:ml-7 mx-auto mt-16 px-4 sm:px-6 md:px-8">
          <Skills />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 text-center text-gray-400 py-6 mt-20 border-t border-gray-700">
        <p className="text-sm">
          © {new Date().getFullYear()} Pavan Sai • Designed with ❤️ using Next.js & TailwindCSS
        </p>
      </footer>
    </div>
  );
}
