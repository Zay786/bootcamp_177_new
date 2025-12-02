import React, { useState } from "react";
import quotes from "../quotes";

const QuoteBox = () => {
  const getRandomIndex = (exclude) => {
    let index;
    do {
      index = Math.floor(Math.random() * quotes.length);
    } while (index === exclude);
    return index;
  };

  const randomColor = () =>
    `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState(randomColor());

  const handleNewQuote = () => {
    const newIndex = getRandomIndex(currentIndex);
    setCurrentIndex(newIndex);
    setBgColor(randomColor());
  };

  const { quote, author } = quotes[currentIndex];

  const containerStyle = {
    backgroundColor: bgColor,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.5s ease",
  };

  const boxStyle = {
    background: "white",
    borderRadius: "10px",
    padding: "30px",
    maxWidth: "500px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  };

  const quoteStyle = {
    color: bgColor,
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const authorStyle = {
    color: "#333",
    marginTop: "10px",
    fontStyle: "italic",
  };

  const buttonStyle = {
    backgroundColor: bgColor,
    border: "none",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    marginTop: "20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={quoteStyle}>"{quote}"</h2>
        <p style={authorStyle}>— {author}</p>
        <button style={buttonStyle} onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
