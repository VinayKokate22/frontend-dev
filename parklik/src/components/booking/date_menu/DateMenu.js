import React from "react";
import "./datemenu.css";
import { DateRange } from "react-date-range";

import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const DateMenu = () => {
  const [destination, setdestination] = useState("");
  const [openDate, setopenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [Duration, setDuration] = useState(30);
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/booking/location", {
      state: { destination, date, Duration },
    });
  };
  return (
    <section className="datemenu_flex">
      <div className="datemenu_place">
        <input
          type="text"
          placeholder="where are you going"
          className="headersearchinput"
          onChange={(e) => setdestination(e.target.value)}
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
  );
};

export default DateMenu;
