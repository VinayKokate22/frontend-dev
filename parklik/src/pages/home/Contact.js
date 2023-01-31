import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contactmesection" id="contactmesection">
      <div className="contact-links" data-aos="fade-right">
        <h2>Contact Us</h2>
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
      <div className="contact-form" data-aos="fade-left">
        <form>
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            id="email"
            name="email"
            required
          />
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
