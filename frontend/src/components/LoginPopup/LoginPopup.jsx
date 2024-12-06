import React, { useState } from "react";
import "./LoginPopup.css";
import { ImCross } from "react-icons/im";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Log in"); // Default state is "Log in"

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <ImCross
            className="close-icon"
            onClick={() => setShowLogin(false)} // Close popup on click
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>
          {currState === "Sign up" ? "Create an account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & peivacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
