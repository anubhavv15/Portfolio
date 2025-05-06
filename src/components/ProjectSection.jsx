import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import car from "../assets/car.avif";
import gameThumbnail from "../assets/gameThumbnail.jpg";
import eCommerce from "../assets/eCommerce.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Games Clone",
      description:
        "Created a dynamic and responsive game site clone using HTML, CSS, and JavaScript with modern UI/UX features.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://puzzle-ten-phi.vercel.app/",
      thumbnail: gameThumbnail,
    },
    {
      title: "Website UI",
      description:
        "A modern UI design website showcasing clean, responsive, and user-centered interfaces, built to enhance usability, aesthetics, and user engagement across web and mobile platforms.",
      tech: ["React", "Tailwind CSS"],
      link: "https://ui-project-psi.vercel.app/",
      thumbnail: car,
    },
    {
      title: "E-commerce",
      description:
        "A user-friendly e-commerce platform for browsing, buying, and managing products online, with secure payments, responsive design, and real-time inventory tracking.",
      tech: ["React", "Tailwind CSS", "Nodejs"],
      link: "https://e-shopping-vert.vercel.app/",
      thumbnail: eCommerce,
    },
  ];

  return (
    <section  className="relative py-20 bg-gradient-to-br from-red-700 via-black to-red-900 overflow-hidden" id="projects">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-500 opacity-20 rounded-full mix-blend-lighten blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-black opacity-25 rotate-45 transform rounded-3xl mix-blend-lighten blur-2xl animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
           Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
