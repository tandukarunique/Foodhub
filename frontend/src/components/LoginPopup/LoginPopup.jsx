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
          {/* Show Name input only for Sign up */}
          {currState === "Sign up" && (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Input password" required />
        </div>
        <button type="submit">
          {currState === "Sign up" ? "Create Account" : "Log in"}
        </button>
        <p className="toggle-state">
          {currState === "Sign up" ? (
            <>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Log in")}>Log in</span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span onClick={() => setCurrState("Sign up")}>Sign up</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
