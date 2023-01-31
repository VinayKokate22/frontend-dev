import React from "react";
import "./works.css";
const Works = () => {
  return (
    <div className="workscontainer">
      <div className="worksinfo">
        <div className="workstitle">
          <h2>how it works!</h2>
        </div>
        <div className="step_one">
          <div>
            <h3>1 . Find your car park!</h3>
            <p>Write an address, hotel, restaurant, airport...</p>
          </div>
          <img src="/asset/undraw.png" alt="image one" />
        </div>
        <div className="step_two">
          <div>
            <h3>2 . Compare, book!</h3>
            <p>See prices, distance, customer reviews...</p>
          </div>
          <img src="/asset/undraw.png" alt="image two" />
        </div>
        <div className="step_three">
          <div>
            <h3>3 . And park!</h3>
            <p>
              Upon arrival, just show your reservation in the car park. There is
              no need to print anything out! All your bookings, in our app
            </p>
          </div>
          <img src="/asset/undraw.png" alt="image three" />
        </div>
      </div>
    </div>
  );
};

export default Works;
