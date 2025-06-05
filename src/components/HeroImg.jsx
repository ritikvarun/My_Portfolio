import React from "react";
import Tilt from "react-parallax-tilt";

const Card = () => {
  return (
    <Tilt 
      options={{ max: 25, scale: 1.05, speed: 400 }}
      className="flex justify-center items-center mt-10 cursor-pointer"
    >
      <div className="bg-[#121212] border p-4 rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <img 
          src="/EMS.png" // Ensure this path is correct
          alt="React Native"
          className="rounded-2xl mb-4 w-full h-auto object-cover"
        />
        <h2 className="text-white text-lg font-bold">JS Developer</h2>
      </div>
    </Tilt>
  );
};

export default Card;