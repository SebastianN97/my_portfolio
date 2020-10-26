import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div class="ui card">
        <div class="image">
          <img src={project.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{project.name}</h3>
          <div class="description">{project.description}</div>

          <a href={project.git} target="_blank">
            <div class="ui circular animated button" id="webpage" tabindex="0">
              <div class="hidden content">GitHub</div>
              <div class="visible content">
                <i class="big grey github button"></i>{" "}
              </div>
            </div>
          </a>

        </div>
      </div>
    </>
  );
};

export default ProjectCard;
