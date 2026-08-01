import React from "react";
import skillsData from "./SkillsData";
import "./Css/skills.css";

function Skills() {
  const categories = [
  "Programming",
  "Backend & Database",
  "Tools",
];

  return (
    <section className="skills" id="skills">
      <h1 className="skills-title">My Skills</h1>

      {categories.map((category) => (
        <div className="category-row" key={category}>
          <h2 className="category-title">{category}</h2>

          <div className="skills-container">
            {skillsData
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-card">
                    <img src={skill.img} alt={skill.name} />
                  </div>

                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;