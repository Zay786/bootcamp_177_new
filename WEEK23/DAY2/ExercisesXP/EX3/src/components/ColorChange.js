import React, { Component } from "react";

// 🧒 Child Component
class Child extends Component {
  componentWillUnmount() {
    alert("unmounted");
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

// 🎨 Parent Component
class ColorChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true,
    };
  }

  // Remove the child when button clicked
  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    let myChild;
    if (this.state.show) {
      myChild = <Child />;
    }

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>{this.state.favoriteColor}</h1>
        {myChild}
        <button onClick={this.deleteChild}>Delete</button>
      </div>
    );
  }
}

export default ColorChange;
