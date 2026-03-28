import React from "react";

function Card(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        width: "200px"
      }}
    >
      <h4>{props.title}</h4>
      <p>Video Description</p>
    </div>
  );
}

export default Card;