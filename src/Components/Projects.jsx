import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import "./MyProjects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";
import project7 from "../images/project7.png";
import project8 from "../images/project8.png";
import { useRef } from "react";
export default function Projects(props) {
  const slider = useRef(null);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    arrows: false,
    initialSlide: 0,
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1235,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 986,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 691,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="main-container" id="projects">
        <h1>My Projects</h1>
        <div className="button-container">
          <button className="prev" onClick={() => slider.current.slickPrev()}>
            Prev
          </button>
          <button className="next" onClick={() => slider.current.slickNext()}>
            Next
          </button>
        </div>
        <Slider ref={slider} {...settings}>
          <div>
            <Card
              cardImg={project1}
              cardHead="React jS Projects"
              cardDesc="hello there this is our first react js projects "
            />
          </div>
          <div>
            <Card
              cardImg={project2}
              cardHead="Node jS Project"
              cardDesc="fully based Node JS project of E-Commercial website"
            />
          </div>
          <div>
            <Card
              cardImg={project3}
              cardHead="MongoDB Project"
              cardDesc="fully based MongoDb database project of E-Commercial website"
            />
          </div>
          <div>
            <Card
              cardImg={project4}
              cardHead="MongoDB Project"
              cardDesc="fully based MongoDb database project of E-Commercial website"
            />
          </div>
          <div>
            <Card
              cardImg={project5}
              cardHead="MongoDB Project"
              cardDesc="fully based MongoDb database project of E-Commercial website"
            />
          </div>
          <div>
            <Card
              cardImg={project6}
              cardHead="MongoDB Project"
              cardDesc="fully based MongoDb database project of E-Commercial website"
            />
          </div>
          <div>
            <Card
              cardImg={project7}
              cardHead="MongoDB Project"
              cardDesc="fully based MongoDb database project of E-Commercial website"
            />
          </div>
          <div>
            <Card
              cardImg={project8}
              cardHead="MongoDB Project"
              cardDesc="fully based MongoDb database project of E-Commercial website"
            />
          </div>
        </Slider>
      </div>
    </>
  );
}
