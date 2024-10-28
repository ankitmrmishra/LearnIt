"use client";

import { motion } from "framer-motion";
import { ChevronRight, BookOpen, Users, Zap } from "lucide-react";

export default function Component() {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Courses",
      description: "Tailored for competitive exams and skill development",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description:
        "Learn from industry professionals and experienced educators",
    },
    {
      icon: Zap,
      title: "Interactive Learning",
      description: "Engage with cutting-edge tools and real-time collaboration",
    },
  ];

  return (
    <section className="min-h-screen bg-black  text-white overflow-hidden md:px-48">
      <div className="container mx-auto px-4 py-20 relative">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why
          <span className="text-transparent bg-clip-text bg-primary">
            {" "}
            LearnIt
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Empowering learners with top-notch education for competitive exams and
          skill development.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 cursor-pointer transition-all duration-300 ease-in-out"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
            >
              <feature.icon className="w-12 h-12 mb-4 text-yellow-400" />
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg flex items-center group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enroll Now
          <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full filter blur-[200px] opacity-20 -z-10" />

        <motion.div
          className="absolute top-20 right-20 w-80 h-80  rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ filter: "blur(100px)" }}
        />
      </div>
    </section>
  );
}
