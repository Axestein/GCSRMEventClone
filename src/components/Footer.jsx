import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import Navlogo from '../assets/Navlogo.png'; 

const Footer = () => {
  return (
    <div className="text-white bg-black p-10 md:p-40"> {/* Reduced padding for mobile */}
      {/* Footer container */}
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="mb-10 md:mb-0 text-center md:text-left"> {/* Centered text for mobile */}
          <img src={Navlogo} alt="Logo" className="w-60 mb-6 mx-auto md:mx-0" /> {/* Center logo on mobile */}
          <p className="text-gray-400 text-lg"> 
            SRM Institute of Science & Technology,<br />
            Kattankulathur, Chennai 603203<br />
            India
          </p>
        </div>

        <div className="text-center md:text-left"> {/* Centered text for mobile */}
          <p className="mb-3 text-xl">
            Follow us on
          </p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-8"> {/* Centered icons on mobile */}
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
      <div className="text-center mt-10 md:mt-40"> {/* Reduced margin-top for mobile */}
        <p className="text-white text-xl font-bold">
          Clone was made by Aditya 😊
        </p>
      </div>
    </div>
  );
};

export default Footer;
