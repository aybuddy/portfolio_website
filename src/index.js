import "./sass/main.scss";

// Responsive Nav

const toggleButton = document.getElementsByClassName("navigation__toggle")[0];
const navbarLinks = document.getElementsByClassName("navigation__container")[0];

document.addEventListener("click", evt => {
  if (evt.target === toggleButton) navbarLinks.classList.toggle("active");
});

// SmoothScroll

window.scroll({
  top: 2500,
  left: 0,
  behavior: "smooth"
});

window.scrollBy({
  top: 100,
  left: 0,
  behavior: "smooth"
});

document.querySelector("#hero").scrollIntoView({
  behavior: "smooth"
});
document.querySelector("#projects").scrollIntoView({
  behavior: "smooth"
});
document.querySelector("#about").scrollIntoView({
  behavior: "smooth"
});
document.querySelector("#skills").scrollIntoView({
  behavior: "smooth"
});
document.querySelector("#contact").scrollIntoView({
  behavior: "smooth"
});
