import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./topbar.css";

const Topbar = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/login");
  };
  const handlecontact = () => {
    navigate("/contact");
  };
  const handlehomepage = () => {
    navigate("/");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="topbarcontainer">
      <div className="topbarleft">
        <span className="logo" onClick={handlehomepage}>
          parklik
        </span>
      </div>

      <div className="topbarcenter"></div>

      <div className="topbarright">
        <li>
          <div className="loginbutton">
            <button onClick={handleSignup}>signup</button>
          </div>
        </li>
        <li>
          <a>help</a>
        </li>
        <li>
          <a onClick={handlecontact}>contact us</a>
        </li>
        <div className="loginbutton">
          {/* {showprofile && <button onClick={handleSearch}>profile</button>} */}
          <button onClick={handleSearch}>login</button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
