import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import mydata from "../assets/projects";
import techData from "../assets/techData";
import "./project_detail.css";

// Flatten techData once at the top
const flatTechData = Object.values(techData)
  .flat()
  .reduce((acc, item) => {
    acc[item.name] = item;
    return acc;
  }, {});

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = mydata[parseInt(id)];

  return (
    <div className="project-detail">
      {/* Back button */}
      <div className="back-button">
        <button onClick={() => navigate(-1)}>← Back to Projects</button>
      </div>

      {/* Image and Info */}
      <div className="top-section">
        <div className="image-container">
          <img src={project.w_img} alt={project.title} />
        </div>
        <div className="info-container">
          <h1>{project.w_name}</h1>

          {project.tech && (
            <div className="tech-stack">
              <h3>Technologies used:</h3>
              <div className="tech-icons">
                {project.tech.map((techName, index) => {
                  const tech = flatTechData[techName];
                  if (!tech) return null;
                  return (
                    <div className="tech-item" key={index}>
                      <img src={tech.logo} alt={tech.name} />
                      <span>{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {project.link && (
            <a
              className="live-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Visit Live Project
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="description-section">
        <h3>Project Description</h3>
        <p>{project.description}</p>
      </div>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="gallery-section">
          <h3>Project Gallery</h3>
          <div className="gallery-grid">
            {project.gallery.map((img, idx) => (
              <img key={idx} src={img} alt={`Gallery ${idx + 1}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
