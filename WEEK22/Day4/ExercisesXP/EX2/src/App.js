// App.js
import React from "react";
import Car from "./Components/Car";
import Events from "./Components/Events";
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise from "./Exercise3";

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <div className="App">
      {/* Exercise 1: Car */}
      <Car carInfo={carinfo} />
      <hr style={{ margin: "20px 0" }} />

      {/* Exercise 2: Events */}
      <Events />
      <hr style={{ margin: "20px 0" }} />

      {/* Exercise 3: User Favorite Animals */}
      <h3>First Name: {user.firstName}</h3>
      <h3>Last Name: {user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />

      <hr style={{ margin: "20px 0" }} />

      {/* Exercise 4: HTML Tags in React */}
      <Exercise />
    </div>
  );
}

export default App;
