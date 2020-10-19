import React from "react";

const EducationCard = ({ education }) => {
  return (
    <>
      <div class="ui main container">
        <div class="column">
          <div class="ui small left floated image" id="education-img">
            <a href={education.web} target="_blank">
              <img src={education.image}></img>
            </a>
          </div>
        </div>
        <div class="column">
          <h2>{education.name} </h2>
        </div>

        <div class="column" id="education-title">
          {education.title}
        </div>
        <div class="column" id="education-description">
          {education.description}
        </div>
        <div class="column" id="education-time">
          {education.time}
        </div>
      </div>
    </>
  );
};
export default EducationCard;
