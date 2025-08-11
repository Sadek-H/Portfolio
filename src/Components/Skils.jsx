import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  "Frontend & Backend": [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "Express.js"
  ],
  "Database & Auth": ["MongoDB", "Firebase", "JWT"],
  "Tools": ["GitHub", "Figma"]
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Skils = () => {
  return (
    <div className="bg-[#0D1117] py-20 px-6 min-h-screen text-white relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-20">

        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          My Tech Stack
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-md bg-white/5 border border-[#30363D] rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-100 border-b border-gray-700 pb-2">
                {category}
              </h3>
              <ul className="space-y-2 text-sm">
                {items.map((skill, idx) => (
                  <li
                    key={idx}
                    className="bg-[#21262D] text-gray-300 px-4 py-2 rounded-md hover:bg-[#30363D] transition duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-[120px] top-[10%] left-[5%]" />
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] bottom-[15%] right-[10%]" />
      </div>
    </div>
  );
};

export default Skils;
