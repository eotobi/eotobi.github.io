import React from "react";
import "./CertificationCard.css";
import styled from "styled-components";

const StyledCertCard = styled.div`
  background: ${(props) => props.theme.projectCard};
  border: 1px solid ${(props) => props.theme.cardBorder};
  box-shadow: 0 2px 12px ${(props) => props.theme.cardShadow};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px ${(props) => props.theme.cardShadow};
    border-color: ${(props) => props.$colorCode || props.theme.accentColor};
  }
`;

function CertificationCard(props) {
  const certificate = props.certificate;
  const theme = props.theme;

  return (
    <StyledCertCard className="cert-card" $colorCode={certificate.color_code}>
      <a
        href={certificate.certificate_link}
        target="_blank"
        rel="noopener noreferrer"
        className="cert-link"
      >
        <div
          className="cert-header"
          style={{ backgroundColor: certificate.color_code }}
        >
          <img
            className="logo_img"
            src={require(`../../assests/images/${certificate.logo_path}`)}
            alt={certificate.alt_name}
          />
        </div>
      </a>
      <div className="cert-body">
        <h3 className="cert-body-title" style={{ color: theme.text }}>
          {certificate.title}
        </h3>
        <p className="cert-body-subtitle" style={{ color: theme.secondaryText }}>
          {certificate.subtitle}
        </p>
      </div>
    </StyledCertCard>
  );
}

export default CertificationCard;
