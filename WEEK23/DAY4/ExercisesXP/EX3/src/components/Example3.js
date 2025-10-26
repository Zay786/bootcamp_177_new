import React, { Component } from "react";
import data from "../data/data.json";

class Example3 extends Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {data.Experiences.map((exp) => (
          <div key={exp.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h4>{exp.role}</h4>
            <p>Company: {exp.company}</p>
            <p>Duration: {exp.duration}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
