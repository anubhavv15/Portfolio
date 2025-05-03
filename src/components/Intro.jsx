import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/img.avif';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter, FaGithub } from "react-icons/fa";

import ParticlesBackground from './ParticlesBackground';

const Intro = () => {
  return (
    <section id='home' className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-10 py-10 overflow-hidden">
      
      {/* Scoped Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left mt-8 md:mt-0 md:mr-12 relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-yellow-300">Anubhav Chaudhary</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Frontend Developer | Designer | Coder
        </h2>
        <p className="max-w-md text-lg mb-8">
          I love building beautiful and functional websites. Passionate about React.js, TailwindCSS, and creating great user experiences.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition-all inline-block"
        >
          Contact Me
        </motion.a>
      </motion.div>

      {/* Image Content */}
      <motion.div
        className="flex-shrink-0 mt-8 md:mt-0 relative z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
      <div className="flex flex-col items-center">
  <img
    src={img}
    alt="Profile"
    className="w-74 h-94 object-cover rounded-full border-4 border-yellow-300 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
  />

  <div className="mt-4 flex space-x-6">
    <a
      href="https://www.linkedin.com/in/anubhav-chaudhary"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-300 text-3xl hover:text-yellow-400 transition-colors"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://twitter.com/anubhav-chaudhary"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-300 text-3xl hover:text-yellow-400 transition-colors"
    >
      <FaTwitter />
    </a>
    <a
      href="https://github.com/anubhav-chaudhary"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-300 text-3xl hover:text-yellow-400 transition-colors"
    >
      <FaGithub />
    </a>
  </div>
</div>


      </motion.div>
    </section>
  );
};

export default Intro;
