// src/Components/Events.js
import React, { useState } from "react";

const Events = () => {
  const [inputValue, setInputValue] = useState("");

  // Part I: Click handler
  const clickMe = () => {
    alert("I was clicked");
  };

  // Part II: Handle Enter key press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`You pressed Enter! Input value: ${inputValue}`);
      setInputValue(""); // Optional: clear input after alert
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Exercise 2: Events</h3>

      {/* Part I: Button click */}
      <button onClick={clickMe}>Click Me</button>

      {/* Part II: Input with Enter key */}
      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Type something and press Enter"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Events;
