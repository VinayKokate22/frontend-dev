import React from "react";
import DateMenu from "../components/booking/date_menu/DateMenu";
import Topbar from "../components/navbar/Topbar";
import Location from "../components/booking/location_avail/Location";

import { DateRange } from "react-date-range";

import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useLocation, useNavigate } from "react-router-dom";

const Bookingfinal = () => {
  const prop = useLocation();
  {
    console.log(prop);
  }

  // const [destination, setdestination] = useState(location.state.destination);
  // const [date, setdate] = useState(location.state.date);
  // const [Duration, setDuration] = useState(location.state.Duration);

  const [openDate, setopenDate] = useState(false);
  const [date, setDate] = useState([
    ///neeed to add the value for search in usestate
    {
      startDate: prop.state.date[0].startDate,
      endDate: prop.state.date[0].endDate,
      key: "selection",
    },
  ]);

  const [Duration, setDuration] = useState(prop.state.Duration); ///neeed to add the value for search in usestate
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/booking");
  };

  return (
    <div className="booking_page">
      <Topbar />
      <section className="datemenu_flex">
        <div className="datemenu_place">
          <input
            type="text"
            placeholder={prop.state.destination}
            className="headersearchinput"
            // value={prop.state.destination}
          />
        </div>

        <div className="datemenu_date ">
          <div className="datemenu_date_container">
            <i
              className="fa-solid fa-calendar-days"
              onClick={() => setopenDate(!openDate)}
            ></i>
            <span className="headersearchtext">{`${format(
              date[0].startDate,
              "dd/MM/yyyy"
            )}  to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
          </div>
          {console.log(openDate)}
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="calender"
            />
          )}
        </div>
        <div className="datemenu_duration">
          <div className="datemenu_duration_display">
            <span>{`Duration :${Duration} min`}</span>
          </div>
          <div className="datemenu_duration_container">
            <button
              disabled={Duration <= 30}
              className="durationcounter_button"
              onClick={() => {
                setDuration(Duration - 30);
              }}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <button className="durationcounter_value">30</button>
            <button
              className="durationcounter_button"
              onClick={() => setDuration(Duration + 30)}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="datemenu_searchButton">
          <button onClick={handleSearch}>search</button>
        </div>
      </section>
      <div className="rem_height">
        <Location />
      </div>
    </div>
  );
};

export default Bookingfinal;
