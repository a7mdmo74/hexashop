let navBtn = document.querySelector(".nav-toggler");
let navList = document.querySelector(".navbar-nav");
let navbar = document.querySelector(".navbar");
let dropDown = document.querySelectorAll(".dropdown");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("toggle");
  navList.classList.toggle("open");
});

dropDown.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.classList.toggle("open");
  });
});

window.onscroll = function () {
  if (
    document.body.scrollTop > 730 ||
    document.documentElement.scrollTop > 730
  ) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
};

// owl carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
      },
    },
  });
});
