
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const ul = navDiv.querySelector("ul");
const newLi = document.createElement("li");

const logoutText = document.createTextNode("Logout");

newLi.appendChild(logoutText);


ul.appendChild(newLi);

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log("First link text:", firstLi.textContent); 
console.log("Last link text:", lastLi.textContent); 