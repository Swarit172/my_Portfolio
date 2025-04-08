import React from 'react';
import EducationCard from './EducationCard';
import './Education.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Education = () => {
  const [sectionRef, isVisible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology in Information Technology",
      institution: "KIET Group Of Institutions",
      location: "Ghaziabad, Uttar Pradesh",
      duration: "November'20 - August'24"
    },
    {
      id: 2,
      degree: "Senior Secondary",
      institution: "GRM Sr. Sec. School",
      location: "Bareilly, Uttar Pradesh",
      duration: "April'19 - April'20"
    },
    {
      id: 3,
      degree: "High School",
      institution: "GRM Sr. Sec. School",
      location: "Bareilly, Uttar Pradesh",
      duration: "April'17 - April'18"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container" ref={sectionRef}>
        <div className={`section-header ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2>Education</h2>
          <div className="section-divider"></div>
          <p>My academic background and qualifications</p>
        </div>
        
        <div className="education-container">
          {educationData.map((education, index) => (
            <div 
              key={education.id} 
              className={`education-item ${isVisible ? 'animate-slide-up' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <EducationCard education={education} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;