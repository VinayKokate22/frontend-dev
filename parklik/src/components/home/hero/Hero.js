import React from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/booking/");
  };
  return (
    <>
      <section className="herosection">
        <div className="herocontainer">
          <div className="title" data-aos="fade-left">
            <h2>
              Always <br /> arrive On Time.
            </h2>
            <h3>Book car park now.</h3>
          </div>
          {/* <div className="searchbar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="gwalior" />
          </div> */}
          <div className="book_button" data-aos="fade-up">
            <button onClick={handleSearch}>book now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
