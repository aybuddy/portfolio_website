import "./sass/main.scss";

const toggleButton = document.getElementsByClassName("navigation__toggle")[0];
const navbarLinks = document.getElementsByClassName("navigation__container")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
