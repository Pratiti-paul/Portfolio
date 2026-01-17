import React from 'react';
import './Projects.css';
import medicoImg from '../../assets/medico.png';
import cineverseImg from '../../assets/cineverse.png';

const projects = [
  {
    title: "Medico",
    description: "It is a full-stack healthcare platform designed for booking doctor appointments and ordering medicines online. It includes secure JWT authentication, RBAC a mock payment workflow, order and appointment history, and an admin dashboard for managing platform data.",
    tags: ["JavaScript","React.js", "Node.js + Express.js", "MongoDB"],
    liveLink: "https://medico-sooty-omega.vercel.app/",
    githubLink: "https://github.com/Pratiti-paul/Medico",
    image: medicoImg
  },
  {
    title: "Cineverse",
    description: "CineVerse is a modern movie discovery platform featuring a smart recommendation system, genre browsing, a personal watchlist and personalized collection feature where you can add your own reviews too.",
    tags: ["JavaScript","React.js", "Node.js + Express.js", "PostgreSQL"],
    liveLink: "https://cineversefrontend.vercel.app/",
    githubLink: "https://github.com/Pratiti-paul/Cineversefrontend",
    image: cineverseImg
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Selected <span className="highlight">Projects</span></h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-preview">
                {project.image && <img src={project.image} alt={project.title} />}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                
                <div className="project-links">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                        Live Demo <span className="arrow">↗</span>
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-btn outline">
                        GitHub
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
