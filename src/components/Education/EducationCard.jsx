import React from 'react';
import './Education.css';

const EducationCard = ({ education }) => {
  const { degree, institution, location, duration } = education;

  return (
    <div className="education-card">
      <div className="education-card-header">
        <h3>{degree}</h3>
        <div className="institution-info">
          <span className="institution">{institution}</span>
          <span className="location">{location}</span>
        </div>
        <span className="duration">{duration}</span>
      </div>
    </div>
  );
};

export default EducationCard;