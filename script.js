/* javascript file purpose is to define the behavior of the page, including interactions, animations, and dynamic content */

const btn = document.getElementById("goal-btn");
const goalText = document.getElementById("goal-text");

btn.addEventListener("click", () => {
  goalText.classList.toggle("hidden");
});

const nameE1 = document.getElementById("name");

nameE1.addEventListener("click", () => {
    nameE1.style.color = nameE1.style.color === "red" ? "blue" : "red" ;
});

