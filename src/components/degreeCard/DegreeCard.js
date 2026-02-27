import React from "react";
import "./DegreeCard.css";
import styled from "styled-components";

const DegreeCardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  padding: 28px;
  border: 1px solid ${(props) => props.theme.cardBorder};
  border-radius: 16px;
  background: ${(props) => props.theme.projectCard};
  box-shadow: 0 2px 12px ${(props) => props.theme.cardShadow};
  transition: all 0.3s ease;
  margin-bottom: 24px;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px ${(props) => props.theme.cardShadow};
    border-color: ${(props) => props.theme.accentColor};
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 24px;
    gap: 20px;
  }
`;

const DegreeImgWrapper = styled.div`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid ${(props) => props.theme.cardBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.sectionBg};
`;

const VisitButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  background: ${(props) => props.theme.accentGradient};
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 16px;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${(props) => props.theme.cardShadow};
    color: #fff;
    text-decoration: none;
  }
`;

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;

  return (
    <DegreeCardWrapper>
      <DegreeImgWrapper>
        <img
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          src={require(`../../assests/images/${degree.logo_path}`)}
          alt={degree.alt_name}
        />
      </DegreeImgWrapper>
      <div className="degree-content">
        <div className="degree-header">
          <div>
            <h3 className="degree-title" style={{ color: theme.text }}>
              {degree.title}
            </h3>
            <p className="degree-subtitle" style={{ color: theme.secondaryText }}>
              {degree.subtitle}
            </p>
          </div>
          <span className="degree-duration" style={{ color: theme.secondaryText }}>
            {degree.duration}
          </span>
        </div>
        <div className="degree-descriptions">
          {degree.descriptions.map((sentence, index) => (
            <p key={index} className="degree-desc-item" style={{ color: theme.secondaryText }}>
              {sentence}
            </p>
          ))}
        </div>
        <VisitButton
          href={degree.website_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </VisitButton>
      </div>
    </DegreeCardWrapper>
  );
}

export default DegreeCard;
