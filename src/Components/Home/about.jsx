import React from 'react';
import './about.css';
import theme from '../../assets/theme_pattern.svg';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';

const About = ({ refProp }) => {
  const navigate = useNavigate();
  return (
    <div ref={refProp} id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="theme pattern" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          {/* Optional image or animation */}
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              Enthusiastic learner with a strong passion for coding and technology. Dedicated to continuous personal and professional growth through hands-on experience. Skilled in problem-solving and eager to embrace new challenges. Committed to leveraging coding skills to create innovative solutions.
            </p>
            
            
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>English</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>Hindi</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>Marathi</p>
              <hr style={{ width: "95%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>
            <CountUp end={9.27} duration={0.8} decimals={2} enableScrollSpy scrollSpyOnce />
          </h1>
          <p>CGPA</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>
            <CountUp end={10} duration={1.2} suffix="+" enableScrollSpy scrollSpyOnce />
          </h1>
          <p>Projects Completed</p>
        </div> 
        
      </div>
      <div className="about-buttons">
        <div className="hero-resume" onClick={() => navigate('/experience')}>
          Experience
        </div>
        <div className="hero-resume" onClick={() => navigate('/about-more')}>
          About Me
        </div>
      </div>
    </div>
    
  );
};

export default About;
