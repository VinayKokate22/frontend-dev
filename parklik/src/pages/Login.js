import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/navbar/Topbar";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
  };
  const [showprofile, setshowprofile] = useState(false);
  return (
    <div>
      <Topbar />
      <div className="login_page">
        <div className="login_page_background_img" data-aos="fade"></div>
        <div className="login_credentials">
          <div className="login_title" data-aos="fade-left">
            <h2>Login</h2>
            <p>
              Don't have an account?{" "}
              <span className="createaccount" onClick={handleSignup}>
                Create Your Account
              </span>{" "}
              it takes less than a minute
            </p>
          </div>
          <div>
            <form action="" className="contactform" data-aos="fade-left">
              <fieldset className="login_credentials_card">
                <label for="uname">
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  id="uname"
                  required
                />

                <label for="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  id="psw"
                  required
                />
                <button
                  className="formbutton"
                  onClick={() => {
                    setshowprofile(true);
                  }}
                >
                  Login
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
