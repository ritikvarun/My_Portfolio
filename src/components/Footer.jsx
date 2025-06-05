import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import { R } from "../assets";
// import { logo } from "../assets";
import { motion } from "framer-motion";

const icons = [
  { id: 1, icon: <FaInstagram />, link: "https://www.instagram.com/" },
  { id: 2, icon: <FaLinkedin />, link: "https://www.linkedin.com/" },
  { id: 3, icon: <FaGithub />, link: "https://www.github.com/" },
  { id: 4, icon: <FaEnvelope />, link: "mailto:yourmail@example.com" },
];

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white">
      <h1 className="text-2xl md:text-4xl font-mono mb-6 text-center">
        "Learning, Living, and Leveling Up."
      </h1>
      {/* <a
        href="#"
        className="text-blue-400 text-lg mb-4 hover:text-purple-400 transition-all"
      >
        GetInTouch();
      </a> */}
      <div className="flex space-x-6">
        {icons.map(({ id, icon, link }) => (
          <motion.a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl md:text-4xl p-2 rounded-full border border-white"
            whileHover={{ scale: 1.2, color: "#a855f7" }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.a>
        ))}
      </div>
      <div className="mt-10">
        <motion.img
          src="/public/R.png"
          alt="avatar"
          className="w-50 h-50 rounded-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
