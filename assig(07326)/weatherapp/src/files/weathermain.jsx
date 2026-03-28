import React, { useState } from "react";
import "../App.css";
import Weatherapp from "./weatherapp";

const urlpart1 = "http://api.weatherapi.com/v1/current.json?key=474e279bdb72491e80c94932230506&q=";
const urlpart2 = "&aqi=yes";


function Weathermain(){
    let cityname;

    const[name,setname] = useState("");
    const[temp ,settemp] = useState();
    const [wind,setwind] = useState();
    const[ls,setls] = useState("");
    const [humidity , sethumidity] = useState();
    
    

    const Fetchdata = async()=>{

        const midurl = name.trim();

        const result = await fetch(urlpart1+midurl+urlpart2)
             result.json().then(json=>{
                console.log(json);
                sethumidity(json.current.humidity)
                setwind(json.current.wind_kph)
                settemp(json.current.temp_c)

                
                
        }).then().catch((error)=>{
            alert("please enter correct city name for accurate data or city name may be wrong") 
        })
        if(name.trim!==""){
            setls(name);
        }
        setname(""); 
    }
    

    return(
        <div className="weatherapp">
            <div className="head">
                <input type="text" placeholder="Enter the City Name..." className="input" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                <button className="btnn" onClick={Fetchdata}>Search</button>
            </div>
            <div className="body">
                <h2 className="cityname">{ls}</h2>
            </div>
            <div className="appfooter">
                   <Weatherapp value = {temp} head = "Temp in deg"/>
                    <Weatherapp value = {wind} head = "wind in kph "/>
                     <Weatherapp value = {humidity} head = "humidity"/>
            </div>
             
           
        </div>
    );

}

export default Weathermain;