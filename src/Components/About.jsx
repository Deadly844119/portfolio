import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import ProgressBar from "react-bootstrap/ProgressBar";
import "./About.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import myPic from "../images/sketch1613816189796.jpg";

export default function About() {
  return (
    <>
      <div className="about" id="about">
        <div className="about-heading">
          <h2>About Me Who I'M</h2>
        </div>
        <div className="container">
          <div className="about-container">
            <div className="about-left">
              <div className="img-container">
                <img src={myPic} alt="" />
              </div>
            </div>
            <div className="about-right">
              <h3>Hi There</h3>
              <span>
                I'M <b>VICKY KUMAR</b>
              </span>
              <p>A Full Stack Web Developer.</p>
              <p>
                I have experience with ReactJS , NodeJS , Django , Bootstrap ,
                HTML , CSS and Javascript.So if you're interested in having a
                website , a new design, a web design,Figma Design, and HTML and
                CSS design, then feel free to let me know and I'l be happy to
                work with you.Thank you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
