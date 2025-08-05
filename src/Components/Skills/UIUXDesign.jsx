import React from 'react';
import SkillDetail from './SkillDetail';
import ui from '../../assets/ui.png';
import techData from '../../assets/techData';

const UIUXDesign = () => {
  const filteredTools = techData['Tools'].filter(
    (tool) => tool.name !== 'PowerBI'
  );

  const skillData = {
    s_img: ui,
    s_no: "02",
    s_name: "UI/UX Design",
    description:
      "I craft intuitive, visually engaging, and user-centric interfaces that enhance both user satisfaction and functionality. My approach is rooted in user-centered design principles, using tools like Figma and Canva to transform ideas into interactive, pixel-perfect experiences. From wireframing and prototyping to visual storytelling, I focus on building designs that balance aesthetics and usability across web and mobile platforms.",
    technologies: filteredTools, // ✅ Power BI excluded here
    
  };

  return <SkillDetail skill={skillData} />;
};

export default UIUXDesign;
