import React from "react";
import imgs from "../../img/maqbara.jpg";
import "../Cards/cards.css";

function Cards(props) {
  return (
    <div>
      <div className="wrapper">
        <img className="image" src={imgs} alt="" />
        <h1 className="title">{props.title}</h1>
        <p className="text">{props.text}</p>
        <p>Task:{props.task}</p>
        <p>Date:{props.date}</p>
      </div>
    </div>
  );
}

export default Cards;
