import { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Logistics Management System',
      description: [
            'Developed login and signup functionality with robust email, phone, and password validation.',
            'Enhanced user security and reduced errors during registration and login processes.',
            'Implemented role-based access control for different user types.'
      ],  
      image: '/src/assets/images/project1.png',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      category: 'Backend',
      liveLink: 'https://logistics-sid2.onrender.com/',
      codeLink: 'https://github.com/Swarit172/Logistics-'
    },
    {
      id: 2,
      title: 'Chatroom',
      description: [
            'Uses Socket.IO to enable real-time communication, allowing users to send and receive messages instantly within chat rooms.',
            'Allows users to join specific chat rooms by entering a name and room name. Users within a room can see a list of current participants.',
            'Supports multiple rooms, with a dynamic list showing all active rooms. Users can join any available room or create a new one.'
      ],  
      image: '/src/assets/images/project3.png',
      technologies: ['JavaScript', 'Socket.IO', 'Node.js'],
      category: '',
      // liveLink: '',
      codeLink: 'https://github.com/Swarit172/chat-room'
    },
    {
      id: 3,
      title: 'E-Commerce',
      description: [
            'Developed and structured a responsive e-commerce website with key sections, including About, Blog, and Cart, ensuring an intuitive user interface across multiple devices.',
            'Enhanced user security and reduced errors during registration and login processes',
            'Developed responsive user interface to ensure compatibility across various devices.'
      ],  
      image: '/src/assets/images/project2.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'Static',
      liveLink: 'https://e-commerce-7zdi.onrender.com/',
      codeLink: 'https://github.com/Swarit172/E-Commerce'
    },
    
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Check out some of my recent work</p>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;