import React from "react";
import "./Title.css";

const Title = props => (
    <section className = "row" >
     < div className = "title container-fluid">
       
    

    <p> Click on an image to earn points, but don't click on any more than once! </p>
    <p>Score: {props.currentScore} High Score: {props.highScore}</p>
    </div>
   
    
     </section>

   
  );

export default Title;
