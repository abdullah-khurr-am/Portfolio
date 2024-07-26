import React, { Component } from "react";
import ExperienceCard from "./common/ExperienceCard";
import project1 from "../assets/images/projects/project11.png";
import project2 from "../assets/images/projects/project4.png";
import project3 from "../assets/images/projects/project7.png";
import project4 from "../assets/images/projects/project6.png";
import project6 from "../assets/images/projects/project12.png";
import project7 from "../assets/images/projects/project10.png";

export default class Experience extends Component {
  state = {
    shownTab: "all",
  };

  handleHowTab = (tab) => {
    this.setState({ shownTab: tab });
  };

  render() {
    const { shownTab } = this.state;
    const experiences = [
      {
        id: 1,
        title: "Motive, San Francisco - United States",
        date:"November 2022 - Present",
        description:
          "Worked on revamping and launching projects of multiple e-commerce products of a company based in United Kingdom.",
        category_id: 1,
        animation: "zoom-in-up",
      },
      {
        id: 2,
        title: "FlowerStation, London - United Kingdom",
        date:"July 2022 - Sept 2022",
        description:
          "Worked on revamping and launching projects of multiple e-commerce products of a company based in United Kingdom.",
        category_id: 1,
        animation: "zoom-in-up",
      },
      {
        id: 3,
        title: "VenttOut, Islamabad - Pakistan",
        date:"December 2020 - December 2021",
        description:
          "Co-Founder of a Student Centric Social Media based Startup that aimed to provide anonimity to students to vent and rant about their student life or their personal life and interact with one another",
        category_id: 1,
        animation: "zoom-in-up",
      },
      {
        id: 4,
        // image: project7,
        title: "DataBaze, Belgrade - Serbia",
        date:"July 2021 - August 2021",
        description:
          "Worked as an Intern at a Serbian based company, redesigning and revamping their Landing Website to improve customer acquisition and increase website's traffic",
        category_id: 2,
        animation: "fade-down-left",
      },
    ];


    const renderProjects = () => {
        return experiences;
    };
    return (
      <div className="portfolio-main-container" id="experience" name="experience">
        <div className="portfolio-wrapper">
          <div className="portfolio-header">
            <div className="home-hello-wrapper" data-aos="fade-up">
              <div className="hello-line"></div>
              <h3 className="hero-hello">My Experience In The Industry So Far 💼</h3>
            </div>
            <div className="portfolio-works-wrapper">
              <div className="links-wrapper">
                <h3 data-aos="fade-up">What I have done in the industry so far</h3>
                
              </div>
              <div className="projects-grid-wrapper">
                {renderProjects().map((project) => (
                  <ExperienceCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
