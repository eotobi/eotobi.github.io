import React from "react";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg.js";
import styled from "styled-components";

const MoreProjectsLink = styled.a`
  background-color: ${(props) => props.theme.accentBright};
  &:hover {
    box-shadow: 0 5px 15px ${(props) => props.theme.accentBright};
  }
`;

function Projects(props) {
  const theme = props.theme;

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <div className="projects-heading-div">
          <div className="projects-heading-img-div">
            <ProjectsImg theme={theme} />
          </div>
          <div className="projects-heading-text-div">
            <h1
              className="projects-heading-text"
              style={{ color: theme.text }}
            >
              {projectsHeader.title}
            </h1>
            <p
              className="projects-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {projectsHeader["description"]}
            </p>
          </div>
        </div>
      </div>
      <div className="repo-cards-div-main">
        {projects.data.map((repo) => {
          return <ProjectCard key={repo.id} repo={repo} theme={theme} />;
        })}
      </div>
      <br />
      <br />
      <br />
      <MoreProjectsLink
        className="general-btn"
        href="https://github.com/eotobi"
      >
        More Projects (Github)
      </MoreProjectsLink>
      <br />
      <br />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Projects;
