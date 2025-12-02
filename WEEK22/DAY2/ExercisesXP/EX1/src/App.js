import React from "react";

function App() {
  // JSX constant
  const myElement = <h1>I Love JSX!</h1>;

  // Sum constant
  const sum = 5 + 5;

  return (
    <div className="App">
      {/* Hello World */}
      <p>Hello World!</p>

      {/* Render JSX element */}
      {myElement}

      {/* Render sum inside sentence */}
      <p>React is {sum} times better with JSX</p>
    </div>
  );
}

export default App;