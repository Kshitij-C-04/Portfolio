import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Home/navbar.jsx';
import './project_more.css';
import mydata1 from '../assets/projects.js';
import theme from '../assets/theme_pattern.svg';

const ProjectMore = () => {
  const navigate = useNavigate(); // ✅ needed for navigation

  const handleCardClick = (index) => {
    navigate(`/project/${index}`);
  };

  return (
    <div className='project-more'>
      <Navbar />

      <div className="promore-title">
        <h1>Projects</h1>
        <img src={theme} alt="" />
      </div>

      <div className="promore-container">
        {mydata1.map((work, index) => (
          <div
            key={index}
            className="promore-card"
            onClick={() => handleCardClick(index)} // ✅ clickable card
            style={{ cursor: 'pointer' }}
          >
            <img src={work.w_img} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectMore;
