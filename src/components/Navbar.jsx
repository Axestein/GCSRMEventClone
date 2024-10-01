import React, { useState } from 'react';
import Navlogo from '../assets/Navlogo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 sm:py-5">
        <div className="navbar-logo">
          <img src={Navlogo} alt="Logo" className="h-12 sm:h-14" /> 
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none relative z-50">
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        <ul
          className={`fixed md:static inset-0 bg-black md:bg-transparent flex flex-col md:flex-row md:space-x-14 items-center justify-center md:justify-end transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"}`}
        >
          {isOpen && (
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
          )}

          <li className="relative z-20">
            <a href="#home" className="text-lg sm:text-xl font-normal hover:text-green-400 transition duration-300">Home</a>
          </li>
          <li className="relative z-20 mt-4 md:mt-0">
            <a href="#team" className="text-lg sm:text-xl font-normal hover:text-green-400 transition duration-300">Our Team</a>
          </li>
          <li className="relative z-20 mt-4 md:mt-0">
            <a href="#story" className="text-lg sm:text-xl font-normal hover:text-green-400 transition duration-300">Our Story</a>
          </li>
          <li className="relative z-20 mt-4 md:mt-0">
            <a href="#events" className="text-lg sm:text-xl font-normal text-green-400 hover:text-green-400 transition duration-300">Events</a>
          </li>
          <li className="relative z-20 mt-4 md:mt-0">
            <a href="#contact" className="text-lg sm:text-xl font-normal hover:text-green-400 transition duration-300">Contact Us</a>
          </li>
          <li className="relative z-20 mt-4 md:mt-0">
            <a href="#recruitment" className="text-lg sm:text-xl font-normal hover:text-green-400 transition duration-300">Recruitment</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
