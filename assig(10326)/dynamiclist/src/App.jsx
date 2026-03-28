import React, { useState } from "react";

function App() {

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addlist = () => {
    if (input.trim() !== "") {
      setList([...list, input]);
      setInput("");
    }
  };

  const deleteitems = (indexToDelete) => {
    const newlist = list.filter((item, index) => index !== indexToDelete);
    setList(newlist);   // fixed here
  };

  return (
    <div>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter the Task ..."
        />

        <button onClick={addlist}>Add</button>
      </div>

      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => deleteitems(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;