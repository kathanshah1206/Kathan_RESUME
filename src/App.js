import "./App.css";
import Marquee from "react-fast-marquee";
import { jsPDF } from "jspdf";
import "react-vertical-timeline-component/style.min.css";
import React, { useState } from "react";

import { Link, Element } from "react-scroll";
import { ReactTyped as Typed } from "react-typed";
import Education from "./Education";
import Work_Exp from "./Work_Exp";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Footer from "./pages/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const onButtonClick = () => {
    fetch("/Kathan_CV_August.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Kathan_CV.pdf";
        alink.click();
      });
    });
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      {/* NAV */}
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <button className="btn btn-primary" onClick={onButtonClick}>
            Download Resume
          </button>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll"
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll"
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  style={{ cursor: "pointer" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll"
                  to="service"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  style={{ cursor: "pointer" }}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll"
                  to="work"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  style={{ cursor: "pointer" }}
                >
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll"
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  style={{ cursor: "pointer" }}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll"
                  to="contactx"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  style={{ cursor: "pointer" }}
                >
                  {/* Contactx */}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Element name="home">
        <div
          id="home"
          className="intro route bg-image"
          // style={{ backgroundImage: "url(img/image.png)" }}
          // style={{ backgroundImage: "url(img/image.png)" }}
          style={{
            position: "relative",
            height: "100vh",
            width: "100%",
          }}
        >
          <img
            src={
              window.innerWidth < 425
                ? "img/image.png"
                : window.innerWidth > 425 && window.innerWidth <= 700
                ? "img/CVimg.png"
                : window.innerWidth > 700 && window.innerWidth <= 992
                ? "img/kathanPhoyo.jpg"
                : "img/image2.png"
            }
            className="img-fluid rounded b-shadow-a"
            alt="Kathan Shah"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
          <div
            className="overlay-itro"
            style={{
              zIndex: 2,
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
            }}
          ></div>
          <div
            className="intro-content display-table"
            style={{ position: "relative", zIndex: 3 }}
          >
            <div className="table-cell">
              <div className="container">
                <h1 className="intro-title mb-4">I am Kathan Shah</h1>
                <p className="intro-subtitle">
                  <Typed
                    strings={[
                      "Full Stack developer - MERN",
                      "Web Developer",
                      "Frontend Developer",
                      "Backend Developer",
                    ]}
                    typeSpeed={60}
                    backSpeed={20}
                    backDelay={1100}
                    loop
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="about">
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-sm-6 col-md-12 col-xl-6">
                          <div className="about-img">
                            <img
                              style={
                                window.innerWidth <= 576
                                  ? { paddingLeft: "0px" }
                                  : {}
                              }
                              src="img/passportphoto.jpg"
                              className="img-fluid rounded b-shadow-a"
                              alt="Kathan Shah"
                            />
                          </div>
                        </div>

                        <div className="col-sm-6 col-md-12 col-xl-6 mx-md-4 mx-lg-4 mx-4 mx-sm-0 mx-xl-0">
                          <p className="row align-items-center" style={{gap:'5  px'}}>
                            <span className="title-s">Name: </span>
                            <span>Kathan Shah</span>
                          </p>
                          <p className="row align-items-center" style={{gap:'5px'}}>
                            <span className="title-s ">Address: </span>
                            <span>GIDC Ankleshwar, Bharuch</span>
                          </p>
                          <p className="row align-items-center" style={{gap:'5px'}}>
                            <span className="title-s">Email: </span>
                            <span>kathanshah12062002@gmail.com</span>
                          </p>
                          <p className="row align-items-center" style={{gap:'5px'}}>
                            <span className="title-s">Phone: </span>
                            <span>7016239865</span>
                          </p>
                          <p className="row align-items-center" style={{gap:'5px'}}>
                            {/* <span className="title-s">link: </span> */}
                          <a style={{color:'blue'}} href="https://leetcode.com/u/kathanshah/" target="_blank">https://leetcode.com/u/kathanshah/</a>
                          </p>
                          {/* https://leetcode.com/u/kathanshah/ */}
                        </div>
                      </div>
                      <div className="skill-mf">
                        <p className="title-s">Skills</p>
                        <span>React JS (Typescript)</span>{" "}
                        <span className="pull-right">95%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "95%" }}
                            aria-valuenow="95"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>
                          CSS | HTML | Material UI | (other designing
                          frameworks)
                        </span>{" "}
                        <span className="pull-right">95%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "95%" }}
                            aria-valuenow="95"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>NODE JS | EXPRESS JS</span>{" "}
                        <span className="pull-right">75%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>JAVA TECHNOLOGY</span>{" "}
                        <span className="pull-right">40%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "40%" }}
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>SQL SERVER | POSTGRES SQL | MONGO DB</span>{" "}
                        <span className="pull-right">95%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "95%" }}
                            aria-valuenow="95%"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* about me */}
                    <div className="col-md-6">
                      <div className="about-me pt-4 pt-md-0">
                        <div
                          className="title-box-2"
                          style={{ paddingLeft: "30px" }}
                        >
                          <h5 className="title-left">About me</h5>
                        </div>
                      </div>

                      <div className="container mt-5">
                        <ul
                          className="nav nav-pills"
                          id="myTab"
                          role="tablist"
                          style={{ cursor: "pointer" }}
                        >
                          <li className="nav-item col-sm-6 col-md-12 col-lg-6 col-12 text-center">
                            <a
                              style={{ backgroundColor: "blanchedalmond" }}
                              className={`nav-link ${
                                activeTab === "home" ? "active" : ""
                              }`}
                              id="home-tab"
                              onClick={() => handleTabClick("home")}
                              role="tab"
                              aria-controls="home"
                              aria-selected={activeTab === "home"}
                            >
                              Education
                            </a>
                          </li>
                          <li className="nav-item col-sm-6 col-md-12 col-lg-6 col-12 mt-sm-0 mt-3 mt-md-3 mt-lg-0 text-center">
                            <a
                              style={{ backgroundColor: "blanchedalmond" }}
                              className={`nav-link ${
                                activeTab === "exp" ? "active" : ""
                              }`}
                              id="exp-tab"
                              onClick={() => handleTabClick("exp")}
                              role="tab"
                              aria-controls="exp"
                              aria-selected={activeTab === "exp"}
                            >
                              Work Experience
                            </a>
                          </li>
                        </ul>

                        <div className="tab-content mt-3">
                          <div
                            className={`tab-pane fade ${
                              activeTab === "home" ? "show active" : ""
                            }`}
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                          >
                            <Education />
                          </div>
                          <div
                            className={`tab-pane fade ${
                              activeTab === "exp" ? "show active" : ""
                            }`}
                            id="exp"
                            role="tabpanel"
                            aria-labelledby="exp-tab"
                          >
                            <Work_Exp />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name="service">
        <Services />
      </Element>

      <Element name="work">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="contactx">
        {/* <Projects /> */}
        <Footer />
      </Element>
    </div>
  );
}

export default App;
