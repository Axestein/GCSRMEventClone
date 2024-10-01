import React from 'react';
import comingsoonbanner from '../assets/comingsoonbanner.png';
import comingsoon from '../assets/comingsoon.gif';
import ScrollToTopButton from './ScrollToTopButton'; 

const ComingSoon = () => {
  return (
    <div
      className="h-screen relative bg-cover bg-center flex items-start justify-center"
      style={{ backgroundImage: `url(${comingsoonbanner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-neutral-800 p-8 sm:p-16 rounded-lg text-center w-11/12 sm:w-10/12 mt-32 sm:mt-48 h-3/5 sm:h-3/5">
        <img src={comingsoon} alt="Coming Soon" className="mx-auto mb-5 sm:mb-10 w-40 sm:w-64" />
        <h1 className="text-white text-xl sm:text-3xl font-semibold">
          New Fun Events Coming Soon...
        </h1>
      </div>

      <ScrollToTopButton /> 
    </div>
  );
};

export default ComingSoon;
