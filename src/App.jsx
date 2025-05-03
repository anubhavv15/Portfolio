import React from 'react';
import './App.css';
import Intro from './components/Intro';
import SkillsSection from './components/SkillsSection';
import EducationSlider from './components/EducationSlider';
// App.jsx or index.jsx

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactFooter from './components/contact/ContactFooter';
import IntroSection from './components/IntroSection/IntroSection';
import ProjectsSection from './components/ProjectSection';
import Navbar from './components/navbar/Navbar';
const App = () => {
  return (
    <div>
        <Navbar />
        <Intro />
        <IntroSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSlider />
        <ContactFooter />



    </div>
  );
};

export default App;
