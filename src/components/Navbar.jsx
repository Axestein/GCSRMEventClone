import React from 'react';
import Navlogo from '../assets/Navlogo.png'; // Import the logo image

const Navbar = () => {
  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={Navlogo} alt="Logo" className="h-14" /> {/* Increased the logo size */}
        </div>

        {/* Links Section */}
        <ul className="flex space-x-12"> {/* Increased the spacing between links */}
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
