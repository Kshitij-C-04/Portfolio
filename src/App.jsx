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
      </Routes>
    </Router>
  );
};

export default App;
