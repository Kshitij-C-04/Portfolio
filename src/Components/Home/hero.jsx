import React from 'react';
import './hero.css';
import { motion } from 'framer-motion';
import resume from "../../assets/Kshitij's Resume.pdf";
import heroBg from '../../assets/hero_banner.jpg';

  

const Hero = () => {
  const handleOpenPDF = () => {
    window.open(resume, '_blank');
  };

  const handleConnectClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero"
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <span>I am Kshitij Chaware,</span> Web Developer based in Mumbai.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Turning creative ideas into elegant web experiences, one pixel at a time.
      </motion.p>

      <motion.div
        className="hero-action"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="hero-connect" onClick={handleConnectClick}>
          Connect With Me
        </div>
        <div className="hero-resume" onClick={handleOpenPDF}>
          My Resume
        </div>
      </motion.div>
      
    </div>
    
  );
};

export default Hero;
