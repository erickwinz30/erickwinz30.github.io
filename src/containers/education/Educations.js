import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees, nonEducations } from "../../portfolio";
import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Degrees Received
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees.degrees.map((degree, index) => {
            return (
              <DegreeCard
                key={`degree-${index}`}
                degree={degree}
                theme={theme}
              />
            );
          })}
        </div>

        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Non-Education Certification
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {nonEducations.nonEducations.map((nonEducation, index) => {
            return (
              <DegreeCard
                key={`non-education-${index}`}
                degree={nonEducation}
                theme={theme}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Educations;
