import React from 'react';
import './projects.css';
import theme from '../assets/theme_pattern.svg';
import mydata from '../assets/mywork_data.js';
import arrow from '../assets/arrow_icon.svg';

const Projects = ({ refProp }) => {
  return (
    <div ref={refProp} className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme} alt="theme pattern" />
      </div>

      <div className="mywork-container">
        {mydata.map((work, index) => (
          <img key={index} src={work.w_img} alt={`Project ${index + 1}`} />
        ))}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="arrow icon" />
      </div>
    </div>
  );
};

export default Projects;
