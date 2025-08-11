import React, { useState } from "react";
import img from "../assets/me.jpg";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";

const About = () => {
  const [more, setMore] = useState(false);
  const handleReadMore = () => {
    setMore(true);
  };

  return (
    <div className="bg-[#1A2238] py-12 px-6">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-white text-4xl font-bold text-center">
          About <span className="text-[#00BFFF]">Me</span>
        </h2>

        {/* Profile Image */}
        <div className="my-6">
          <img
            src={img}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-[#00BFFF] mx-auto shadow-xl"
          />
        </div>

        {/* Role Title */}
        <h3 className="text-white text-xl font-semibold">
          Full Stack Developer!
        </h3>

        {/* Short Description */}
        <p className="text-[#CCCCCC] text-left mx-auto">
          Hi, I’m Sadek Hossen — currently pursuing my B.Sc. in Electrical and
          Electronic Engineering (EEE). My journey into the world of programming
          started back in 2021, when I first explored HTML and CSS. At that time, I was just
              curious about how websites worked, but due to exam {" "}
          {more && (
            <>
             preparation ,I
              had to pause my learning.<br/><br/>In 2023, I explored basic C programming
              and later Java, but I didn’t quite find the excitement I was
              looking for. Then I returned to web development, this time diving
              deeper into JavaScript — and everything just clicked. Now, I’m
              fully committed to building development projects, learning new
              technologies, and growing my skills every day. I truly enjoy the
              process of turning ideas into functional, interactive websites and
              applications.<br/><br/>Outside of programming, I’m a big fan of sports —
              especially football, table tennis, and badminton — and I actively
              enjoy playing them. These activities keep me energized,
              competitive, and balanced.<br/><br/>I’m passionate, curious, and always
              eager to learn — whether it’s perfecting a line of code or
              mastering a new game technique on the court.
            </>
          )}
        </p>

        {/* Conditional Expanded Description */}

        {/* Button */}
        <button
          onClick={more ? () => setMore(false) : handleReadMore}
          className="mt-6 px-6 py-2 bg-[#00BFFF] text-black font-semibold rounded-full shadow-lg hover:bg-blue-400 transition-all duration-300 flex items-center gap-2 justify-center mx-auto"
        >
          {more ? (
            <>
              Collapse <FaArrowUp />
            </>
          ) : (
            <>
              Read More <FaArrowRight />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default About;
