import React from "react";
import "./FloatingDiv.css";

export default function FloatingDiv(props) {
  return (
    <>
      <div className="f-div">
        <p>{props.text1}</p>
        <p>{props.text2}</p>
      </div>
    </>
  );
}
