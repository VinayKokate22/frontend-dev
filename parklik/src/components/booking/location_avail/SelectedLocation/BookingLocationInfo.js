import React, { useEffect, useState } from "react";
import "./bookinglocationinfo.css";

const BookingLocationInfo = () => {
  const photos = [
    {
      src: "https://static.parclick.com/parking/2016/06/9f0/598/ab/9f0598ab-5d36-59ec-94b7-c14d06bedef0.jpg",
    },
    {
      src: "https://static.parclick.com/parking/2016/06/9f0/598/ab/9f0598ab-5d36-59ec-94b7-c14d06bedef0.jpg",
    },
    {
      src: "https://static.parclick.com/parking/2016/06/9f0/598/ab/9f0598ab-5d36-59ec-94b7-c14d06bedef0.jpg",
    },
    {
      src: "https://static.parclick.com/parking/2016/06/9f0/598/ab/9f0598ab-5d36-59ec-94b7-c14d06bedef0.jpg",
    },
    {
      src: "https://static.parclick.com/parking/2016/06/9f0/598/ab/9f0598ab-5d36-59ec-94b7-c14d06bedef0.jpg",
    },
  ];
  const [slidenumber, setslidenumber] = useState(0);
  const [openslider, setopenslider] = useState(false);
  const handelimageopen = (i) => {
    setslidenumber(i);
    setopenslider(true);
  };
  return (
    <div className="bookinglocationdetails_flex">
      {openslider && (
        <div className="slider">
          <i className="fa-solid fa-chevron-left"></i>
          <img src={photos[slidenumber].src} alt="" />
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      )}
      <div className="bookinglocationdetails">
        <div className="bookinglocationdetails_title">
          <h2>location name in title</h2>
        </div>
        <div className="bookinglocationdetails_details">
          <h3>details : about the car park</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            pariatur ea quos libero animi saepe voluptas laudantium ex provident
            quasi excepturi corrupti maxime recusandae repellendus consequatur
            at, harum aliquid earum?
          </p>
          <div className="locationimage_container">
            {photos.map((photo, i) => {
              return (
                <div onClick={() => handelimageopen(i)}>
                  <img src={photo.src} alt="image" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="bookinglocationdetails_opinion">
          <div className="bookinglocationdetails_opinion_card">
            <div>
              <img
                src="https://static.parclick.com/assets/img/icons/icon-user-sprite.svg#pck"
                alt=""
              />
            </div>
            <div>
              <h4>name</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                soluta veritatis voluptas voluptatum nobis laboriosam facere
                ratione, illum voluptate cumque rem, earum doloribus consectetur
                distinctio nesciunt suscipit reprehenderit. Illo, eligendi?
              </p>
            </div>
          </div>
          <div className="bookinglocationdetails_opinion_card">
            <div>
              <img
                src="https://static.parclick.com/assets/img/icons/icon-user-sprite.svg#pck"
                alt=""
              />
            </div>
            <div>
              <h4>name</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                soluta veritatis voluptas voluptatum nobis laboriosam facere
                ratione, illum voluptate cumque rem, earum doloribus consectetur
                distinctio nesciunt suscipit reprehenderit. Illo, eligendi?
              </p>
            </div>
          </div>
          <div className="bookinglocationdetails_opinion_card">
            <div>
              <img
                src="https://static.parclick.com/assets/img/icons/icon-user-sprite.svg#pck"
                alt=""
              />
            </div>
            <div>
              <h4>name</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                soluta veritatis voluptas voluptatum nobis laboriosam facere
                ratione, illum voluptate cumque rem, earum doloribus consectetur
                distinctio nesciunt suscipit reprehenderit. Illo, eligendi?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bookinglocationfinalbook">
        <div className="bookinglocationfinalbook_tab">
          <div className="bookinglocationfinalbook_flex">
            <div>
              <h2>unlimited pass</h2>
              <p>unlimited entry and exit</p>
            </div>
            <div>
              <p>price $5</p>
            </div>
          </div>
          <div className="bookinglocationfinalbook_date_flex">
            <div className="bookinglocationfinalbook_entry">
              <h4>car park entrance</h4>
              <p> the respective date</p>
            </div>
            <div className="bookinglocationfinalbook_leave">
              <h4>car park entrance</h4>
              <p> the respective date</p>
            </div>
          </div>
          <button>the price</button>
        </div>
      </div>
    </div>
  );
};

export default BookingLocationInfo;
