"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaTimes } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hey there! How can I help you? 😊", fromBot: true },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const questions = [
    "What are your key skills?",
    "Can you share some of your projects?",
    "What programming languages do you specialize in?",
    "Do you have experience with frontend or backend development?",
    "What technologies have you worked with?",
    "Can you explain a challenging problem you solved?",
    "What certifications or courses have you completed?",
    "Do you have experience with AI or machine learning?",
    "What are your career goals?",
    "Where can I find your resume?",
  ];

  const responses: { [key: string]: string } = {
    "What are your key skills?": "I have expertise in Full-Stack Development, React, Next.js, Node.js, and AI applications. 🚀",
    "Can you share some of your projects?": "Sure! I've built web applications, AI-powered tools, and more. Check them out in the 'Projects' section of my portfolio! 🛠️",
    "What programming languages do you specialize in?": "I primarily work with JavaScript, TypeScript, Python, and C++. 💻",
    "Do you have experience with frontend or backend development?": "Yes, I'm a full-stack developer. I have experience with both frontend (React, Next.js) and backend (Node.js, Express, Django). 🌍",
    "What technologies have you worked with?": "I've worked with React, Next.js, Tailwind CSS, Node.js, Express, MongoDB, PostgreSQL, Docker, and more. 🚀",
    "Can you explain a challenging problem you solved?": "Once, I optimized a slow database query, reducing load time from 10s to under 1s using indexing and caching techniques. ⚡",
    "What certifications or courses have you completed?": "I have completed certifications in Web Development, AI, and Data Science from platforms like Udemy and Coursera. 📜",
    "Do you have experience with AI or machine learning?": "Yes! I've worked on AI-powered applications, including chatbots and recommendation systems using TensorFlow and OpenAI APIs. 🤖",
    "What are your career goals?": "I'm passionate about building innovative software solutions and aiming for a role in AI-driven full-stack development. 🚀",
    "Where can I find your resume?": "You can download my resume from the 'Resume' section of my portfolio. 📄",
  };

  const handleQuestionClick = (question: string) => {
    setMessages((prev) => [
      ...prev,
      { text: question, fromBot: false },
      { text: responses[question], fromBot: true },
    ]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-5 left-5">
      {!isOpen && (
        <motion.button
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
        >
          <FaRobot size={24} />
        </motion.button>
      )}

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-80 bg-gray-900 text-white p-4 rounded-xl shadow-lg border border-gray-700"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold">Chatbot Assistant 🤖</h3>
            <button className="text-red-400 hover:text-red-600" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="h-96 overflow-y-auto mb-3 border-b border-gray-700 p-2"> {/* Increased height */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 rounded-lg w-fit ${
                  msg.fromBot ? "bg-blue-600 text-white self-start" : "bg-gray-700 text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="h-32 overflow-y-auto grid grid-cols-2 gap-2"> {/* Fixed height, scrollable */}
            {questions.map((q, index) => (
              <button
                key={index}
                className="bg-gray-700 text-white p-2 rounded-md text-sm hover:bg-gray-600 transition"
                onClick={() => handleQuestionClick(q)}
              >
                {q}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;