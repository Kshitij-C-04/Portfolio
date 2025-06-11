import React from 'react';
import './about.css';
import theme from '../assets/theme_pattern.svg';

const About = ({ refProp }) => {
  return (
    <div ref={refProp} id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="theme pattern" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          {/* You can add an image or animation here if needed */}
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              Enthusiastic learner with a strong passion for coding and technology. Dedicated to continuous personal and professional growth through hands-on experience. Skilled in problem-solving and eager to embrace new challenges. Committed to leveraging coding skills to create innovative solutions.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure totam numquam dolorem.
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
          <h1>9.17</h1>
          <p>CGPA</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
