
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);

function burgerClick() {
  burger.classList.toggle("active"); 
  nav.classList.toggle("active");
}

nav.addEventListener("click", menuClick);

function menuClick() {
  burger.classList.remove("active"); 
  nav.classList.remove("active"); 
}
