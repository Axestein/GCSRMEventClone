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
    <div className="bg-black p-80">
      <h1 className="text-5xl font-extrabold text-white text-center mb-12">
        <span className="text-green-500">Past</span> Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {events.map((event, index) => (
          <div
            key={index}
            className="border-4 border-green-500 border-solid rounded-lg overflow-hidden"
          >
            <img
              src={event.img}
              alt={event.alt}
              className="w-full h-auto object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEvent;
