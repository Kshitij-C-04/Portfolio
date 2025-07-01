// src/components/Tech.jsx

import React, { useState } from 'react';
import './tech.css';
import theme from '../../assets/theme_pattern.svg';
import techData from '../../assets/techData.js';

const Tech = () => {
  const [activeTab, setActiveTab] = useState('Web Development');

  return (
    <div id='tech' className='tech'>
      <div className="tech-title">
        <h1>Technologies</h1>
        <img src={theme} alt="background pattern" />
      </div>

      {/* Tabs */}
      <div className="tabs">
        {Object.keys(techData).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tech-content">
        {techData[activeTab].map((tech, index) => (
          <div key={index} className="tech-item">
            <img src={tech.logo} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
