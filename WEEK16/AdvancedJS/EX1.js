// ------------------- #1 -------------------
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3; // condition true, so a is reassigned
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne(); 
// Prediction: "inside the funcOne function 3"

// #1.2 - If the variable is declared with const instead of let:
// const a = 5;
// Then inside the if block, reassigning a = 3 would throw
// TypeError: Assignment to constant variable.


// ------------------- #2 -------------------
let a = 0;
function funcTwo() {
    a = 5; // modifies the outer/global a
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree(); // "inside the funcThree function 0"
funcTwo();   // sets a = 5
funcThree(); // "inside the funcThree function 5"

// #2.2 - If declared with const instead of let:
// const a = 0;
// Then funcTwo() tries to reassign a = 5, which throws
// TypeError: Assignment to constant variable.


// ------------------- #3 -------------------
function funcFour() {
    window.a = "hello"; // creates/overwrites a global variable
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour();  // sets window.a = "hello"
funcFive();  // "inside the funcFive function hello"
// Note: this happens regardless of let/const earlier, 
// because window.a explicitly defines a global property.


// ------------------- #4 -------------------
let a = 1;
function funcSix() {
    let a = "test"; // this a is scoped inside funcSix
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix(); // "inside the funcSix function test"
// Outer a (value 1) is untouched.

// #4.2 - If declared with const instead of let:
// const a = "test"; works fine, still scoped to the function.
// No reassignment happens, so result is the same.


// ------------------- #5 -------------------
let a = 2;
if (true) {
    let a = 5; // block-scoped variable (different from outer a)
    alert(`in the if block ${a}`); // "in the if block 5"
}
alert(`outside of the if block ${a}`); // "outside of the if block 2"

// #5.1 - run in the console
// Output will be:
// "in the if block 5"
// "outside of the if block 2"

// #5.2 - If declared with const instead of let:
// const a = 2; 
// const a = 5; inside the if block is fine because it’s a 
// different scope. No reassignment happens, so  result is the same.
