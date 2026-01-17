import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing products, orders, and analytics.",
    tags: ["React", "Chart.js", "Node.js"]
  },
  {
    title: "Social Media App",
    description: "Real-time social platform with messaging and live notifications.",
    tags: ["Next.js", "Socket.io", "MongoDB"]
  },
  {
    title: "Portfolio v1",
    description: "My first personal portfolio showcasing early web development work.",
    tags: ["HTML", "CSS", "JavaScript"]
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
              <div className="project-preview"></div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
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
