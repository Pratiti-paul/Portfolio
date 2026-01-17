import React from "react";
import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiNumpy,
  SiPandas,
} from "react-icons/si";

import { MdOutlineAutoAwesome } from "react-icons/md";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "NextJS", icon: <SiNextdotjs /> },
  { name: "ExpressJS", icon: <SiExpress /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Python", icon: <FaPython /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "AI / ML", icon: <MdOutlineAutoAwesome /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <p className="skills-subtitle">MY SKILLSET</p>
        <h2 className="skills-title">
          The Magic <span className="highlight">Behind</span>
        </h2>

        <div className="skills-grid stagger-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item stagger-item">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
