let bottles = parseInt(prompt("Enter the number of bottles to start with:", "99"));

let takeDown = 1; 
while (bottles > 0) {
  let bottleWord = bottles === 1 ? "bottle" : "bottles";

  console.log(`${bottles} ${bottleWord} of beer on the wall`);
  console.log(`${bottles} ${bottleWord} of beer`);

  let pronoun = takeDown === 1 ? "it" : "them";

  if (takeDown > bottles) {
    takeDown = bottles;
  }

  console.log(`Take ${takeDown} down, pass ${pronoun} around`);

  bottles -= takeDown;
  takeDown++;

 
  let newBottleWord = bottles === 1 ? "bottle" : "bottles";
  if (bottles > 0) {
    console.log(`${bottles} ${newBottleWord} of beer on the wall\n`);
  } else {
    console.log(`No bottle of beer on the wall 🍺\n`);
  }
}
