import React, { useState } from "react";
import { NavLink } from "react-router";
import { useScrollRefs } from "./ScrollContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { aboutRef, skillsRef, contactRef } = useScrollRefs();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleScrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleScrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="bg-[#0D1117] border-b-2 border-gray-800 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="border-b-2 border-blue-300 shadow-lg rounded-lg">
         <img src="https://i.postimg.cc/sX03FdFf/aiease-1754956584278.png" className="w-14 h-14" alt="logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-white space-x-8 font-semibold">
          <li>
            <NavLink to="/" className="hover:text-orange-500 transition">
              Home
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleScrollToAbout}
              className="hover:text-orange-500 transition"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={handleScrollToSkills}
              className="hover:text-orange-500 transition"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={handleScrollToContact}
              className="hover:text-orange-500 transition"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-[#12171f] border-t border-gray-700 text-white flex flex-col space-y-4 py-6 px-6 font-semibold">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-orange-500 transition"
            >
              Home
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleScrollToAbout}
              className="w-full text-left hover:text-orange-500 transition"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={handleScrollToSkills}
              className="w-full text-left hover:text-orange-500 transition"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={handleScrollToContact}
              className="w-full text-left hover:text-orange-500 transition"
            >
              Contact
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
