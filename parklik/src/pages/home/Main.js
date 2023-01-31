import React from "react";
import Testimonial from "../../components/Testimonial";
import Works from "../../components/Works";
import "./main.css";
const Main = () => {
  return (
    <div className="mainsection">
      <Works />
      <Testimonial />
    </div>
  );
};

export default Main;
