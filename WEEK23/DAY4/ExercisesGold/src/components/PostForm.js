import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
    };
  }

  // Update state on input change
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault();

    const { user, email } = this.state;

    const postData = {
      user: user,
      email: email,
    };

    // Replace with any test API that accepts POST requests
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Posted data:", data))
      .catch((error) => console.error("Error:", error));
  };

  render() {
    const { user, email } = this.state;

    return (
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
        <h2>POST JSON Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User:</label>
            <input
              type="text"
              name="user"
              value={user}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
