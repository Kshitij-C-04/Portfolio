import React from 'react';
import './hero.css';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
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
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1>
              <span>I am Kshitij Chaware,</span> Web Developer based in Mumbai.
            </h1>
            <p>
              Turning creative ideas into elegant web experiences, one pixel at a time.
            </p>
          </motion.div>

          <motion.div
            className="code-animation"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                `// Hi, I'm Kshitij\nconst role = "Web Developer";\nconst tech_used = [React JS , CSS , Trae AI]`,
                2000,
                `// Let's explore new tech together!`,
                2000,
              ]}
              wrapper="pre"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: '1.2rem',
                textAlign: 'left',
                fontFamily: 'Fira Code, monospace',
              }}
            />
          </motion.div>
        </div>

        {/* Buttons Centered Below */}
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
    </div>
  );
};

export default Hero;
