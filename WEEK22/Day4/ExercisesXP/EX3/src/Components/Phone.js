// src/Components/Phone.js
import React, { useState } from "react";

function Phone() {
  // Part I: State variables
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year] = useState(2020);

  // Part II: Change color function
  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Phone Details</h3>
      <p>Brand: {brand}</p>
      <p>Model: {model}</p>
      <p>Color: {color}</p>
      <p>Year: {year}</p>

      {/* Button to change color */}
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Phone;
