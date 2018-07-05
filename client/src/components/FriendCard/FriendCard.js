import React from "react";
import "./FriendCard.css";

const FriendCard = props => (

  
  <div className="card row container-fluid" onClick={props.clicked}>
    <div className="img-container">
      <img id={props.id} alt={props.name} src={props.image} />
    </div>
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default FriendCard;
