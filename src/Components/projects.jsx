import React from 'react';
import './projects.css';
import theme from '../assets/theme_pattern.svg';
import mydata from '../assets/mywork_data.js';
import arrow from '../assets/arrow_icon.svg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = ({ refProp }) => {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate('/all-projects');
  };

  return (
    <motion.div
      ref={refProp}
      id="My Projects"
      className="mywork"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme} alt="theme pattern" />
      </div>

      <motion.div
        className="mywork-container"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {mydata.map((work, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img src={work.w_img} alt={`Project ${index + 1}`} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mywork-showmore"
        onClick={handleShowMore}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <p>Show More</p>
        <img src={arrow} alt="arrow icon" />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
