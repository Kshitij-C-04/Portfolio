import React from 'react';
import SkillDetail from './SkillDetail';
import quality from '../../assets/quality.png';

const QualitySkills = () => {
  const skillData = {
    s_img: quality,
    s_no: "06",
    s_name: "Quality Skills",
    description:
      "Alongside technical expertise, I value and practice a strong set of personal and professional qualities that contribute to team success and continuous growth. These skills help me adapt quickly, work efficiently, and consistently improve.",

    features: [
      {
        title: "Teamwork",
        content:
          "I thrive in collaborative environments, contribute ideas openly, and respect diverse perspectives to achieve shared goals.",
      },
      {
        title: "Quick Learner",
        content:
          "I quickly adapt to new tools and technologies, picking up complex concepts efficiently and applying them to real-world problems.",
      },
      {
        title: "Eager to Learn & Grow",
        content:
          "Curious by nature, I actively seek opportunities to expand my skill set and stay updated with industry trends.",
      },
      {
        title: "Dedicated",
        content:
          "I approach every task with focus and commitment, ensuring high-quality outcomes and consistent progress.",
      },
      {
        title: "Exploration",
        content:
          "Always experimenting with new frameworks and ideas, I enjoy stepping out of my comfort zone to broaden my capabilities.",
      },
      {
        title: "Time Management",
        content:
          "I effectively prioritize tasks, meet deadlines, and maintain balance across multiple responsibilities.",
      },
    ],
  };

  return <SkillDetail skill={skillData} />;
};

export default QualitySkills;
