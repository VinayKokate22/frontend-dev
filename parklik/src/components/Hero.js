import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="herocontainer">
        <div className="title">
          <h2>Send payment requests, get paid fast!</h2>
          <p>86% of our payment requests get paid within 12 hours.</p>
        </div>
        <div className="titleimage">
          <img src="/asset/undraw.png" alt="" />
        </div>
      </div>

      <div className="searchbar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="gwalior" />
      </div>
    </>
  );
};

export default Hero;
