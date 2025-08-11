import React from "react";

import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";
import Lottie from "lottie-react";
import developer from "../assets/LootieFile/Developer.json";
import resume from "../assets/resume.pdf";
import { useScrollRefs } from "../Pages/ScrollContext";
const Banner = () => {
    const {  projectsRef } = useScrollRefs();
    const handleScrollToProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  return (
    <div className="bg-[#0D1117] relative overflow-hidden">
      {/* Lottie background for mobile (optional) */}
      <div className="absolute inset-0 block md:hidden z-0 h-full opacity-20">
        <Lottie
          animationData={developer}
          loop
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16">
        {/* Text */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-[#00BFFF]">
            <Typewriter
              words={["I'm Sadek Hossen"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={30}
              deleteSpeed={80}
            />
            <br className="hidden md:block" />
            <p> Full Stack Developer</p>
          </h1>

          <p className="text-gray-300 text-lg">
            I specialize in crafting responsive, user-friendly, and visually
            engaging web interfaces using React, Tailwind, and JavaScript.
          </p>

          <div className="flex gap-3 justify-center md:justify-start">
            <button onClick={handleScrollToProjects} className="btn bg-[#00BFFF] border-none text-black hover:bg-blue-400">
              View Projects
            </button>

            <a
              href={resume}
              download
              className="btn border-none hover:bg-blue-400 text-black"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Lottie animation for desktop */}
        <div className="hidden md:block w-full md:w-1/2 h-[400px]">
          <Lottie
            animationData={developer}
            loop
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
