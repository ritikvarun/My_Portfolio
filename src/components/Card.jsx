import React from "react";
import { technologies } from "../constants";

const Card = () => {
  return (
    <>
      <div className="text-center m-8">
        <h1 className="font-bold text-5xl mb-2">Things I'm <span className="text-sky-500">Good</span> at</h1>
        <p>skills, interests, passion and hobbies</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="relative group bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center justify-center"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-white text-base font-medium">
              {technology.name}
            </span>

            {/* Hover popup */}
            <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black text-sm px-3 py-1 rounded shadow-md z-10">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
