/*
setTimeout(() => {
    alert("Hello World");
}, 2000); */


/* setTimeout(() => {
    const container = document.getElementById("container");
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
}, 2000); */

let counter = 0;
const container = document.getElementById("container");

const intervalId = setInterval(() => {
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
    counter++;

    if (counter >= 5) {
        clearInterval(intervalId);
    }
}, 2000);

document.getElementById("clear").addEventListener("click", () => {
    clearInterval(intervalId);
});