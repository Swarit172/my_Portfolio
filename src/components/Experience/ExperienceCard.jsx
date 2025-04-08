import React, { useState } from 'react';
import './Experience.css';

const ExperienceCard = ({ experience }) => {
  const { role, company, duration, description, technologies, achievements } = experience;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="experience-card">
      <div className="card-header">
        <h3>{role}</h3>
        <span className="company">{company}</span>
        <span className="duration">{duration}</span>
      </div>
      
      <div className="card-body">
        <p>{description}</p>
        
        <div className="technologies">
          <h4>Technologies</h4>
          <div className="tech-tags">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        
        <div className={`achievements ${isExpanded ? 'expanded' : ''}`}>
          <h4>Description</h4>
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        
        {achievements.length > 2 && (
          <button 
            className="expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;