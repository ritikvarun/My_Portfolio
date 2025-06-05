import React from "react";
import { styles } from "../styles";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <>
      <section className="bg-img w-full h-screen ">
        <div
          className={`${styles.paddingX} mt-3.5 max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col items-center justify-center mt-32">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div className="mt-32">
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm<span className="text-[#915eff]"> Ritik Varun</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am frontend developer , I create amazing websites with Creative
              designs.
            </p>
            <HeroImg />
          </div>
        </div>
        <div>
        </div>
      </section>
    </>
  );
};

export default Hero;
