//sets up the reusable Navbar component
import React from "react";
import "./ScoreBar.css";

const ScoreBar = props => (
  <nav className="navbar">
    <ul>
      <li>Keep Mary Fresh!</li>
      <li>{props.message}</li>
      <li>
        Days Fresh: {props.score} | Record Fresh Days: {props.highScore}
      </li>
    </ul>
  </nav>
);
export default ScoreBar;
