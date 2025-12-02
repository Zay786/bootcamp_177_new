import React, { Component } from "react";
import data from "../data/data.json";

class Example2 extends Component {
  render() {
    return (
      <div style={{ marginBottom: "20px" }}>
        <h2>Skills</h2>
        <ul>
          {data.Skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example2;
