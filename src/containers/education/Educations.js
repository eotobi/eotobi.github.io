import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio.js";

function Educations(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <h1 className="educations-header" style={{ color: theme.text }}>
          Degrees Received
        </h1>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree, index) => {
          return <DegreeCard key={index} degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Educations;
