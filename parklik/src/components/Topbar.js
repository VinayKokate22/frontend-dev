import React from "react";
// import SearchIcon from "@mui/icons-material/Search";

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbarcontainer">
      <div className="topbarleft">
        <span className="logo">linkup</span>
      </div>

      <div className="topbarcenter"></div>

      <div className="topbarright">
        <li>
          <a href="#index.html">help</a>
        </li>
        <li>
          <a href="#index.html">contact us</a>
        </li>
        <div className="loginbutton">
          <button>log In</button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
