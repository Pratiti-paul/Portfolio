import React from 'react';
import './Skills.css';

const skills = [
  "ReactJS", "NextJS", "TypeScript", "Tailwind CSS", "Motion", "Sanity",
  "Contentful", "NodeJS", "ExpressJS", "PostgreSQL", "MongoDB", "Prisma",
  "Zustand", "Zod", "pnpm", "Bun", "Git", "GitHub", "Vercel",
  "AWS", "Docker", "Expo", "Clerk", "Linux"
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <p className="skills-subtitle">MY SKILLSET</p>
        <h2 className="skills-title">
          The Magic <span className="highlight">Behind</span>
        </h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
