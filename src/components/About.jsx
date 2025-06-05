import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc";

function ServiceCard({ index, title, icon }) {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full cursor-pointer ">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full p-[1px] green-pink-gradient rounded-[20px] shadow-card"
        >
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-[#161031] py-5 px-12 rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled front-end developer with experience in HTML, CSS and
        JavaScript and expertise in React and Tailwind CSS. I •m a quick learner and
        collaborate closely with clients to create efficient, scalable, and
        user-friendly solutions that solve problems. Let •s work together to
        bring your ideas to life!
      </motion.p>
      <div
        id="scrol-no"
        className="mt-20 grid-card gap-10 overflow-x-auto flex-nowrap "
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
