import React from "react";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>JSON Data Display</h1>
      <Example1 />
      <Example2 />
      <Example3 />
    </div>
  );
}

export default App;
