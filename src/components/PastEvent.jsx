import React from 'react';
import witevent from "../assets/witevent.jpg";
import unhashedevent from "../assets/unhashedevent.jpg";
import skilltoberevent from "../assets/skilltoberevent.jpg";
import ossomehackevent from "../assets/ossomehackevent.jpg";
import jinglemaniaevent from "../assets/jinglemaniaevent.jpg";
import graphqlevent from "../assets/graphqlevent.jpg";
import figmaevent from "../assets/figmaevent.jpg";
import didevent from "../assets/didevent.png";

const PastEvent = () => {
  const events = [
    { img: didevent, alt: "Degree in a Day" },
    { img: ossomehackevent, alt: "OSSome Hacks" },
    { img: figmaevent, alt: "Figma Fiesta" },
    { img: jinglemaniaevent, alt: "Jingle Mania" },
    { img: graphqlevent, alt: "GraphQ" },
    { img: unhashedevent, alt: "Unhashed" },
    { img: witevent, alt: "Women In Tech" },
    { img: skilltoberevent, alt: "Skilltober" },
  ];

  return (
    <div className="bg-black p-4 md:p-80 lg:p-80 xl:p-80">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-10 md:mb-14">
        <span className="text-green-500">Past</span> Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative rounded-lg p-4"
          >
            <div className="overflow-hidden rounded-lg border-4 md:border-8 border-green-500 mb-10 md:mb-16 transition-shadow duration-300 hover:shadow-[0px_0px_40px_15px_rgba(34,197,94,0.8)]">
              <img
                src={event.img}
                alt={event.alt}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 flex justify-between items-center bg-gradient-to-t from-black/80 via-black/30 to-transparent">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">
                {event.alt}
              </h3>
              <button className="bg-green-500 text-black font-bold py-1 px-3 sm:py-2 sm:px-4 md:py-2 md:px-5 rounded hover:bg-green-600 transition duration-300">
                Get Certificate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEvent;
