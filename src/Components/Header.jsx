import React from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import developerskil from "../assets/LootieFile/developerlottie.json";
import developer from "../assets/LootieFile/WebDevelopment.json";
//import developer from '../assets/LootieFile/lottie.json';

const Header = () => {
  return (
    <div className="relative bg-[#0D1117] min-h-screen overflow-hidden">
      {/*  Lottie background for mobile */}
      <div className="absolute inset-0 block md:hidden z-0 h-full opacity-20">
        <Lottie
          animationData={developer}
          loop={true}
          className="w-full h-full object-contain"
        />
      </div>

      {/*  Navbar */}
      <div className="relative z-10 container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-extrabold text-2xl">
            <span className="text-orange-600">S</span>adek
          </h2>
          <ul className="hidden md:flex text-white space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/*  Hero section */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16">
        {/*  Hero Text */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-[#00BFFF]">
            <span>
              <Typewriter
                words={["I'm Sadek Hossen"]}
                loop={0} // 0 = infinite
                cursor
                cursorStyle="|"
                typeSpeed={30}
                deleteSpeed={80}
              />
            </span>
            <br className="hidden md:block" />
            <p> Full Stack Developer</p>
          </h1>
          <p className="text-gray-300 text-lg">
            I specialize in crafting responsive, user-friendly, and visually
            engaging web interfaces. My passion lies in turning creative ideas
            into reality using modern technologies like React, Tailwind, and
            JavaScript.
          </p>
          <div className="flex gap-3 justify-center md:justify-normal">
            <Link to="/contact">
              <button className="btn bg-[#00BFFF] border-none text-black hover:bg-blue-400">
                View Projects
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn  border-none text-black hover:bg-blue-400">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* Lottie animation for desktop  */}
        <div className="hidden md:block w-full md:w-1/2 h-[400px]">
          <Lottie
            animationData={developerskil}
            loop={true}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
