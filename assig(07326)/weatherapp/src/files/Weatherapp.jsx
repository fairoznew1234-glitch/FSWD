import React from "react";

function Weatherapp(props){
          
    return(
       <div className="footer">
        <h1>{props.head}</h1>
        <h2>{props.value} </h2>
       </div>
    );

}

export default Weatherapp;