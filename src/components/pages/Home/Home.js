import React from "react";
import "./Home.css";

const Home = props => (
  <div id="home" className="container-fluid">
    <div className = "row">
    <div className="col-md-7"></div>
    <div className="col-md-4">
    <h2>Keeping Mary Fresh</h2>
    <p>
      If she's going to "make it" we need to make our girl fancy fresh.</p>
      <p>
      She has 12 outfits.
    </p>
    <p>
    Choose a new outfit for 12 days straight to keep her <br/><span id="fab">FABULOUS!</span>
    </p>
    <button
      type="button"
      className="btn btn-info"
      onClick={() => props.handlePageChange("Mary")}
    >
      Play Game
    </button>
    </div>
    </div>
  </div>
);
export default Home;
