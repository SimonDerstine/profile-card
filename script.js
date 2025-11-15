/* javascript file purpose is to define the behavior of the page, including interactions, animations, and dynamic content */

const btn = document.getElementById("goal-btn");
const goalText = document.getElementById("goal-text");

btn.addEventListener("click", () => {
  goalText.classList.toggle("hidden");
  const poster = document.getElementById("poster");
});

const nameE1 = document.getElementById("name");

btn.addEventListener("click", () => {
    goalText.classList.toggle("hidden");
    poster.classList.toggle("hidden");
});


