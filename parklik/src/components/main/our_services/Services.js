import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="services_title" data-aos="fade-up">
        <h2>Our services</h2>
      </div>
      <div className="services_flex" data-aos="fade-up">
        <div className="service_card">
          <h3>lorem</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            velit id nobis pariatur debitis similique autem esse dolorum
            accusantium enim harum vitae reiciendis nesciunt ipsa est ex, porro
            voluptas aspernatur.
          </p>
          {/* need to add the anchor tag */}
          <a href="">learn more</a>
        </div>
        <div className="service_card">
          <h3>lorem</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            velit id nobis pariatur debitis similique autem esse dolorum
            accusantium enim harum vitae reiciendis nesciunt ipsa est ex, porro
            voluptas aspernatur.
          </p>
          {/* need to add the anchor tag */}
          <a href="">learn more</a>
        </div>
        <div className="service_card">
          <h3>lorem</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            velit id nobis pariatur debitis similique autem esse dolorum
            accusantium enim harum vitae reiciendis nesciunt ipsa est ex, porro
            voluptas aspernatur.
          </p>
          {/* need to add the anchor tag */}
          <a href="">learn more</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
