// App.js
import React from "react";
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise from "./Exercise3";

function App() {
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <div className="App">
      {/* Exercise 1 & 2 */}
      <h3>First Name: {user.firstName}</h3>
      <h3>Last Name: {user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />

      <hr style={{ margin: "20px 0" }} />

      {/* Exercise 3 */}
      <Exercise />
    </div>
  );
}

export default App;
