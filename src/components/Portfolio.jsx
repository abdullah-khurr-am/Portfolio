import React, { Component } from "react";
import ProjectCard from "./common/ProjectCard";
import project1 from "../assets/images/projects/project11.png";
import project2 from "../assets/images/projects/project4.png";
import project3 from "../assets/images/projects/project7.png";
import project4 from "../assets/images/projects/project6.png";
import project6 from "../assets/images/projects/project12.png";
import project7 from "../assets/images/projects/project10.png";

export default class Portfolio extends Component {
  state = {
    shownTab: "all",
  };

  handleHowTab = (tab) => {
    this.setState({ shownTab: tab });
  };

  render() {
    const { shownTab } = this.state;
    const projects = [
      {
        id: 4,
        image: project4,
        title: "RAWG - Gaming Info Website",
        description:
          "Implemented a Pixel Perfect and Responsive clone of RAWG's Videogames informational website.",
        demoLink: "https://rawg-clone.netlify.app/",
        sourceCodeLink: "https://github.com/TheAwsomist/R-A-W-G",
        technologies: [
          { id: 1, name: "JavaScript ES6" },
          { id: 2, name: "ReactJS" },
          { id: 3, name: "Redux" },
          { id: 4, name: "SASS/CSS" },
          { id: 5, name: "Axios" },
        ],
        category_id: 1,
        animation: "zoom-in-up",
      },
      {
        id: 2,
        image: project1,
        title: "VenttOut",
        description:
          "The following website is a work in progress front-end of a website for a Startup that focuses on providing an anonymous place for university students to rant and vent about their student life and its problems.",
        demoLink: "https://venttout.netlify.app/",
        sourceCodeLink: "https://github.com/TheAwsomist/VenttOut",
        technologies: [
          { id: 1, name: "JavaScript ES6" },
          { id: 2, name: "ReactJS" },
          { id: 3, name: "Redux" },
          { id: 4, name: "SASS/CSS" }
        ],
        category_id: 1,
        animation: "zoom-in-up",
      },
      {
        id: 5,
        image: project7,
        title: "NFT Store",
        description:
          "Developed a Front End Landing Page of an NFT Store that fetched live data of latest NFT's and their prices from OpenSea's API",
        demoLink: "https://github.com/barackm/Doctor-App",
        sourceCodeLink: "https://github.com/barackm/Doctor-App",
        technologies: [
          { id: 1, name: "JavaScript ES6" },
          { id: 2, name: "ReactJS" },
          { id: 3, name: "Redux" },
          { id: 4, name: "SASS/CSS" },
          { id: 5, name: "Axios" },
          { id: 6, name: "OpenSea API" }
        ],
        category_id: 2,
        animation: "fade-down-left",
      },
      {
        id: 6,
        image: project6,
        title: "Star Finder",
        description:
          "This project was developed on ReactJS to find music artists and their upcoming concerts with complete interaction with an external API using Axios and data storage using Context API",
        demoLink: "http://star-finder.netlify.app/",
        sourceCodeLink: "https://github.com/TheAwsomist/MOTIVES-Assignment",
        technologies: [
          { id: 1, name: "JavaScript ES6" },
          { id: 2, name: "ReactJS" },
          { id: 3, name: "Context API" },
          { id: 4, name: "SASS/CSS" },
          { id: 5, name: "Axios" }
        ],
        category_id: 3,
        animation: "flip-left",
      }
      // {
      //   id: 1,
      //   image: project2,
      //   title: "ULK Forum",
      //   description:
      //     "Forum where students should post their problems about projects or assignments to get idea from other students",
      //   demoLink: "https://ulk-forum.netlify.app/",
      //   sourceCodeLink: "https://github.com/barackm/ULK-Forum",
      //   technologies: [
      //     { id: 1, name: "Javascript" },
      //     { id: 2, name: "ReactJs" },
      //     { id: 3, name: "SCSS" },
      //   ],
      //   category_id: 1,
      //   animation: "zoom-in-up",
      // },

      // {
      //   id: 3,
      //   image: project3,
      //   title: "Raven Bot ",
      //   description:
      //     "Raven Bot is a Ruby-based Bot used in restaurants, helping clients to place an order inside restaurents.          ",
      //   demoLink: "https://github.com/barackm/Niky-Restaurent-Bot",
      //   sourceCodeLink: "https://github.com/barackm/Niky-Restaurent-Bot",
      //   technologies: [{ id: 1, name: "Ruby" }],
      //   category_id: 3,
      //   animation: "flip-left",
      // },
    ];

    // const webProjects = projects.filter((project) => project.category_id === 1);
    // const mobileProjects = projects.filter(
    //   (project) => project.category_id === 2
    // );
    // const backendProjects = projects.filter(
    //   (project) => project.category_id === 3
    // );

    const renderProjects = () => {
      return projects;
      // if (shownTab === "all") {
      //   return projects;
      // } else if (shownTab === "mobile") {
      //   return mobileProjects;
      // } else if (shownTab === "web") {
      //   return webProjects;
      // } else {
      //   return backendProjects;
      // }
    };
    return (
      <div className="portfolio-main-container" id="portfolio" name="portfolio">
        <div className="portfolio-wrapper">
          <div className="portfolio-header">
            <div className="home-hello-wrapper" data-aos="fade-up">
              <div className="hello-line"></div>
              <h3 className="hero-hello">Portfolio</h3>
            </div>
            <div className="portfolio-works-wrapper">
              <div className="links-wrapper">
                <h3 data-aos="fade-up">Some of my best works</h3>
                {/* <ul>
                  <li>
                    <div
                      onClick={() => this.handleHowTab("all")}
                      className={shownTab === "all" ? "active" : ""}
                    >
                      All
                    </div>
                  </li>
                  <li onClick={() => this.handleHowTab("web")}>
                    <div className={shownTab === "web" ? "active" : ""}>
                      Web
                    </div>
                  </li>
                  <li onClick={() => this.handleHowTab("mobile")}>
                    <div className={shownTab === "mobile" ? "active" : ""}>
                      Mobile{" "}
                    </div>
                  </li>
                  <li onClick={() => this.handleHowTab("backend")}>
                    <div className={shownTab === "backend" ? "active" : ""}>
                      Backend
                    </div>
                  </li>
                </ul> */}
              </div>
              <div className="projects-grid-wrapper">
                {renderProjects().map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
