import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import Navlogo from '../assets/Navlogo.png'; 

const Footer = () => {
  return (
    <div 
      className="text-white p-40 bg-black"
    >
      {/* Footer container */}
      <div className="flex justify-between items-start">
        <div>
          <img src={Navlogo} alt="Logo" className="w-60 mb-6" /> 
          <p className="text-gray-400 text-lg"> 
            SRM Institute of Science & Technology,<br />
            Kattankulathur, Chennai 603203<br />
            India
          </p>
        </div>

        <div className="text-left">
          <p className="mb-3 text-xl">
            Follow us on
          </p>
          <div className="flex space-x-8">
            <a href="https://www.linkedin.com/in/adityakumarsingh2005/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-5xl" />
            </a>
            <a href="https://www.instagram.com/adityasingh7209/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-5xl" />
            </a>
            <a href="https://x.com/adityasingh7211" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-5xl" />
            </a>
            <a href="https://github.com/Axestein" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-5xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center mt-40">
        <p className="text-white text-xl font-bold">
          Clone was made by Aditya 😊
        </p>
      </div>
    </div>
  );
};

export default Footer;
