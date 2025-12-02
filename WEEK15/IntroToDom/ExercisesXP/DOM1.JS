
const container = document.getElementById("container");
console.log(container);

const secondLiFirstUl = document.querySelector(".list li:nth-child(2)");
secondLiFirstUl.textContent = "Richard";

const allLis = document.querySelectorAll(".list li");
allLis.forEach(li => {
  if (li.textContent === "Sarah") {
    li.remove();
  }
});

const allUls = document.querySelectorAll(".list");
allUls.forEach(ul => {
  ul.firstElementChild.textContent = "Zaynah"; 
});

allUls.forEach(ul => {
  ul.classList.add("student_list");
});

allUls[0].classList.add("university", "attendance");
