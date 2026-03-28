import React from "react";
import Navbar from "./compoents/Navbar";
import Sidebar from "./compoents/Sidebar";
import MainContent from "./compoents/Maincontent";

function App(){
  return(
    <div>
      <Navbar/>
      <div style={{display:"flex"}}>
        <Sidebar/>
        <MainContent/>
      </div>
    </div>
  );
};

export default App;