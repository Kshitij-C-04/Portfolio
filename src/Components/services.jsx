import React from 'react';
import './services.css';
import theme from '../assets/theme_pattern.svg';
import data from '../assets/services_data.js';
import arrow from '../assets/arrow_icon.svg';
import { motion } from 'framer-motion';

const Services = ({ refProp }) => {
  return (
    <div ref={refProp} id="skills" className="services">
      <div className="services-title">
        <h1>My Skills</h1>
        <img src={theme} alt="theme pattern" />
      </div>

      <div className="services-container">
        {data.map((service, index) => (
          <motion.div
            key={index}
            className="services-format"
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
      </div>
    </div>
  );
};

export default Services;
