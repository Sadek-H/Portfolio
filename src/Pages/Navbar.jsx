import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className='bg-[#0D1117] py-2 px-4 border-b-2  z-50 sticky top-0'>
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
    </div>
  );
};

export default Navbar;
