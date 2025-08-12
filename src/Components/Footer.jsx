import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-[#0D1117]  text-gray-100 text-center py-6 border-t border-blue-300">
            <p className="text-sm">
                &copy; {new Date().getFullYear()}{" "}
                <span className="text-blue-500 font-semibold hover:text-yellow-200 transition duration-300">
                    Sadek Hossen
                </span>. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
