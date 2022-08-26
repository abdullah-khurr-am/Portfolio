import React, { Component } from "react";


export default class CoursesCard extends Component {
  render() {
    const { project } = this.props;
    console.log(project.image);
    return (
      <>
        <div
          href="#f"
          className="project-item-wrapper"
          id="courses-wrapper"
          data-aos={project.animation}
        >
        <div className="course-image"><img loading="lazy" src={project.image} alt="" /></div>
        <div className="experience-card-header">
          <h3 className="project-title" style={{"fontWeight":"800","fontSize":"1.2rem"}}>{project.title}</h3>
          <h3 className="project-title institute" style={{"fontWeight":"800","fontSize":"1.1rem"}}>{project.institute}</h3>
            <h4 className="project-title">{project.date}</h4>
        </div>
          {/* <div className="project-links">
            <a href={project.demoLink} target="blank">
              Live Demo{" "}
              <IconContext.Provider value={{ className: "project-link" }}>
                <FiExternalLink />
              </IconContext.Provider>
            </a>
            <a href={project.sourceCodeLink} target="blank">
              Source code
              <IconContext.Provider value={{ className: "project-link" }}>
                <AiFillGithub />
              </IconContext.Provider>
            </a>
          </div> */}
          {/* <div className="project-technology-tags">
            {project.technologies.map((techno) => (
              <div key={techno.id} className="project-tag">
                {techno.name}
              </div>
            ))}
          </div> */}
          {/* <div className="project-images-preview">
            <img src={project.image} alt="" />
          </div> */}
        </div>
      </>
    );
  }
}
