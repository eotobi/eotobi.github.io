import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.skillName}
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-${logo.skillName}`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name={logo.skillName}>
                  <img
                    src={logo.iconUrl}
                    alt={`${logo.skillName} icon`}
                    className="software-skill-icon"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;