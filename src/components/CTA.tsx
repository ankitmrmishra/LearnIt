"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Trophy, Users, BookOpen } from "lucide-react";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  const features = [
    { icon: Trophy, text: "Top-ranked courses" },
    { icon: Users, text: "Expert instructors" },
    { icon: BookOpen, text: "Comprehensive study material" },
  ];

  return (
    <div className="w-full flex justify-center align-middle items-center md:p-44">
      <section className="  md:rounded-2xl rounded-t-2xl w-full bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 flex items-center justify-center md:px-36 px-2 py-10 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Unlock Your Potential!
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-10 text-center max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Join thousands of students achieving their dreams. Start your
            journey to success today!
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-96 px-6 py-4 rounded-full text-gray-800 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
            <button className="w-full md:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold flex items-center justify-center transition duration-300 group">
              Get Started
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-gray-700"
                whileHover={{ scale: 1.05 }}
              >
                <feature.icon className="w-6 h-6 text-purple-600" />
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
