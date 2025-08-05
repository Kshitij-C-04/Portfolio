import React from 'react';
import SkillDetail from './SkillDetail';
import app_development from '../../assets/app_development.png';
import react from '../../assets/reactn.png';

const AppDevelopment = () => {
  const skillData = {
    s_img: app_development,
    s_no: "03",
    s_name: "App Development",
    description:
      "I develop cross-platform mobile applications using React Native, ensuring a consistent and high-performance experience across both Android and iOS devices. By integrating native device features and following performance optimization best practices, I build apps that are fast, responsive, and tailored to real user needs. From prototyping to deployment on app stores, I focus on delivering scalable and maintainable mobile solutions.",
    technologies: [
      { name: "React Native", logo: react } // ✅ Use 'logo' to match SkillDetail logic
    ],
    
  };

  return <SkillDetail skill={skillData} />;
};

export default AppDevelopment;
