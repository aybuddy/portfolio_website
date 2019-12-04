import "./sass/main.scss";

// const toggleButton = document.getElementsByClassName("navigation__toggle")[0];
// const navbarLinks = document.getElementsByClassName("navigation__container")[0];

// toggleButton.addEventListener("click", e => {
//   e.preventDefault();
//   navbarLinks.classList.toggle("active");
// });

// jquery - works
// TODO: Add click event outside of box to close
$(document).ready(function() {
  $(".navigation__toggle").click(function(e) {
    e.preventDefault();
    // e.stopPropagation();
    $(".navigation__container").toggleClass("active");
  });
});

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
