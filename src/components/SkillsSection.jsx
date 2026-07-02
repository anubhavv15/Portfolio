import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiExpress,
  SiGit,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiJava,
} from "react-icons/si";
import { FaPaintBrush, FaLaptopCode, FaMobileAlt, FaGithub } from "react-icons/fa"; // Icons for abilities

// Skills Data
const skills = [
  {
    name: "HTML5",
    level: "Advanced",
    icon: <SiHtml5 className="text-orange-500 text-3xl" />,
  },
  {
    name: "CSS3",
    level: "Advanced",
    icon: <SiCss3 className="text-blue-500 text-3xl" />,
  },
  {
    name: "JavaScript",
    level: "Advanced",
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
  },
  {
    name: "React.js",
    level: "Advanced",
    icon: <SiReact className="text-cyan-400 text-3xl" />,
  },
  {
    name: "Node.js",
    level: "Intermediate",
    icon: <SiNodedotjs className="text-green-500 text-3xl" />,
  },
  {
    name: "Express.js",
    level: "Intermediate",
    icon: <SiExpress className="text-gray-300 text-3xl" />,
  },
  {
    name: "MongoDB",
    level: "Intermediate",
    icon: <SiMongodb className="text-green-400 text-3xl" />,
  },
  {
    name: "Python",
    level: "Intermediate",
    icon: <SiPython className="text-blue-400 text-3xl" />,
  },
  {
    name: "Java",
    level: "Intermediate",
    icon: <SiJava className="text-red-500 text-3xl" />,
  },
  {
    name: "Git",
    level: "Intermediate",
    icon: <SiGit className="text-orange-500 text-3xl" />,
  },
  {
    name: "GitHub",
    level: "Intermediate",
    icon: <FaGithub className="text-white text-3xl" />,
  },
  {
    name: "Bootstrap",
    level: "Intermediate",
    icon: <SiBootstrap className="text-purple-500 text-3xl" />,
  },
];

// Abilities Data
const abilities = [
  {
    title: "Full Stack Development",
    subtitle: "MERN Stack",
    desc: "Develop responsive full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
    icon: <FaLaptopCode className="text-3xl text-blue-500" />,
  },
  {
    title: "REST API Integration",
    subtitle: "Backend Development",
    desc: "Build and integrate RESTful APIs with secure authentication and database connectivity.",
    icon: <FaPaintBrush className="text-3xl text-yellow-400" />,
  },
  {
    title: "Responsive Design",
    subtitle: "Frontend Development",
    desc: "Create modern, mobile-friendly user interfaces using React, Tailwind CSS, and Bootstrap.",
    icon: <FaMobileAlt className="text-3xl text-green-400" />,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-4 bg-gray-900 text-white min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Abilities
        </motion.h2>

        {/* Grid Layout (Swapping Abilities and Skills positions) */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Abilities Section */}
          <div className="flex flex-col gap-6">
            {abilities.map((ability, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl shadow-md hover:from-blue-600 hover:to-purple-500 transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-3 rounded-full shrink-0">{ability.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-cyan-300 text-sm uppercase tracking-wide">{ability.title}</h4>
                    <h5 className="text-white text-xl font-bold">{ability.subtitle}</h5>
                    <div className="h-14 mt-2 overflow-hidden">
                      <p className="text-gray-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        {ability.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>

          {/* Right: Skills Section */}
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                }}
                className="bg-gray-800 p-5 rounded-xl shadow-lg flex items-center gap-4 transition-all duration-300 hover:bg-gray-700 hover:-translate-y-1"
              >
                <div>{skill.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="text-sm text-gray-400">{skill.level}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
