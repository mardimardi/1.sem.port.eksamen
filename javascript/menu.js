document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("header nav");

  if (burger && nav) {
    // Ensure elements exist
    burger.addEventListener("click", () => {
      burger.classList.toggle("active"); // Toggle active state for the burger icon
      nav.classList.toggle("active"); // Toggle active state for the nav menu (dropdown)
    });

    nav.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        // Only trigger if a link is clicked
        burger.classList.remove("active");
        nav.classList.remove("active");
      }
    });
  } else {
    console.error("Burger or nav element not found!");
  }
});
