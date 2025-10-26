import React, { Component } from "react";

class ColorChange extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  // 🧭 Part I — shouldComponentUpdate
  shouldComponentUpdate() {
    console.log("in shouldComponentUpdate");
    return true; // Change to false to prevent updates
  }

  // 🧭 Part II — componentDidUpdate
  componentDidUpdate() {
    console.log("after update");
  }

  // 🧭 Part III — getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  // Timer changes color after mount
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }

  // Handle button click to change color manually
  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>{this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change to Blue</button>
      </div>
    );
  }
}

export default ColorChange;
