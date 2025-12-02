import React, { useState } from "react";

const Events = () => {
  const [inputValue, setInputValue] = useState("");

  // Button click handler
  const clickMe = () => {
    alert("I was clicked");
  };

  // Input Enter key handler
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`You pressed Enter! Input value: ${inputValue}`);
      setInputValue("");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Exercise 2: Events</h3>

      {/* Button */}
      <button onClick={clickMe}>Click Me</button>

      {/* Input with Enter key */}
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
