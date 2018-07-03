import React from "react";
import "./FriendCard.css";

const FriendCard = props => (

  
  <button className="card row container-fluid">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </button>
);

export default FriendCard;
