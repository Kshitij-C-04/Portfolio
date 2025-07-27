import React, { useState } from 'react';
import './services.css';
import theme from '../../assets/theme_pattern.svg';
import data from '../../assets/services_data.js';
import arrow from '../../assets/arrow_icon.svg';
import { motion, AnimatePresence } from 'framer-motion';

const Services = ({ refProp }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const handleNext = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };
  
  return (
    <div ref={refProp} id="skills" className="services">
      <div className="services-title">
        <h1>My Skills</h1>
        <img src={theme} alt="theme pattern" />
      </div>

      <div className="services-container">
        {/* Desktop View */}
        {data.map((service, index) => (
          <motion.div
            key={index}
            className="services-format desktop-only"
            initial={{ opacity: 0, x: -125 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <div className="services-readmore">
              <p>Read More</p>
              <img src={arrow} alt="arrow" />
            </div>
          </motion.div>
        ))}

        {/* Mobile Carousel */}
        <div className="mobile-carousel">
          <button className="carousel-btn prev" onClick={handlePrev}>
            &#8249;
          </button>
          <AnimatePresence mode='wait' initial={false}>
            <motion.div
              key={currentIndex}
              className="services-format"
              initial={({ opacity: 0, x: currentIndex > prevIndex ? 100 : -100 })}
              animate={{ opacity: 1, x: 0 }}
              exit={({ opacity: 0, x: currentIndex > prevIndex ? -100 : 100 })}
              transition={{
                opacity: { duration: 0.3 },
                x: { type: "spring", stiffness: 300, damping: 30 }
              }}
            >
              <h3>{data[currentIndex].s_no}</h3>
              <h2>{data[currentIndex].s_name}</h2>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow} alt="arrow" />
              </div>
            </motion.div>
          </AnimatePresence>
          <button className="carousel-btn next" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
