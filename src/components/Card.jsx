import { motion } from "framer-motion";
import { FaReact, FaJava, FaJs, FaNodeJs, FaDatabase, FaGithub, FaBootstrap, FaHtml5, FaCss3, FaFigma } from "react-icons/fa";
import { SiMongodb, SiMysql, SiGreensock, SiThreeDotJs, SiAdobeXd, SiAdobephotoshop, SiAdobepremierepro, SiAdobeillustrator, SiSpline } from "react-icons/si";

const skills = {
  development: [
    { name: "React", icon: <FaReact /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "GreenSock", icon: <SiGreensock /> },
    { name: "Three.js", icon: <SiThreeDotJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> }
  ],
  designing: [
    { name: "Adobe XD", icon: <SiAdobeXd /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Premiere Pro", icon: <SiAdobepremierepro /> },
    { name: "Illustrator", icon: <SiAdobeillustrator /> },
    { name: "Spline", icon: <SiSpline /> },
    { name: "Figma", icon: <FaFigma /> }
  ]
};

const SkillsShowcase = () => {
  return (
    <div className="bg-gray-900 text-white p-8 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-4">
        Things I'm <span className="text-blue-400">good</span> at
      </h2>
      <p className="text-center text-gray-400">Skills, interests, passion, and hobbies</p>
      
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mt-10">
          <h3 className="text-xl font-semibold capitalize bg-gray-800 px-4 py-2 inline-block rounded-md">
            {category}
          </h3>
          <div className="flex flex-wrap gap-4 mt-4">
            {items.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-4 rounded-xl shadow-lg flex items-center justify-center w-20 h-20 text-3xl"
              >
                {skill.icon}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsShowcase;
