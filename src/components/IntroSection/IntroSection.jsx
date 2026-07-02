import React, { useEffect, useState } from "react";
import profile from "../../assets/profile.jpg";
import './IntroSection.css';

const IntroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="relative p-1 animated-border rounded-2xl">
      <section
        id="about"
        className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 animated-gradient-bg min-h-screen rounded-2xl"
      >

        {/* Profile Image */}
        <div className={`md:w-1/3 w-full flex justify-center md:justify-start mb-6 md:mb-0 ${animate ? 'animate-slideUp' : ''}`} style={{ animationDelay: '0.2s' }}>
          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-68 h-68 object-cover shadow-xl border-4 border-white transform transition duration-300 hover:scale-105"
          />
        </div>

        {/* Intro Text and Download Button */}
        <div className={`md:w-2/3 text-center md:text-left ${animate ? 'animate-slideUp' : ''}`} style={{ animationDelay: '0.5s' }}>
          <h1 className="text-4xl font-bold mb-4 text-white">
            Let me Introduce <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900">Myself</span>
          </h1>

        <p className="text-lg text-white mb-6">
  Hi, I'm <span className="font-semibold">Anubhav Chaudhary</span>, an MCA student at SRM Institute of Science and Technology with a passion for Full-Stack Web Development. I specialize in the MERN Stack (MongoDB, Express.js, React.js, and Node.js) and have a strong foundation in Java, Python, and REST API development.

  I enjoy building responsive, user-friendly web applications and solving real-world problems through clean, efficient code. My experience includes developing full-stack projects such as a Car Rental Platform, an E-Commerce Web Application, and a Python-based Stock & News Email Alert System. I have also completed a Frontend Development Internship, where I gained hands-on experience in designing modern and responsive user interfaces.

  I'm continuously expanding my technical skills and looking for opportunities to contribute as a Software Developer or Full-Stack Developer while learning from real-world challenges.
</p>
          <a
            href="/Anubhav_cv.pdf"
            download="Anubhav_cv.pdf"
            className="cv-button inline-block bg-white text-indigo-600 px-6 py-3 rounded-xl shadow-md transform transition-all duration-300 ease-in-out"
          >
            📄 Download CV
          </a>
        </div>
      </section>
    </div>
  );
};

export default IntroSection;
