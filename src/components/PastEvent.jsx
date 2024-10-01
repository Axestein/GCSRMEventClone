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
    <div className="bg-black p-8">
      <h1 className="text-5xl font-extrabold text-white text-center mb-14">
        <span className="text-green-500">Past</span> Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative rounded-lg p-4" 
          >
            <div className="overflow-hidden rounded-lg border-8 border-green-500 mb-16 transition-shadow duration-300 hover:shadow-[0px_0px_40px_15px_rgba(34,197,94,0.8)]">
              <img
                src={event.img}
                alt={event.alt}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-t from-black/80 via-black/30 to-transparent">
              <h3 className="text-white text-lg font-bold">{event.alt}</h3>
              <button className="bg-green-500 text-black font-bold py-2 px-5 rounded hover:bg-green-600 transition duration-300"> 
                Get Certified
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEvent;
