// Exercise3.js
import React, { Component } from "react";

class Exercise extends Component {
  render() {
    const headingStyle = {
      color: "red",
      backgroundColor: "lightblue",
      padding: "10px",
      textAlign: "center",
    };

    return (
      <div>
        {/* Heading */}
        <h1 style={headingStyle}>This is a Heading</h1>

        {/* Paragraph */}
        <p>This is a simple paragraph in React.</p>

        {/* Link */}
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Visit React Official Website
        </a>

        {/* Form */}
        <form style={{ marginTop: "10px" }}>
          <label>
            Name: <input type="text" placeholder="Enter your name" />
          </label>
          <button type="submit" style={{ marginLeft: "5px" }}>
            Submit
          </button>
        </form>

        {/* Image */}
        <div style={{ marginTop: "10px" }}>
          <img
            src="https://via.placeholder.com/150"
            alt="placeholder"
            style={{ display: "block" }}
          />
        </div>

        {/* List */}
        <ul style={{ marginTop: "10px" }}>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
