import React, { useState } from "react";

const Calculator = () => {
  // State variables for inputs and result
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  // Handle calculation
  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res;
    switch (operation) {
      case "add":
        res = a + b;
        break;
      case "subtract":
        res = a - b;
        break;
      case "multiply":
        res = a * b;
        break;
      case "divide":
        res = b !== 0 ? a / b : "Cannot divide by zero";
        break;
      default:
        res = "Invalid operation";
    }

    setResult(res);
  };

  // Inline styles
  const containerStyle = {
    background: "#f0f4f8",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  };

  const boxStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "300px",
  };

  const inputStyle = {
    margin: "10px 0",
    padding: "8px",
    width: "90%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const selectStyle = {
    margin: "10px 0",
    padding: "8px",
    width: "95%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const resultStyle = {
    marginTop: "20px",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2>React Calculator</h2>

        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={inputStyle}
        />

        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          style={selectStyle}
        >
          <option value="add">➕ Addition</option>
          <option value="subtract">➖ Subtraction</option>
          <option value="multiply">✖ Multiplication</option>
          <option value="divide">➗ Division</option>
        </select>

        <button onClick={calculate} style={buttonStyle}>
          Calculate
        </button>

        {result !== null && <div style={resultStyle}>Result: {result}</div>}
      </div>
    </div>
  );
};

export default Calculator;
