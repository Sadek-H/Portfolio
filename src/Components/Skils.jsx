import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiGithub,
  SiFigma,
} from "react-icons/si";

const skills = {
  "Frontend & Backend": [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "Express.js",
  ],
  "Database & Auth": ["MongoDB", "Firebase", "JWT"],
  Tools: ["GitHub", "Figma"],
};

const skillIcons = {
  HTML: <SiHtml5 className="text-orange-500" size={20} />,
  CSS: <SiCss3 className="text-blue-600" size={20} />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" size={20} />,
  JavaScript: <SiJavascript className="text-yellow-400" size={20} />,
  "React.js": <SiReact className="text-cyan-400" size={20} />,
  "Express.js": <SiExpress className="text-gray-400" size={20} />,
  MongoDB: <SiMongodb className="text-green-600" size={20} />,
  Firebase: <SiFirebase className="text-yellow-500" size={20} />,
  JWT: <SiJsonwebtokens className="text-purple-600" size={20} />,
  GitHub: <SiGithub className="text-gray-500" size={20} />,
  Figma: <SiFigma className="text-pink-500" size={20} />,
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Skils = () => {
  return (
    <div
      className="bg-[#0D1117] py-20 px-6 min-h-screen text-white relative z-10 overflow-hidden"
      id="skills"
    >
      <div className="container mx-auto relative z-20">
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
                  <motion.li
                    key={idx}
                    className="bg-[#21262D] text-gray-300 px-4 py-2 rounded-md border border-blue-500 cursor-default flex items-center gap-3"
                    animate={{
                      boxShadow: [
                        "0 0 12px 4px rgba(59, 130, 246, 0.3)", 
                        "0 0 16px 6px rgba(59, 130, 246, 0.45)", 
                        "0 0 12px 4px rgba(59, 130, 246, 0.3)",
                      ],

                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {skillIcons[skill] || (
                      <span className="w-5 h-5 inline-block" />
                    )}
                    <span>{skill}</span>
                  </motion.li>
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
