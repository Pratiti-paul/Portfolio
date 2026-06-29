import React, { useState } from "react";
import "./Projects.css";

import medicoImg from "../../assets/medico.png";
import cineverseImg from "../../assets/cineverse.png";
import repoinsightImg from "../../assets/repoinsight.png";
import neurofixImg from "../../assets/neurofix.png";
import staynearImg from "../../assets/StayNear.png";
import spotifyImg from "../../assets/spotify.png";
import swiggyImg from "../../assets/swiggy.png";
import airbnbImg from "../../assets/airbnb.png";

const projects = [
  {
    title: "StayNear",
    category: "development",
    description:
      "StayNear is a full-stack student accommodation platform designed to help students discover and connect with verified rental properties near their colleges. The platform provides separate experiences for Seekers (Students), Property Owners, and Admins, enabling seamless property discovery, listing management, inquiry handling, and secure authentication through a Role-Based Access Control (RBAC) system.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MongoDB",
    ],
    liveLink: "https://stayoutnear.vercel.app/",
    githubLink: "https://github.com/Pratiti-paul/StayNear",
    image: staynearImg,
  },
  {
    title: "Medico",
    category: "development",
    description:
      "It is a full-stack healthcare platform designed for booking doctor appointments and ordering medicines online. It includes secure JWT authentication, RBAC, a mock payment workflow, order and appointment history, and an admin dashboard for managing platform data.",
    tags: ["JavaScript", "React.js", "Node.js + Express.js", "MongoDB"],
    liveLink: "https://medico-sooty-omega.vercel.app/",
    githubLink: "https://github.com/Pratiti-paul/Medico",
    image: medicoImg,
  },
  {
    title: "Cineverse",
    category: "development",
    description:
      "It is a modern movie discovery platform featuring a smart recommendation system, genre browsing, a personal watchlist and personalized collection feature where you can add your own reviews too.",
    tags: ["JavaScript", "React.js", "Node.js + Express.js", "PostgreSQL"],
    liveLink: "https://cineversefrontend.vercel.app/",
    githubLink: "https://github.com/Pratiti-paul/Cineversefrontend",
    image: cineverseImg,
  },

  {
    title: "Neurofix",
    category: "development",
    description:
      "It is a personalized mental health tracker designed to help users reflect, relax, and grow.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    liveLink: "https://neurofix-final.vercel.app/",
    githubLink: "https://github.com/Pratiti-paul/Neurofix_final",
    image: neurofixImg,
  },

  // ---------------- DVA ----------------

  {
    title: "Spotify Analysis",
    category: "DVA",
    description: "Built an end-to-end Spotify analytics project analyzing 114k+ tracks across 125 genres to uncover music trends, popularity drivers, and listener preferences. Performed data cleaning and preprocessing using Python and Excel, then designed interactive Tableau dashboards with KPI-focused visualizations to deliver actionable insights through data storytelling and trend analysis.",
    tags: ["Tableau", "Excel", "Python", "Pandas"],
    githubLink: "https://github.com/Pratiti-paul/Spotify_Analysis",
    image: spotifyImg
  },

  {
    title: "Swiggy Analysis",
    category: "DVA",
    description: "Developed a comprehensive Swiggy sales and operations analytics dashboard to analyze customer behavior, restaurant performance, delivery trends, and revenue insights across multiple cities. Performed data cleaning, KPI analysis, and visualization using Excel and Power BI/Tableau to identify high-performing categories, order patterns, and business opportunities, enabling data-driven decision-making through interactive dashboards and analytical storytelling.",
    tags: ["Tableau", "Jupyter Notebook", "Pandas"],
    githubLink: "https://github.com/Pratiti-paul/B_G19_SwiggyAnalysis",
    image: swiggyImg
  },
  {
    title: "Airbnb Price Optimization",
    category: "DVA",
    description: "Built an end-to-end Airbnb pricing optimization project analyzing listing performance, occupancy rates, pricing patterns, and estimated revenue across thousands of properties. Performed data cleaning, KPI calculation, and exploratory analysis using Excel and Google Sheets, then designed interactive dashboards with pivot tables and visualizations to identify optimal price bands, high-performing room types, and revenue-driving market trends for data-driven pricing strategy recommendations.",
    tags: ["Google Sheets", "Excel"],
    githubLink: "https://github.com/Pratiti-paul/AirbnbPriceOptimization",
    image: airbnbImg
  }

  

  // ---------------- AI/ML ----------------

  {
    title: "RepoInsight",
    category: "development",
    description:
      "It is an AI-powered tool that analyzes GitHub profiles to evaluate projects, skills, and hireability with recruiter-style insights. It fetches real GitHub data, performs deep analysis on repositories, and presents actionable feedback to improve a developer’s portfolio.",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
    ],
    liveLink: "https://repo-insight-pink.vercel.app/",
    githubLink: "https://github.com/Pratiti-paul/RepoInsight",
    image: repoinsightImg,
  },

const categories = [
  {
    id: "development",
    label: "Development",
  },
  {
    id: "dva",
    label: "DVA",
  },
  {
    id: "aiml",
    label: "AI/ML",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("development");

  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title reveal">
          Featured <span className="highlight">Projects</span>
        </h2>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={
                selectedCategory === category.id ? "active" : ""
              }
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid stagger-container">
          {filteredProjects.map((project) => (
            <div
              className="project-card stagger-item"
              key={project.title}
            >
              <div className="project-preview">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn"
                  >
                    Live Demo <span className="arrow">↗</span>
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn outline"
                  >
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