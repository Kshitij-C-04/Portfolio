import React from 'react';
import './experience.css';
import theme from '../../assets/theme_pattern.svg';
import DigiCompCertificate from '../../assets/DigiComp_certificate.pdf';
import WolfXCertificate from '../../assets/WolfX_certificate.pdf';

const Experience = ({ refProp }) => {
  return (
    <div ref={refProp} id="experience" className="experience">
      <div className="experience-title">
        <h1>Experience</h1>
        <img src={theme} alt="theme pattern" />
      </div>
      <div className="experience-content">
        {/* DigiCompanions Card */}
        <div className="experience-card">
          <div className="experience-header">
            <h2>Web Developer Intern</h2>
            <p className="company">DigiCompanions</p>
            <p className="duration">16/05/2025 – 15/07/2025</p>
          </div>
          <div className="experience-details">
            <ul>
              <li>Worked on <b>live client projects</b> in an offline office environment. Specialized in building and customizing WordPress websites based on client requirements. Collaborated with the team to deliver tailored web solutions and gained hands-on experience in client communication and project delivery. Received a stipend of 10k for the internship duration.</li>
            </ul>
          </div>
          <button className="certificate-btn" onClick={() => window.open(DigiCompCertificate, '_blank')}>Certificate</button>
        </div>
        {/* WolfX Card */}
        <div className="experience-card">
          <div className="experience-header">
            <h2>Frontend Developer</h2>
            <p className="company">WolfX Digital Agency</p>
            <p className="duration">12/2024 – 03/2025</p>
          </div>
          <div className="experience-details">
            <ul>
              <li>Developed responsive and interactive user interfaces using React.js and Next.js. Collaborated with the design team to convert UI/UX designs into functional components. Gained practical experience in frontend development and improved proficiency in creating mobile-friendly web pages.</li>
            </ul>
          </div>
          <button className="certificate-btn" onClick={() => window.open(WolfXCertificate, '_blank')}>Certificate</button>
        </div>
        {/* Placement Coordinator Card */}
        <div className="experience-card">
          <div className="experience-header">
            <h2>Placement Coordinator</h2>
            <p className="company">Training and Placement Office, KJSCE</p>
            <p className="duration">07/2024 – 02/2025</p>
          </div>
          <div className="experience-details">
            <ul>
              <li>Coordinated campus recruitment activities, maintained communication between companies and students, and ensured smooth execution of placement schedules. Managed logistics, created structured documentation, and supported the student body through each recruitment cycle.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;