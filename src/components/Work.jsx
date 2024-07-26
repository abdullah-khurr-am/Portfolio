import React, { Component } from "react";
import web from "../assets/images/web.png";

export default class Work extends Component {
  render() {
    return (
      <div className="what-i-do-main-container" id="work" name="work">
        <div className="right-area-main-container">
          <div className="home-hello-wrapper" style={{justifyContent:"center",marginBottom:"2vw"}} data-aos="fade-up">
            <div className="hello-line"></div>
            <h3 className="hero-hello I-Do-div">What I do</h3>
          </div>
          <h2 className="slogan I-Do-div better-design" data-aos="fade-up" style={{marginBottom:"2vw"}}>
            Scalable Design,
            <br /> Better experiences
          </h2>

          <p className="about-work" data-aos="fade-up">
            I'm building robust and scalable solutions that is helping smoothen the logistics and supply chains wherever they are used.
          </p>
        </div>
      </div>
    );
  }
}
