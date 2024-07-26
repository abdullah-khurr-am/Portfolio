import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";

import "./assets/scss/main.css";
import "aos/dist/aos.css";
import Experience from "./components/Experience";
import Courses from "./components/Courses";

AOS.init({
  delay: 100,
  duration: 800,
});
const App = () => {
  return (
    <>
      <main className="App">
        <Header />
        <Home />
        <Work />
        <About />
        <Experience/>
        <Portfolio />
        <Courses/>
        <Contact />
        <Footer />
      </main>
      {/* <Loading /> */}
    </>
  );
};

export default App;
