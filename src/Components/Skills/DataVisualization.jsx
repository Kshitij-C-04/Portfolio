import React from 'react';
import SkillDetail from './SkillDetail';
import visual from '../../assets/visual.png';
import power from '../../assets/power.png';

const DataVisualization = () => {
  const skillData = {
    s_img: visual,
    s_no: "05",
    s_name: "Data Analytics & Visualization",
    description:
      "I transform raw data into actionable insights using tools like Power BI. By designing interactive dashboards and custom visualizations, I enable clear communication of trends, patterns, and performance metrics. My approach focuses on data storytelling, real-time analysis, and crafting visual reports that support informed decision-making.",
    technologies: [
      { name: "Power BI", logo: power } // ✅ use 'logo' to match SkillDetail
    ],
    
  };

  return <SkillDetail skill={skillData} />;
};

export default DataVisualization;
