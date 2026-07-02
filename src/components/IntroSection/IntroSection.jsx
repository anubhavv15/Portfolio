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
            As a passionate web developer, I am deeply committed to creating digital solutions that are both functional and user-friendly. My focus is on crafting seamless, intuitive web experiences that allow users to interact effortlessly with the interface. I prioritize designing with the user in mind, ensuring that every project is tailored to meet their needs and expectations. Whether it's building a responsive website or developing a complex web application, my goal is to deliver high-quality, user-driven digital experiences that are smooth, engaging, and easy to navigate....
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
