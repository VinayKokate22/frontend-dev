import React from "react";
import Topbar from "../components/navbar/Topbar";
import "./login.css";
// i have used the same css file which was used for the login page
const Signup = () => {
  return (
    <div>
      <Topbar />
      <div className="login_page">
        <div className="signup_page_background_img" data-aos="fade"></div>
        {/* i have changed the class name of the upper div from login_page_background_img */}
        <div className="login_credentials">
          <div className="login_title " data-aos="fade-left">
            <h2>Signup</h2>
            <p>Enter your details to create an account.</p>
          </div>
          <div>
            <form action="" className="contactform" data-aos="fade-left">
              <fieldset className="login_credentials_card">
                <label for="username">
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  id="username"
                  required
                />
                <label for="lastname">
                  <b>lastname</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter lastname"
                  name="lastname"
                  id="lastname"
                  required
                />
                <label for="email">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
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
                <button className="formbutton">Signup</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
