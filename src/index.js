import "./sass/main.scss";

// Responsive Nav

const toggleButton = document.getElementsByClassName("navigation__toggle")[0];
const navbarLinks = document.getElementsByClassName("navigation__container")[0];

document.addEventListener("click", evt => {
  if (evt.target === toggleButton) navbarLinks.classList.toggle("active");
});

// SmoothScroll

// window.scroll({
//   top: 2500,
//   left: 0,
//   behavior: "smooth"
// });

// window.scrollBy({
//   top: 100,
//   left: 0,
//   behavior: "smooth"
// });

// document.querySelector("#hero").scrollIntoView({
//   behavior: "smooth"
// });
// document.querySelector("#projects").scrollIntoView({
//   behavior: "smooth"
// });
// document.querySelector("#about").scrollIntoView({
//   behavior: "smooth"
// });
// document.querySelector("#skills").scrollIntoView({
//   behavior: "smooth"
// });
// document.querySelector("#contact").scrollIntoView({
//   behavior: "smooth"
// });

(function() {
  scrollTo();
})();

function scrollTo() {
  const links = document.querySelectorAll(".scroll");
  links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  var targetID = respond
    ? respond.getAttribute("href")
    : this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);
  window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
  const checkIfDone = setInterval(function() {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = "-1";
      targetAnchor.focus();
      window.history.pushState("", "", targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}
