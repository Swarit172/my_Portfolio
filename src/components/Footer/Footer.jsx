import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home">
              Swarit Ajay<span className="logo-dot">.</span>
            </a>
            <p>Building digital experiences that make a difference.</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#Education">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p><i className="fas fa-envelope"></i> swa172acc@gmail.com</p>
            <p><i className="fas fa-phone"></i> +91 7456834093</p>
            <p><i className="fas fa-map-marker-alt"></i> Noida, Uttar Pradesh</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Your Name. All Rights Reserved.</p>
          <p>Designed & Built with <span className="heart">❤</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;