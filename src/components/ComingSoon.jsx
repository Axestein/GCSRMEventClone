import React from 'react';
import comingsoonbanner from '../assets/comingsoonbanner.png';
import comingsoon from '../assets/comingsoon.gif';
const ComingSoon = () => {
  return (
    <div
      className="h-screen relative bg-cover bg-center flex items-start justify-center"
      style={{ backgroundImage: `url(${comingsoonbanner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-neutral-800 p-16 rounded-lg text-center w-10/12 mt-48 h-3/5">
        <img src={comingsoon} alt="Coming Soon" className="mx-auto mb-10 w-64" /> 
        <h1 className="text-white text-3xl font-semibold">
          New Fun Events Coming Soon...
        </h1>
      </div>
    </div>
  );
};

export default ComingSoon;
