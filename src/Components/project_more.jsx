import React from 'react'
import Navbar from './navbar'
import './project_more.css'
import mydata1 from '../assets/projects.js';
import theme from '../assets/theme_pattern.svg';

const project_more = () => {
  return (
    <div className='project-more'>
        <Navbar />
        <div className="promore-title">
            <h1>Projects</h1>
            <img src={theme} alt="" />
        </div>
      
    
    <div className="promore-container">
        {mydata1.map((work, index) => (
          <img key={index} src={work.w_img} alt={`Project ${index + 1}`} />
        ))}
      </div>
      </div>
  )
}

export default project_more
