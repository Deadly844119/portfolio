import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarker } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="main-contact-container" id="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            eaque odit. Pariatur beatae eius rem quia quos perspiciatis
            voluptatum illum eaque? Voluptatibus, non sit.
          </p>
        </div>
        <div className="contact-container">
          <div className="contact-info-left">
            <div className="left-info-box">
              <div className="icon">
                <FaMapMarker />
              </div>
              <div className="text">
                <h3>ADDRESS</h3>
                <p>
                  3401 lalganj road,
                  <br />
                  chandwara,vaishali <br />
                  844119
                </p>
              </div>
            </div>
            <div className="left-info-box">
              <div className="icon">
                <FaPhone />
              </div>
              <div className="text">
                <h3>PHONE</h3>
                <p>+91 980-889-6862</p>
              </div>
            </div>
            <div className="left-info-box">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div className="text">
                <h3>EMAIL</h3>
                <p>vickykrsingh27@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-info-right">
            <div className="message">
              <div className="input-box">
                <input type="text" required="required" />
                <span>Full Name</span>
              </div>
              <div className="input-box">
                <input type="text" required="required" />
                <span>Email</span>
              </div>
              <div className="input-box">
                <input type="text" required="required" />
                <span>Phone</span>
              </div>
              <div className="input-box">
                <textarea
                  name=""
                  id=""
                  cols="25"
                  rows="1"
                  required="required"
                ></textarea>
                <span>Type Your Message....</span>
              </div>
              <div className="input-box">
                <button type="submit">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
