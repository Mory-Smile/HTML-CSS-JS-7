let body = document.querySelector("body");
let nav = document.querySelector("nav");
let modeToggle = document.querySelector(".dark-light");
let searchToggle = document.querySelector(".searchToggle");

let input = document.querySelector("input");

// Dark & Light
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");
});

// Search Box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

// Input Value
input.addEventListener("click", () => {
  input.value = "";
  input.classList.toggle("active");
});
