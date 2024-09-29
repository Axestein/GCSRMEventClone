import React, { useState } from 'react';
import Navlogo from '../assets/Navlogo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <div className="navbar-logo">
          <img src={Navlogo} alt="Logo" className="h-14" /> 
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        
        <ul
          className={`flex flex-col md:flex-row md:space-x-12 absolute md:static bg-black md:bg-transparent left-0 right-0 md:items-center transition-all duration-300 ease-in-out ${
            isOpen ? "top-16" : "top-[-200px]"
          }`}
        >
          <li>
            <a href="#home" className="text-lg hover:text-green-400 transition duration-300">Home</a> {/* Increased text size */}
          </li>
          <li>
            <a href="#team" className="text-lg hover:text-green-400 transition duration-300">Our Team</a>
          </li>
          <li>
            <a href="#story" className="text-lg hover:text-green-400 transition duration-300">Our Story</a>
          </li>
          <li>
            <a href="#events" className="text-lg text-green-400 hover:text-green-400 transition duration-300">Events</a>
          </li>
          <li>
            <a href="#contact" className="text-lg hover:text-green-400 transition duration-300">Contact Us</a>
          </li>
          <li>
            <a href="#recruitment" className="text-lg hover:text-green-400 transition duration-300">Recruitment</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
