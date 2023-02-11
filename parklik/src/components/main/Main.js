import React from "react";
import Works from "./how_it_works/Works";

import "./main.css";
import Services from "./our_services/Services";
import Scan from "./scan/Scan";
import Testimonial from "./testimonial/Testimonial";

const Main = () => {
  return (
    <div className="mainsection">
      <Services />
      <Works />
      {/* <Scan /> */}
      <Testimonial />
    </div>
  );
};

export default Main;
