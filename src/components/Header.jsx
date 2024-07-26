import React, { Component, createRef } from "react";
import { IconContext } from "react-icons";
import {ReactComponent as ReactLogo} from '../assets/images/AKLogo.svg';
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
// import MagnetMouse from "./utils/magnentMouse";
import { Link } from "react-scroll";

// Or Access Link,Element,etc as follows
class Header extends Component {
  constructor(props) {
    super(props);
    this.navbar = createRef();
    this.menu = createRef();
  }
  state = {
    links: [
      { id: 1, name: "Home", to: "home", class: "" },
      { id: 2, name: "About", to: "about", class: "" },
      { id: 3, name: "Work", to: "work", class: "" },
      { id: 4, name: "Experience", to: "experience", class: "" },
      { id: 5, name: "Portfolio", to: "portfolio", class: "" },
      { id: 6, name: "contact", to: "contact", class: "" },
    ],
  };
  componentDidMount() {
    // const cursor1 = document.querySelector(".cursor1");
    // const cursor2 = document.querySelector(".cursor2");
    // window.addEventListener("mousemove", (e) => {
    //   cursor1.style.cssText = cursor2.style.cssText =
    //     "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    // });
    // let mm = new MagnetMouse({
    //   magnet: {
    //     element: ".hamburger-area",
    //   },
    // });
    // mm.init();
  }

  handleShowLinks = () => {
    this.navbar.current.classList.toggle("open");
    this.menu.current.classList.toggle("open");
    // document.querySelector(".cursor1").classList.toggle("open");
    // document.querySelector(".cursor2").classList.toggle("open");
  };
  handleHover = (link) => {
    const links = this.state.links.map((item) => {
      if (item.id === link.id) {
        item.class = "focusOut focused";
      } else {
        item.class = "focusOut";
      }
      return item;
    });
    this.setState({ links });
  };
  handleHoverOut = () => {
    const links = this.state.links.map((item) => {
      item.class = "";

      return item;
    });
    this.setState({ links });
  };
  handleCursorEnter = () => {};
  closeMenu = () => {
    this.navbar.current.classList.remove("open");
    this.menu.current.classList.remove("open");
  };

  render() {
    return (
      <header>
        <nav className="header-main-container">
          <div className="logo-container">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              delay={800}
              className="logo-area"
              onClick={this.closeMenu}
            >

              <ReactLogo style={{color:"black"}} ref={this.menu}/>
            </Link>
          </div>
          <div className="hamburger-container">
            <div className="hamburger-area" onClick={this.handleShowLinks}>
              <div className="burger"></div>
              <div className="burger"></div>
              <div className="burger"></div>
            </div>
          </div>
        </nav>
        <nav className="header-links-main-container" ref={this.navbar}>
          <div className="navbar-overlay-main-container"></div>
          <div className="links-wrapper">
            <div className="menu-text">
              <h1>Menu</h1>
            </div>
            <ul>
              {this.state.links.map((link, index) => (
                <li
                  onMouseEnter={() => this.handleHover(link)}
                  onMouseLeave={() => this.handleHoverOut(link)}
                  className={link.class}
                  key={link.id}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    delay={800}
                    key={link.id}
                    onClick={this.handleShowLinks}
                  >
                    {link.name}
                  </Link>
                  <div className="link-number">0{index + 1}</div>
                  <div className="link-text-overlay">{link.name}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-details">
            <div className="contact-text">
              <p>abdullahkhurram116@gmail.com</p> <br />
            </div>
            <div className="contact-details-icon-wrapper">
              <div className="contact-icon-item">
                <a
                  href="https://www.linkedin.com/in/abdullah-khurram-827849212/"
                  target="blank"
                >
                  <IconContext.Provider
                    value={{ className: "header-links-icon" }}
                  >
                    <AiFillLinkedin />
                  </IconContext.Provider>
                </a>
                <a href="https://github.com/TheAwsomist" target="blank">
                  <IconContext.Provider
                    value={{ className: "header-links-icon" }}
                  >
                    <AiOutlineGithub />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
