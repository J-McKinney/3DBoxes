import React from "react";
import "./ThreeDBox.css";

function ThreeDBox() {
  return (
    <div id="threeDBoxWrapper">
      <div className="login-div">
        <div className="logo" />
        <div className="title">React</div>
        <div className="sub-title">3D Boxes</div>
        <div className="fields">
          <div className="username">
            <input
              type="username"
              className="user-input"
              placeholder="username"
            />
          </div>
          <div className="password">
            <input
              type="password"
              className="pass-input"
              placeholder="password"
            />
          </div>
        </div>
        <button className="signin-button">Login</button>
      </div>
    </div>
  );
}

export default ThreeDBox;
