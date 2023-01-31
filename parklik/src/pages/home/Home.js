import React from "react";
import Topbar from "../../components/Topbar";
import Hero from "../../components/Hero";
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
