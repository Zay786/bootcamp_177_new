import React, { Component } from "react";
import data from "../data/data.json";

class Example1 extends Component {
  render() {
    return (
      <div style={{ marginBottom: "20px" }}>
        <h2>Social Medias</h2>
        {data.SocialMedias.map((social) => (
          <div key={social.id}>
            <a href={social.url} target="_blank" rel="noreferrer">
              {social.name}
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Example1;
