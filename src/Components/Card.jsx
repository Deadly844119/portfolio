import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card-top">
          <img src={props.cardImg} alt="" />
        </div>
        <div className="card-bottom">
          <h3>{props.cardHead}</h3>
          <p>{props.cardDesc}</p>
          <button>Explore Now</button>
        </div>
      </div>
    </>
  );
}
