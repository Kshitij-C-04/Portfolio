import React from 'react';
import './hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleOpenPDF = () => {
    window.open('/Kshitij_resume.pdf', '_blank');
  };
  return (
    <div id="hero" className="hero">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}                // Start from left (-X)
        whileInView={{ opacity: 1, x: 0 }}                // Animate to center (X = 0)
        transition={{ duration: 0.8, ease: 'easeOut' }}   // Smooth ease
        viewport={{ once: true, amount: 0.5 }}            // Trigger when 50% visible
      >
        <span>I am Kshitij Chaware,</span> Web Developer based in Mumbai.
      </motion.h1>

      <p></p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume" onClick={handleOpenPDF}>My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
