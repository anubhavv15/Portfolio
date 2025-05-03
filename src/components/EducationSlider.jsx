import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const educationData = [
  {
    degree: "Bachelor of Computer Application",
    institution: "IIMT University",
    year: "2022 - 2025",
    details: "Graduated with honors. Specialized in frontend development and UI/UX design.",
    icon: <FaUniversity className="text-5xl text-purple-600 mb-6 drop-shadow-md" />,
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "The Avenue Public School",
    year: "2020 - 2021",
    details: "Studied Commerce.",
    icon: <FaSchool className="text-5xl text-purple-600 mb-6 drop-shadow-md" />,
  },
  {
    degree: "Secondary (10th)",
    institution: "The Avenue Public School",
    year: "2018 - 2019",
    details: "Focused on core academic foundation and computer basics.",
    icon: <FaSchool className="text-5xl text-purple-600 mb-6 drop-shadow-md" />,
  },
];

const slideVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const EducationSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section
      id="education"
      className="relative h-[600px] flex flex-col justify-center items-center bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 px-4 scroll-mt-24 overflow-hidden"
    >

      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/30 via-white/20 to-transparent pointer-events-none animate-pulse" />

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-purple-800 mb-16 relative z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <FaGraduationCap className="inline mr-3 text-purple-600 drop-shadow-md" />
        My Education
      </motion.h2>

      <div className="w-full max-w-4xl relative z-10">
        <Slider {...settings}>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="px-2"
              variants={slideVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl px-10 py-12 text-center border border-purple-200 hover:scale-105 transform transition duration-500 ease-in-out hover:shadow-purple-300/50">
                <div className="flex flex-col items-center justify-center">
                  {edu.icon}
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-medium text-gray-700">{edu.institution}</p>
                  <p className="text-sm text-gray-500 italic mb-4">{edu.year}</p>
                  <p className="text-gray-700 max-w-md mx-auto leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default EducationSlider;
