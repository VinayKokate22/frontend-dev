import React from "react";
import Topbar from "../navbar/Topbar";
import Hero from "./hero/Hero";

import "./home.css";
const Home = () => {
  return (
    <div className="heropage">
      <Topbar />
      <Hero />
    </div>
  );
};

export default Home;
