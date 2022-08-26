import React, { Component } from "react";
import CoursesCard from "./common/CoursesCard";
import nust from "../assets/images/nustlogo.png";
import bootcamp from "../assets/images/colesteele.jpg";
import academind from "../assets/images/academind-logo.jpg";
import mosh from "../assets/images/mosh.png";
import fcc from "../assets/images/fcc.jpg";

export default class Courses extends Component {
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
        title: "BS-Computer Sciences",
        date:"Graduated in 2022 (CGPA 3.50)",
        institute:"National University of Science & Technology (NUST)",
        image:nust,
        // description:
        //   "Currently working on revamp and launch projects of multiple e-commerce products of a company based in United Kingdom.",
        // technologies: [
        //   { id: 1, name: "JavaScript ES6" },
        //   { id: 2, name: "ReactJS" },
        //   { id: 3, name: "Redux" },
        //   { id: 4, name: "SASS/CSS" },
        //   { id: 5, name: "Axios" },
        // ],
        category_id: 1,
        animation: "zoom-in-up",
      },
      {
        id: 2,
        title: "The Web Developer Bootcamp",
        date:"2019",
        institute:"Udemy",
        image:bootcamp,
        // description:
        //   "Complete web Development course that teaches all popular web development technologies.",
        // technologies: [
        //   { id: 1, name: "JavaScript ES6" },
        //   { id: 2, name: "ReactJS" },
        //   { id: 3, name: "Redux" },
        //   { id: 4, name: "SASS/CSS" }
        // ],
        category_id: 1,
        animation: "zoom-in-up",
      },
      {
        id: 3,
        // image: project7,
        title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        date:"2020",
        institute:"Academind",
        image:academind,
        // description:
        //   "Worked as an Intern at a Serbian based company, redesigning and revamping their Landing Website to improve customer acquisition and increase website's traffic",
        // demoLink: "https://github.com/barackm/Doctor-App",
        // sourceCodeLink: "https://github.com/barackm/Doctor-App",
        // technologies: [
        //   { id: 1, name: "JavaScript ES6" },
        //   { id: 2, name: "ReactJS" },
        //   { id: 3, name: "Redux" },
        //   { id: 4, name: "SASS/CSS" },
        //   { id: 5, name: "Axios" },
        //   { id: 6, name: "OpenSea API" }
        // ],
        category_id: 2,
        animation: "fade-down-left",
      },
      {
        id: 4,
        // image: project7,
        title: "The Ultimate JavaScript Mastery Series",
        date:"2020",
        institute:"CodeWithMosh",
        image: mosh,
        // description:
        //   "Worked as an Intern at a Serbian based company, redesigning and revamping their Landing Website to improve customer acquisition and increase website's traffic",
        // demoLink: "https://github.com/barackm/Doctor-App",
        // sourceCodeLink: "https://github.com/barackm/Doctor-App",
        // technologies: [
        //   { id: 1, name: "JavaScript ES6" },
        //   { id: 2, name: "ReactJS" },
        //   { id: 3, name: "Redux" },
        //   { id: 4, name: "SASS/CSS" },
        //   { id: 5, name: "Axios" },
        //   { id: 6, name: "OpenSea API" }
        // ],
        category_id: 2,
        animation: "fade-down-left",
      },
      {
        id: 5,
        // image: project7,
        title: "NODEJS and ExpressJS",
        date:"2020",
        institute:"FreeCodeCamp",
        image:fcc,
        // description:
        //   "Worked as an Intern at a Serbian based company, redesigning and revamping their Landing Website to improve customer acquisition and increase website's traffic",
        // demoLink: "https://github.com/barackm/Doctor-App",
        // sourceCodeLink: "https://github.com/barackm/Doctor-App",
        // technologies: [
        //   { id: 1, name: "JavaScript ES6" },
        //   { id: 2, name: "ReactJS" },
        //   { id: 3, name: "Redux" },
        //   { id: 4, name: "SASS/CSS" },
        //   { id: 5, name: "Axios" },
        //   { id: 6, name: "OpenSea API" }
        // ],
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
              <h3 className="hero-hello">My Education 👨‍🎓📚</h3>
            </div>
            <div className="portfolio-works-wrapper">
              <div className="links-wrapper">
                <h3 data-aos="fade-up">My Major and The Courses I have done so far</h3>
                
              </div>
              <div className="projects-grid-wrapper" id="courses-grid">
                {renderProjects().map((project) => (
                  <CoursesCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
