import React from 'react';
import './services.css';
import theme from '../assets/theme_pattern.svg';
import data from '../assets/services_data.js';
import arrow from '../assets/arrow_icon.svg';

const Services = ({ refProp }) => {
  return (
    <div ref={refProp} id="skills" className="services">
      <div className="services-title">
        <h1>My Skills</h1>
        <img src={theme} alt="theme pattern" />
      </div>

      <div className="services-container">
        {data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <div className="services-readmore">
              <p>Read More</p>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
