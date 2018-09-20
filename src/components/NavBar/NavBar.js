//sets up the reusable Navbar component
import React, { Component } from "react";
import "./NavBar.css";

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar">
          <ul>
          <li>Help Mary Make It!</li>
            <li>Your Guess</li>
            <li>Score: 0 | Top Score: 12</li>
          </ul>
      </nav>
    );
  }
}

export default Navbar;