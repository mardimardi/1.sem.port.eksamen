
const burger = document.querySelector(".burger");
const nav = document.querySelector("header nav");

burger.addEventListener("click", burgerClick);

function burgerClick() {
 burger.addEventListener("click", () => {
   burger.classList.toggle("active"); // Toggle active state for the burger icon
   nav.classList.toggle("active"); // Toggle active state for the nav menu
 });
}

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    // Only trigger if a link is clicked
    burger.classList.remove("active");
    nav.classList.remove("active");
  }
});

