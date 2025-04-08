import './Skills.css';

const Skills = () => {
  const skillCategories = {
    programming: {
      title: 'Programming Languages',
      skills: [
        { name: 'C++', level: 'Intermediate' },
        { name: 'Python', level: 'Basic' },
        { name: 'SQL', level: 'Intermediate' },
      ]
    },
    web: {
      title: 'Web Development',
      skills: [
        { name: 'HTML', level: 'Advanced' },
        { name: 'CSS', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Express', level: 'Intermediate' },
      ]
    },
    databases: {
      title: 'Databases',
      skills: [
        // { name: 'MySQL', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Intermediate' },
      ]
    },
    tools: {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Postman', level: 'Intermediate' },
        { name: 'Git', level: 'Basic' },
      ]
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">What I bring to the table</p>         

        {Object.entries(skillCategories).map(([key, category]) => (
          <div key={key} className="skills-content">
            <h3 className="skills-category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
