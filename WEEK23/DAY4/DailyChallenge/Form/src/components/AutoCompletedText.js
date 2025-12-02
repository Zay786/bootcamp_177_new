import React, { Component } from "react";
import countries from "../data/countries";

class AutoCompletedText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ""
    };
  }

  // Update suggestions when user types
  handleChange = (event) => {
    const value = event.target.value;
    let suggestions = [];

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = countries.sort().filter((country) => regex.test(country));
    }

    this.setState({ suggestions, text: value });
  };

  // Select a country from suggestions
  suggestionSelected = (value) => {
    this.setState({
      text: value,
      suggestions: []
    });
  };

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) return null;
    return (
      <ul style={{ border: "1px solid #ccc", maxWidth: "200px", margin: 0, padding: "5px", listStyle: "none" }}>
        {suggestions.map((item, index) => (
          <li
            key={index}
            onClick={() => this.suggestionSelected(item)}
            style={{ cursor: "pointer", padding: "5px" }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;

    return (
      <div style={{ maxWidth: "300px", margin: "50px auto", textAlign: "left" }}>
        <input
          type="text"
          value={text}
          onChange={this.handleChange}
          placeholder="Type a country..."
          style={{ width: "100%", padding: "5px" }}
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default AutoCompletedText;
