import React from "react";
import DateMenu from "../components/booking/date_menu/DateMenu";
import Topbar from "../components/navbar/Topbar";
import "./booking.css";

const Booking = () => {
  return (
    <div className="booking_page">
      <Topbar />
      <DateMenu />
    </div>
  );
};

export default Booking;
