import React from 'react';
import ExperienceCard from './ExperienceCard';
import './Experience.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Experience = () => {
  const [sectionRef, isVisible] = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const experiences = [
    {
      id: 1,
      role: 'Intern',
      company: 'DevsNest',
      duration: 'June 2022 - Desember 2022',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      achievements: [
        'Completed an intensive bootcamp covering web development fundamentals, including HTML, CSS, and JavaScript.',
        'Worked on structured assignments and projects to build interactive web applications, improving front-end development skills.',
        'Gained hands-on experience in data structures and algorithms, solving coding problems to strengthen problem-solving abilities.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container" ref={sectionRef}>
        <div className={`section-header ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2>Professional Experience</h2>
          <div className="section-divider"></div>
          <p>My professional journey and roles I've had over the years</p>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item ${isVisible ? 'animate-slide-up' : ''}`} 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ExperienceCard experience={exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;