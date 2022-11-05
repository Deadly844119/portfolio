import React from "react";
import "./Hero.css";
import HeroImage from "../images/banner-image.png";
import FloatingDiv from "./FloatingDiv";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Hero(props) {
  return (
    <>
      <div className="container hero-container" id="hero">
        <div className="blur"></div>
        <div className="h-left">
          <p>HEY THERE_______</p>
          <h1>
            I'M <span>VICKY KUMAR</span>
          </h1>
          <span>User InterFace Designer.</span> <br />
          <span>FrontEnd & BackEnd Devloper</span>
          <div className="buttons">
            <button className="btn-sm">HIRE ME</button>
            <button className="btn-sm">DOWNLOAD CV</button>
          </div>
        </div>
        <div className="h-right">
          <div className="right-image">
            <img src={HeroImage} alt="" />
          </div>
          <div className="floating-div">
            <FloatingDiv text1="UI & UX " text2="Designer" />
          </div>
          <div className="floating-div-1">
            <FloatingDiv text1="FrontEnd & BackEnd" text2="Devloper" />
          </div>
        </div>
        <br />
        <div className="icons">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>
      </div>
    </>
  );
}
