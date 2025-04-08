import { useState } from 'react';
// import ProjectCard from './ProjectCard';
import './Projects.css';

// ProjectCard.jsx
const ProjectCard = ({ project }) => {
    return (
      <div className="project-card">
        <div className="project-img-container">
          <img src={project.image} alt={project.title} className="project-img" />
          <div className="project-overlay">
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fab fa-github"></i> View Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <ul className="project-description">
            {project.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <div className="project-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="project-tech">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;