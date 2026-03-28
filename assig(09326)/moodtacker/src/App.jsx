import React, { useState } from "react";

function MoodTracker() {

  const [mood, setMood] = useState("No mood selected");

  const backgroundcolor = {"😊 Happy": "lightgreen",
  "😢 Sad": "lightblue",
  "😡 Angry": "lightcoral",
  "😴 Tired": "lightgray"}

  return (
    <div style={{ textAlign: "center", marginTop: "50px" ,background : backgroundcolor[mood]}}>

      <h1>Mood Tracker</h1>

      <h2>Your Mood: {mood}</h2>

      <div>
        <button onClick={() => setMood("😊 Happy")}>Happy</button>

        <button onClick={() => setMood("😢 Sad")}>Sad</button>

        <button onClick={() => setMood("😡 Angry")}>Angry</button>

        <button onClick={() => setMood("😴 Tired")}>Tired</button>
      </div>

    </div>
  );
}

export default MoodTracker;