import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      inputValue: "",
      postMessage: "",
    };
  }

  // Fetch message from Express on mount
  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:5000/api/hello");
      const data = await response.json();
      this.setState({ message: data.message });
    } catch (error) {
      console.error("Error fetching:", error);
    }
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/world", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputValue: this.state.inputValue }),
      });

      const data = await response.json();
      this.setState({ postMessage: data.message, inputValue: "" });
    } catch (error) {
      console.error("Error posting:", error);
    }
  };

  render() {
    const { message, inputValue, postMessage } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>{message}</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleChange}
            placeholder="Type something..."
          />
          <button type="submit">Send</button>
        </form>

        {postMessage && (
          <div style={{ marginTop: "20px", fontWeight: "bold" }}>
            {postMessage}
          </div>
        )}
      </div>
    );
  }
}

export default App;
