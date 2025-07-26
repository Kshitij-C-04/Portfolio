import React from 'react';
import './About_more.css';
import theme from '../assets/theme_pattern.svg';

const AboutMore = () => {
  return (
    <div className="about-more">
      <div className="about-more-title">
        <h1>About Me</h1>
        <img src={theme} alt="theme pattern" />
      </div>

      <div className="about-more-content">
        {/* Wrap all section cards in a grid container */}
        <div className="sections-container">

          {/* Education Section */}
          <div className="section education">
            <h2>Education</h2>
            <div className="education-card">
              <h3>K.J. Somaiya College of Engineering</h3>
              <p className="course">BTech - Information Technology</p>
              <p className="duration">2022 - 2026</p>
              <p className="grade">Current CGPA: 8.71</p>
            </div>
            <div className="education-card">
              <h3>Arya Gurukul Jr College</h3>
              <p className="course">HSC - Science</p>
              <p className="duration">2022</p>
              <p className="grade">Percentage: 70%</p>
            </div>
            <div className="education-card">
              <h3>Universal High School</h3>
              <p className="course">ICSE</p>
              <p className="duration">2020</p>
              <p className="grade">Percentage: 92.8%</p>
            </div>
          </div>

          {/* Hobbies Section */}
          <div className="section hobbies">
            <h2>Hobbies & Interests</h2>
            <div className="hobbies-grid">
              <div className="hobby-card">
                <h3>🏏 Sports</h3>
                <p>Passionate about strategy and team games like Cricket</p>
              </div>
              <div className="hobby-card">
                <h3>📚 Reading</h3>
                <p>Tech blogs and autobiographies</p>
              </div>
              <div className="hobby-card">
                <h3>💻 Exploring</h3>
                <p>Learning new tech related updates and trends</p>
              </div>
              <div className="hobby-card">
                <h3>✈️ Traveling</h3>
                <p>Exploring new places and experiences</p>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="section contact-info">
            <h2>Contact Information</h2>
            <div className="info-grid">
              <div className="info-card">
                <h3>📧 Email</h3>
                <p>kshitijchaware@gmail.com</p>
              </div>
              <div className="info-card">
                <h3>📱 Phone</h3>
                <p>+91 8169562904</p>
              </div>
              <div className="info-card">
                <h3>📍 Location</h3>
                <p>Mumbai, Maharashtra, India</p>
              </div>
              <div className="info-card">
                <h3>🔗 Github</h3>
                <p>https://github.com/Kshitij-C-04</p>
              </div>
            </div>
          </div>

        </div> {/* end of .sections-container */}
      </div>
    </div>
  );
};

export default AboutMore;
