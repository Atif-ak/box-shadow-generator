import React, { useState } from "react";
import "./App.css";

function App() {
  const [ver, setVer] = useState(10);
  const [hor, setHor] = useState(10);
  const [blur, setBlur] = useState(5);
  const [col, setCol] = useState("grey");
  return (
    <>
    <h1 className="heading">Box Shadow Generator</h1>

    <div className="App">
      <div className="slides">
        <label>Vertical length : </label>
        <input
          type="range"
          min="-200"
          max="200"
          value={ver}
          onChange={(e) => setVer(e.target.value)}
        />
        <label>Horizontal length : </label>
        <input
          type="range"
          min="-200"
          max="200"
          value={hor}
          onChange={(e) => setHor(e.target.value)}
        />
        <label>Blur : </label>
        <input
          type="range"
          min="0"
          max="200"
          value={blur}
          onChange={(e) => setBlur(e.target.value)}
        />
        <label>Color : </label>
        <input
          type="color"
          value={col}
          onChange={(e) => setCol(e.target.value)}
        />
        <div className="output">
        <p className="para"> For Developer: {`box-shadow: ${hor}px ${ver}px ${blur}px ${col} ;`}</p>
        <p className="para"> Keep developing!</p>
        </div>

      </div>
      <div className="box" style={{boxShadow:`${hor}px ${ver}px ${blur}px ${col}`}}>

      </div>
    </div>
    </>
  );
}

export default App;
