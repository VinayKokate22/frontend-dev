import React, { useState } from "react";
import reviews from "./reviews";
const Testimonial = () => {
  const [index, setindex] = useState(0);
  const name = reviews[index].name;
  const image = reviews[index].img;
  const text = reviews[index].text;
  return (
    <div className="testimonials" data-aos="fade-up">
      <h2 className="review-title " data-aos="fade-up">
        Why parkilk
      </h2>
      <article className="review" data-aos="fade-up">
        <button
          className="btn prev"
          onClick={() => {
            let newindex = (index + 1) % reviews.length;
            setindex(newindex);
          }}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div>
          <div className="imgcontainer">
            <img src={image} alt="person img" className="personimage" />
          </div>
          <div className="info">
            <h3 className="name">{name}</h3>
            <p className="personinfo">{text}</p>
          </div>
        </div>
        <button
          className="btn next"
          onClick={() => {
            let newindex = (index - 1) % reviews.length;
            if (newindex < 0) {
              newindex = reviews.length - 1;
            }
            setindex(newindex);
          }}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </article>
    </div>
  );
};

export default Testimonial;
