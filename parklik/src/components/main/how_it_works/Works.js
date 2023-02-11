import React from "react";
import "./works.css";
const Works = () => {
  return (
    <div className="workscontainer">
      <div className="worksinfo">
        <div className="workstitle" data-aos="fade-up">
          <h2>how it works!</h2>
        </div>
        <div className="step_one" data-aos="fade-left">
          <div>
            <h3>1 . Find your car park!</h3>
            <p>Write an address, hotel, restaurant, airport...</p>
          </div>
          <img
            src="https://img.freepik.com/free-vector/eco-tourism-concept_23-2148647260.jpg?w=740&t=st=1676056258~exp=1676056858~hmac=65a5347a99231577f56e85b2f8bd6cc849a2c2cb56f76327310156eb12cd5d4a"
            alt="image one"
          />
        </div>
        <div className="step_two" data-aos="fade-right">
          <div>
            <h3>2 . Compare, book!</h3>
            <p>See prices, distance, customer reviews...</p>
          </div>
          <img
            src="https://img.freepik.com/free-vector/eco-tourism-concept_23-2148647260.jpg?w=740&t=st=1676056258~exp=1676056858~hmac=65a5347a99231577f56e85b2f8bd6cc849a2c2cb56f76327310156eb12cd5d4a"
            alt="image two"
          />
        </div>
        <div className="step_three" data-aos="fade-left">
          <div>
            <h3>3 . And park!</h3>
            <p>
              Upon arrival, just show your reservation in the car park. There is
              no need to print anything out! All your bookings, in our app
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-vector/eco-tourism-concept_23-2148647260.jpg?w=740&t=st=1676056258~exp=1676056858~hmac=65a5347a99231577f56e85b2f8bd6cc849a2c2cb56f76327310156eb12cd5d4a"
            alt="image three"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
