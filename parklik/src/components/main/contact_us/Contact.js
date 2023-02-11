import React from "react";
import Topbar from "../../navbar/Topbar";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <Topbar />
      <section className="contactmesection" id="contactmesection">
        <div className="left_section">
          <h2 data-aos="fade-left">contact</h2>
          <div className="contact-form" data-aos="fade-left">
            <form>
              <input
                type="text"
                placeholder="Enter Name"
                id="name"
                name="name"
                required
              />
              <input
                type="email"
                placeholder="Enter Email"
                id="email"
                name="email"
                required
              />
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="3"
                placeholder="Enter Message"
                required
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
          <div className="contact_links">
            <div className="direct-links">
              <i className="fa-solid fa-envelope"></i>
              <a href="">...@gamil.com</a>
            </div>
            <div className="direct-links">
              <i className="fa-solid fa-phone"></i>
              <a href="">7777777777</a>
            </div>
            <div className="sociallinks-flex">
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="right_section" data-aos="fade"></div>
      </section>
    </div>
  );
};

export default Contact;
