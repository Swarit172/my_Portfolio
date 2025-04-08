import { useContext } from 'react';
// import { ThemeContext } from '../../context/ThemeContext';
import './Hero.css';

const Hero = () => {
  // const { darkMode } = useContext(ThemeContext);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Swarit Ajay</span>
          </h1>
          <h2 className="hero-subtitle">Web Developer</h2>
          <p className="hero-description">
            I build modern, responsive web applications with a focus on user experience and clean code.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Swarit172" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/swarit172" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://leetcode.com/u/SAjay001" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <img src="/src/assets/icons/leetcode.svg" alt="LeetCode" className="leetcode-icon" />
            </a>
            <a href="https://x.com/AjaySwarit" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/src/assets/images/profile.jpg" 
            alt="Swarit Image" 
            // className={`profile-image ${darkMode ? 'dark-border' : ''}`}
            className='profile-image'
          />
          <div className="hero-shape"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;