"use client";

import { MdDownload } from "react-icons/md";
import VerticalMenu from "@/components/VerticalMenu";

export default function ResumePage() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex flex-col items-center pt-16">
      {/* Sidebar Navigation */}
      <VerticalMenu />

      {/* Header */}
      <h1 className="text-4xl font-bold text-blue-400 flex items-center gap-2">
        MY RESUME 📂
      </h1>

      {/* Download Buttons */}
      <div className="flex space-x-4 mt-4">
        <a 
          href="/RebbaVenkataPavanSai_Resume.pdf" 
          download="RebbaVenkataPavanSai_Resume.pdf"
          className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition shadow-lg"
        >
          <MdDownload className="mr-2" /> Download PDF
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="mt-6 w-[80%] h-[90vh]">
        <object 
          data="/RebbaVenkataPavanSai_Resume.pdf" 
          type="application/pdf" 
          className="w-full h-full"
        >
          <p className="text-center text-white">Your browser does not support PDFs. <a href="/RebbaVenkataPavanSai_Resume.pdf" className="underline text-blue-400">Download it here.</a></p>
        </object>
      </div>
    </div>
  );
}
