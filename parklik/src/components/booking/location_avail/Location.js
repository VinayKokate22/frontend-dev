import React from "react";
import "./location.css";
import Location_card from "./locationcard/Location_card";
import BookingLocationInfo from "./SelectedLocation/BookingLocationInfo";
import GoogleMapReact from "google-map-react";
const Location = () => {
  return (
    <div className="location_flex">
      <div className="location_option">
        <Location_card />
      </div>

      <div className="location_map">
        <BookingLocationInfo />
      </div>
    </div>
  );
};

export default Location;
