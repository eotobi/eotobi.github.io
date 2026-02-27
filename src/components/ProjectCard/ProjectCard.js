import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import "./ProjectCard.css";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.projectCard};
  border: 1px solid ${(props) => props.theme.cardBorder};
  box-shadow: 0 2px 12px ${(props) => props.theme.cardShadow};
  padding: 28px;
  border-radius: 16px;
  height: 100%;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px ${(props) => props.theme.cardShadow};
    border-color: ${(props) => props.theme.accentColor};
  }
`;

export default function ProjectCard({ repo, theme }) {
  return (
    <StyledCard>
      <div className="repo-name-div">
        <p className="repo-name" style={{ color: theme.text }}>
          {repo.name}
        </p>
      </div>
      <p className="repo-description" style={{ color: theme.secondaryText }}>
        {repo.description}
      </p>
      <div className="flexDiv">
        <div className="repo-details Leftitem">
          <ProjectLanguages logos={repo.languages} />
        </div>
        <div className="repo-details Rightitem">
          <ProjectLinks logos={repo.links} />
        </div>
      </div>
    </StyledCard>
  );
}
