import React, { Component } from "react";
import FormComponent from "./FormComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      lactoseFree: false,
    };
  }

  // 🧠 Handle any change in input, radio, select, checkbox
  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 🚀 Handle form submit
  handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams();

    // Build query string from state
    for (let key in this.state) {
      if (this.state[key]) {
        queryParams.append(key, this.state[key]);
      }
    }

    // Redirect with URL parameters
    window.location.href = `${window.location.origin}/?${queryParams.toString()}`;
  };

  render() {
    return (
      <div className="App">
        <h1>React Form Challenge</h1>
        <FormComponent
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
