import React from 'react';
import { useNavigate } from 'react-router-dom';
import './skill_detail.css';

const SkillDetail = ({ skill }) => {
  const navigate = useNavigate();

  // Helper to check if features are card-style (object with title/content)
  const isCardFeature = skill.features?.length && typeof skill.features[0] === 'object';

  return (
    <div className="skill-detail">
      <div className="skill-top-section">
        <div className="skill-image-container">
          <img src={skill.s_img} alt={skill.s_name} />
        </div>

        <div className="skill-info-container">
          <h1>{skill.s_name}</h1>

          {skill.technologies && (
            <div className="tech-stack">
              <h3>Technologies:</h3>
              <div className="tech-icons">
                {skill.technologies.map((tech, index) => (
                  <div className="tech-item" key={index}>
                    <img src={tech.logo} alt={tech.name} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="skill-description">
        <h3>Description</h3>
        <p>{skill.description}</p>
      </div>

      {skill.features && (
        <div className="skill-features">
          <h3>Key Qualities</h3>
          {isCardFeature ? (
            <div className="features-grid">
              {skill.features.map((item, index) => (
                <div className="feature-item" key={index}>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <ul className="features-list">
              {skill.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SkillDetail;
