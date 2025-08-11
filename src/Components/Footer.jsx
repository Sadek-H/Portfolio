import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#0D1117] text-gray-400 text-center py-6 border-t border-[#1f2937]">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Sadek Hossen</span>. All rights reserved.
      </p>
    </footer>
        </div>
    );
};

export default Footer;