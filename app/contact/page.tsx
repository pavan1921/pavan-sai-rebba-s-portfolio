"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import VerticalMenu from "@/components/VerticalMenu";
import Image from "next/image";
import ChatBot from "@/components/Chatbot";
import handshakeImage from "@/public/handshake1.png";
import botImage from "@/public/chatbot1.png";


export default function Contact() {
  const [chatVisible, setChatVisible] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChatButtonClick = () => {
    setShowChatPopup(true);
    setChatVisible(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
    
      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setStatusMessage("Email sent successfully!");
      } else {
        setStatusMessage("Failed to send email.");
      }
    } catch (error) {
      console.error("Email sending error:", error); // ✅ now error is used
      setStatusMessage("Something went wrong while sending email.");
    } finally {
      setIsSending(false); // ✅ correct camelCase
    }
    
  };

  return (
    <div className="flex min-h-screen">
      <VerticalMenu />

      <div className="flex-grow flex flex-col justify-between bg-gray-950 p-10">
        <div className="flex flex-col items-center">
          <motion.div
            className="w-full flex justify-center mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image src={handshakeImage} alt="Handshake" width={300} height={200} />
          </motion.div>

          <div className="flex w-full max-w-5xl ml-10">
            <motion.div
              className="w-1/3 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col items-start mr-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image src={botImage} alt="Chatbot" width={80} height={80} className="mb-4" />
              <h2 className="text-white text-xl font-semibold">👋 Hi there!</h2>
              <p className="text-white mb-4">
                Ask me anything about my development department!
              </p>
              <button
                onClick={handleChatButtonClick}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-md font-bold hover:scale-105 transition-all"
              >
                Open Chat
              </button>
              {showChatPopup && (
                <div className="w-full mt-4">{chatVisible && <ChatBot />}</div>
              )}
            </motion.div>

            <motion.div
              className="w-[60%] bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl font-extrabold text-white text-left mb-6">
                GET IN TOUCH
              </h1>
              <form onSubmit={handleSubmit}>
                <label className="block text-white text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-700 mb-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label className="block text-white text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-700 mb-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="block text-white text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-700 mb-4 h-32"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-md font-bold hover:scale-105 transition-all"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message 🚀"}
                </button>
              </form>
              {statusMessage && (
                <p className="mt-4 text-green-400">{statusMessage}</p>
              )}
            </motion.div>
          </div>

          <div className="flex space-x-6 mt-6">
            <a
              href="mailto:2200030309cseh@gmail.com"
              className="text-red-500 text-3xl hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100087187421174"
              target="_blank"
              className="text-blue-500 text-3xl hover:scale-110 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/rebba_pavansai"
              target="_blank"
              className="text-blue-400 text-3xl hover:scale-110 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/pavansai_rebba/?hl=en"
              target="_blank"
              className="text-pink-500 text-3xl hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/rebbavenkatapavansai/"
              target="_blank"
              className="text-blue-600 text-3xl hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/pavan1921"
              target="_blank"
              className="text-gray-300 text-3xl hover:scale-110 transition"
            >
              <FaGithub />
            </a>
          </div>
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