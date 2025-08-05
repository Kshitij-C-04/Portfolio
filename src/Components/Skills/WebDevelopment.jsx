import React from 'react';
import SkillDetail from './SkillDetail';
import webs from '../../assets/web.png';
import techData from '../../assets/techData';

const WebDevelopment = () => {
  // Filter out "React Native"
  const filteredTech = techData['Web Development'].filter(
    (tech) => tech.name !== 'React Native'
  );

  const skillData = {
    s_img: webs,
    s_no: "01",
    s_name: "Web Development",
    description:
      "I specialize in crafting modern, responsive, and user-centric web applications using the latest web technologies. With a strong foundation in HTML, CSS, and JavaScript, I build interfaces that are both visually appealing and functionally robust. I work extensively with React.js to develop scalable single-page applications. Whether it's a personal portfolio, an e-commerce platform, or a content-driven site, I ensure every project reflects best practices in performance, accessibility, and responsive design. I'm also continuously exploring frameworks like Next.js to stay ahead in the ever-evolving web ecosystem.",
    technologies: filteredTech, // ✅ React Native removed
  };

  return <SkillDetail skill={skillData} />;
};

export default WebDevelopment;
