import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="section-header animate-fade-up">
          <h2 className="section-title" style={{ color: theme.text }}>
            What I Do
          </h2>
          <p className="section-subtitle" style={{ color: theme.secondaryText }}>
            Building digital experiences with modern technologies
          </p>
        </div>
        <SkillSection theme={theme} />
      </div>
    </section>
  );
}
