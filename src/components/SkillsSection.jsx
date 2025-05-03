import { motion } from "framer-motion";
import { SiReact, SiJavascript, SiTailwindcss, SiNodedotjs, SiFramer } from "react-icons/si";
import { FaPaintBrush, FaLaptopCode, FaMobileAlt } from "react-icons/fa"; // Icons for abilities

// Skills Data
const skills = [
  {
    name: "React",
    level: "Advanced",
    icon: <SiReact className="text-cyan-400 text-3xl" />,
  },
  {
    name: "JavaScript",
    level: "Advanced",
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    icon: <SiTailwindcss className="text-teal-300 text-3xl" />,
  },
  {
    name: "Node.js",
    level: "Intermediate",
    icon: <SiNodedotjs className="text-green-400 text-3xl" />,
  },
  {
    name: "Framer Motion",
    level: "Beginner",
    icon: <SiFramer className="text-pink-400 text-3xl" />,
  },
];

// Abilities Data
const abilities = [
  {
    title: "PaintBrush",
    subtitle: "Design + development",
    desc: "Clean, modern designs - optimized for performance, search engines, and converting users to customers.",
    icon: <FaPaintBrush className="text-3xl text-yellow-400" />, // Added an icon
  },
  {
    title: "Laptop Code",
    subtitle: "Technology",
    desc: "Combined all the latest technologies to a progressive website.",
    icon: <FaLaptopCode className="text-3xl text-blue-500" />, // Added an icon
  },
  {
    title: "Mobile Device",
    subtitle: "Always Responsive",
    desc: "A responsive design makes your website accessible to all users, regardless of their device.",
    icon: <FaMobileAlt className="text-3xl text-green-400" />, // Added an icon
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
          My Skills & Abilities
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
