import "./sass/main.scss";

const toggleButton = document.getElementsByClassName("navigation__toggle")[0];
const navbarLinks = document.getElementsByClassName("navigation__container")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    console.log(startTime);
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animationScroll);
}

var heroSection = document.querySelector(".navigation__brand");
heroSection.addEventListener("click", () => {
  smoothScroll("#hero", 1000);
});
var projectsSection = document.querySelector(".project__link");
projectsSection.addEventListener("click", () => {
  smoothScroll("#projects", 1000);
});
var aboutSection = document.querySelector(".about__link");
aboutSection.addEventListener("click", () => {
  smoothScroll("#about", 1000);
});
var skillsSection = document.querySelector(".skills__link");
skillsSection.addEventListener("click", () => {
  smoothScroll("#skills", 1000);
});
var contactSection = document.querySelector(".contact__link");
contactSection.addEventListener("click", () => {
  smoothScroll("#contact", 1000);
});
