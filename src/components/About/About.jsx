import './About.css';

const About = () => {
  // Replace these with your actual details
  const details = {
    name: 'Swarit Ajay',
    title: 'Web Developer',
    email: 'swa172acc@gmail.com',
    location: 'Noida, Uttar Pradesh, India',
    availability: 'Available for freelance, new position',
    experience: '0+ years',
    education: 'Information Technology, KIET Group Of Institutions',
    bio: `I'm a passionate web developer with a strong focus on creating responsive and user-friendly web applications. With a background in information technology , I specialize in building modern applications that deliver good user experiences.
    
    I enjoy solving complex problems and continuously learning new technologies to stay at the forefront of web development trends. When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects.`
  };
  
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
        
        <div className="about-content">
          <div className="about-image">
            <div className="about-img-container">
              <img src="/src/assets/images/profile.jpg" alt={details.name} />
            </div>
            <div className="about-shape"></div>
          </div>
          
          <div className="about-text">
            <h3>Hello, I'm {details.name}</h3>
            <h4>{details.title}</h4>
            
            <p className="about-bio">{details.bio}</p>
            
            <div className="about-details">
              <div className="about-detail">
                <h5>Email</h5>
                <p>{details.email}</p>
              </div>
              <div className="about-detail">
                <h5>Location</h5>
                <p>{details.location}</p>
              </div>
              <div className="about-detail">
                <h5>Availability</h5>
                <p>{details.availability}</p>
              </div>
              <div className="about-detail">
                <h5>Experience</h5>
                <p>{details.experience}</p>
              </div>
            </div>
            
            <div className="about-actions">
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <a href="https://tinyurl.com/Swarit172" download className="btn btn-secondary" target='_blank'>Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;