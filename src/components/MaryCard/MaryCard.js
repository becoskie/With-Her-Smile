//sets up the reusable FriendCard component
import React from "react";
import "./MaryCard.css";

//pass the image into each card so all 12 are rendered
const FriendCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="image-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default FriendCard;