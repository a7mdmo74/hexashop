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
  $(".preloader").fadeOut("slow");
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    nav: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("#navbarResponsive a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $("#navbarResponsive ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
