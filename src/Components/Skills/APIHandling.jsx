import React from 'react';
import SkillDetail from './SkillDetail';
import api from '../../assets/api.png';
import postman from '../../assets/postman.svg';

const APIHandling = () => {
  const skillData = {
    s_img: api,
    s_no: "04",
    s_name: "API Handling",
    description:
      "I specialize in integrating and managing RESTful APIs to enable seamless communication between front-end applications and back-end services. With strong expertise in tools like Postman, I ensure reliable data exchange, handle authentication mechanisms, and maintain clean, well-documented API workflows. My focus is on efficiency, error handling, and delivering consistent and optimized API-driven features.",
    technologies: [
      { name: "Postman", logo: postman } // ✅ Use 'logo' for consistency
    ],
    
  };

  return <SkillDetail skill={skillData} />;
};

export default APIHandling;
