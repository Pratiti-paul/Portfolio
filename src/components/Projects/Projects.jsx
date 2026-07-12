import React, { useState } from "react";
import {
  FaDownload,
  FaGithub,
  FaGlobe,
  FaProductHunt,
} from "react-icons/fa";
import "./Projects.css";

import medicoImg from "../../assets/medico.png";
import cineverseImg from "../../assets/cineverse.png";
import repoinsightImg from "../../assets/repoinsight.png";
import neurofixImg from "../../assets/neurofix.png";
import staynearImg from "../../assets/StayNear.png";
import spotifyImg from "../../assets/spotify.png";
import swiggyImg from "../../assets/swiggy.png";
import airbnbImg from "../../assets/airbnb.png";
import puddlyImg from "../../assets/Puddly.png";

const projects = [
  {
    title: "StayNear",
    subtitle: "Student Accommodation Platform",
    category: "development",
    description:
      "A full-stack platform that helps students discover verified rental properties near their colleges.",
    tags: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
    features: ["Verified listings", "Role-based access", "Secure inquiries"],
    liveLink: "https://stayoutnear.vercel.app/",
    githubLink: "https://github.com/Pratiti-paul/StayNear",
    image: staynearImg,
  },
  {
    title: "Puddly",
    subtitle: "Desktop Hydration Companion",
    category: "development",
    description:
      "An interactive desktop hydration companion that replaces routine notifications with a cute character who walks on screen and reminds you to drink water.",
    tags: [
      "Electron",
      "Desktop App",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    features: [
      "Interactive reminders",
      "Walking animations",
      "DND mode",
      "macOS + Windows",
    ],
    liveLink: "https://puddly-website-o4wf.vercel.app/",
    githubLink: "https://github.com/Pratiti-paul/Puddly",
    downloadLink: "https://github.com/Pratiti-paul/Puddly/releases/tag/v1.0.0",
    image: puddlyImg,
  },
  {
    title: "Medico",
    subtitle: "Healthcare Booking Platform",
    category: "development",
    description:
      "A healthcare platform for appointments and medicine orders, with secure role-based access and an admin dashboard.",
    tags: ["JavaScript", "React.js", "Node.js + Express.js", "MongoDB"],
    features: ["JWT authentication", "Appointments", "Order history"],
    liveLink: "https://medico-sooty-omega.vercel.app/",
    githubLink: "https://github.com/Pratiti-paul/Medico",
    image: medicoImg,
  },
  {
    title: "Cineverse",
    subtitle: "Personalized Movie Discovery",
    category: "development",
    description:
      "A movie discovery experience with smart recommendations, genre browsing, watchlists, and personal reviews.",
    tags: ["JavaScript", "React.js", "Node.js + Express.js", "PostgreSQL"],
    features: ["Smart recommendations", "Watchlists", "Personal reviews"],
    liveLink: "https://cineversefrontend.vercel.app/",
    githubLink: "https://github.com/Pratiti-paul/Cineversefrontend",
    image: cineverseImg,
  },
  {
    title: "Neurofix",
    subtitle: "Personal Mental Health Tracker",
    category: "development",
    description:
      "A thoughtful mental health tracker designed to help people reflect, relax, and grow each day.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    features: ["Daily reflection", "Mood tracking", "Wellbeing tools"],
    liveLink: "https://neurofix-final.vercel.app/",
    githubLink: "https://github.com/Pratiti-paul/Neurofix_final",
    image: neurofixImg,
  },
  {
    title: "Spotify Analysis",
    subtitle: "Music Trends Dashboard",
    category: "dva",
    description:
      "An end-to-end analysis of 114k+ tracks across 125 genres, presented through KPI-focused interactive dashboards.",
    tags: ["Tableau", "Excel", "Python", "Pandas"],
    features: ["114k+ tracks", "125 genres", "Interactive KPIs"],
    githubLink: "https://github.com/Pratiti-paul/Spotify_Analysis",
    image: spotifyImg,
  },
  {
    title: "Swiggy Analysis",
    subtitle: "Sales & Operations Dashboard",
    category: "dva",
    description:
      "An analytics dashboard that reveals restaurant performance, delivery trends, customer patterns, and revenue opportunities.",
    tags: ["Tableau", "Jupyter Notebook", "Pandas"],
    features: ["Revenue insights", "City comparisons", "Delivery trends"],
    githubLink: "https://github.com/Pratiti-paul/B_G19_SwiggyAnalysis",
    image: swiggyImg,
  },
  {
    title: "Airbnb Price Optimization",
    subtitle: "Data-Driven Pricing Strategy",
    category: "dva",
    description:
      "A pricing analysis that surfaces optimal price bands, top room types, and revenue-driving market trends.",
    tags: ["Google Sheets", "Excel"],
    features: ["Pricing bands", "Occupancy analysis", "Revenue trends"],
    githubLink: "https://github.com/Pratiti-paul/AirbnbPriceOptimization",
    image: airbnbImg,
  },
  {
    title: "RepoInsight",
    subtitle: "AI-Powered Portfolio Review",
    category: "aiml",
    description:
      "An AI tool that reviews GitHub profiles and repositories to provide recruiter-style portfolio and hiring insights.",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "FastAPI"],
    features: ["GitHub analysis", "Recruiter insights", "Actionable feedback"],
    liveLink: "https://repo-insight-pink.vercel.app/",
    githubLink: "https://github.com/Pratiti-paul/RepoInsight",
    image: repoinsightImg,
  },
];

const categories = [
  { id: "development", label: "Development" },
  { id: "dva", label: "DVA" },
  { id: "aiml", label: "AI/ML" },
];

const ProjectActions = ({ project }) => {
  const actions = [
    project.liveLink && { label: "Website", href: project.liveLink, icon: FaGlobe },
    project.downloadLink && { label: "Download", href: project.downloadLink, icon: FaDownload },
    project.githubLink && { label: "GitHub", href: project.githubLink, icon: FaGithub },
    project.productHuntLink && {
      label: "Product Hunt",
      href: project.productHuntLink,
      icon: FaProductHunt,
    },
  ].filter(Boolean);

  return (
    <div className="project-links" aria-label={`${project.title} links`}>
      {actions.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-btn"
          aria-label={`${label} for ${project.title} (opens in a new tab)`}
        >
          {React.createElement(icon, { "aria-hidden": true })}
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <article className={`project-card stagger-item${project.featured ? " project-card--featured" : ""}`}>
    <div className="project-preview">
      <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
      {project.status && <span className="project-status">{project.status}</span>}
    </div>

    <div className="project-info">
      <div className="project-heading">
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
      </div>
      <p className="project-description">{project.description}</p>

      <div className="project-tags" aria-label={`${project.title} technology stack`}>
        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>

      <div className="project-features" aria-label={`${project.title} highlights`}>
        {project.features.map((feature) => <span key={feature}>{feature}</span>)}
      </div>

      <ProjectActions project={project} />
    </div>
  </article>
);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("development");
  const filteredProjects = projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title reveal">Featured <span className="highlight">Projects</span></h2>
        <div className="project-filters">
          {categories.map((category) => (
            <button key={category.id} className={selectedCategory === category.id ? "active" : ""} onClick={() => setSelectedCategory(category.id)}>
              {category.label}
            </button>
          ))}
        </div>
        <div className="projects-grid stagger-container">
          {filteredProjects.map((project) => <ProjectCard project={project} key={project.title} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
