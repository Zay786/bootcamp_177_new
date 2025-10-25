// src/Components/Car.js
import React from "react";

function Car({ carInfo }) {
  return (
    <div>
      <h2>This car is {carInfo.model}</h2>
    </div>
  );
}

export default Car;
