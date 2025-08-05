// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Home/navbar';
import Hero from './Components/Home/hero';
import About from './Components/Home/about';
import Services from './Components/Home/services';
import Projects from './Components/Home/projects';
import Contact from './Components/Home/contact';
import Tech from './Components/Home/tech';
import ProjectMore from './Components/project_more';
import ProjectDetail from './Components/project_detail';
import Experience from './Components/Home/experience';
import AboutMore from './Components/About_more';

// Import Skill Components
import WebDevelopment from './Components/Skills/WebDevelopment';
import UIUXDesign from './Components/Skills/UIUXDesign';
import AppDevelopment from './Components/Skills/AppDevelopment';
import APIHandling from './Components/Skills/APIHandling';
import DataVisualization from './Components/Skills/DataVisualization';
import QualitySkills from './Components/Skills/QualitySkills';

const Home = () => (
  <>
    <Hero />
    <div id="about"><About /></div>
    <div id="services"><Services /></div>
    <div id="tech"><Tech /></div>
    <div id="mywork"><Projects /></div>
    <div id="contact"><Contact /></div>
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<ProjectMore />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about-more" element={<AboutMore />} />
        
        {/* Skill Routes */}
        <Route path="/skills/web-development" element={<WebDevelopment />} />
        <Route path="/skills/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/skills/app-development" element={<AppDevelopment />} />
        <Route path="/skills/api-handling" element={<APIHandling />} />
        <Route path="/skills/data-visualization" element={<DataVisualization />} />
        <Route path="/skills/quality-skills" element={<QualitySkills />} />
      </Routes>
    </Router>
  );
};

export default App;
