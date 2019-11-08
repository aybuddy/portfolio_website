import "./sass/main.scss";

$(".navigation__container a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});
$(".navigation__brand a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

// Responsive Nav

// const toggleButton = document.getElementsByClassName("navigation__toggle")[0];
// const navbarLinks = document.getElementsByClassName("navigation__container")[0];

// toggleButton.addEventListener("click", () => {
//   navbarLinks.classList.toggle("active");
// });

// SmoothScroll

//   (function() {
//     scrollTo();
//   }
// )();

// function scrollTo() {
//   const links = document.querySelectorAll(".scroll");
//   links.forEach(each => (each.onclick = scrollAnchors));
// }

// function scrollAnchors(e, respond = null) {
//   const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
//   e.preventDefault();
//   var targetID = respond
//     ? respond.getAttribute("href")
//     : this.getAttribute("href");
//   const targetAnchor = document.querySelector(targetID);
//   if (!targetAnchor) return;
//   const originalTop = distanceToTop(targetAnchor);
//   window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
//   const checkIfDone = setInterval(function() {
//     const atBottom =
//       window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
//     if (distanceToTop(targetAnchor) === 0 || atBottom) {
//       targetAnchor.tabIndex = "-1";
//       targetAnchor.focus();
//       window.history.pushState("", "", targetID);
//       clearInterval(checkIfDone);
//     }
//   }, 100);
// }
