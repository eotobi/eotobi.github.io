import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { useNavigate } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import styled from "styled-components";

const ContactButton = styled.button`
  background: ${(props) => props.theme.accentGradient};
  color: #fff;
  padding: 14px 36px;
  border: none;
  border-radius: 12px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px ${(props) => props.theme.cardShadow};
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px ${(props) => props.theme.cardShadow};
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 14px 36px;
  border: 2px solid ${(props) => props.theme.accentColor};
  border-radius: 12px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: ${(props) => props.theme.accentColor};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${(props) => props.theme.accentColor};
    color: #fff;
    transform: translateY(-2px);
  }
`;

export default function Greeting(props) {
  const theme = props.theme;
  const navigate = useNavigate();

  return (
    <section className="hero-section" id="greeting">
      <div className="hero-container">
        <div className="hero-text animate-fade-up">
          <p className="hero-wave">{greeting.title}</p>
          <h1 className="hero-name">
            I'm{" "}
            <span className="hero-accent" style={{ color: theme.accentColor }}>
              {greeting.full_name}
            </span>
          </h1>
          <p className="hero-subtitle" style={{ color: theme.secondaryText }}>
            {greeting.subTitle}
          </p>
          <SocialMedia />
          <div className="hero-buttons">
            <ContactButton onClick={() => navigate("/contact")}>
              Get In Touch
            </ContactButton>
            <ResumeButton
              href={greeting.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </ResumeButton>
          </div>
        </div>
        <div className="hero-image animate-fade-up delay-2">
          <FeelingProud theme={theme} />
        </div>
      </div>
    </section>
  );
}
