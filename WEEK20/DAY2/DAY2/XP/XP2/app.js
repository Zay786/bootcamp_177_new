// app.js
import { persons } from './data.js';

// Function to calculate average age
function calculateAverageAge(arr) {
  const totalAge = arr.reduce((sum, person) => sum + person.age, 0);
  const avgAge = totalAge / arr.length;
  console.log(`Average age: ${avgAge}`);
}

// Use the function
calculateAverageAge(persons);
