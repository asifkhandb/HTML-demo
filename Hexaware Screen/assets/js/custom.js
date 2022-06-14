$().ready(function () {
  $(".slick-carousel").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    infinite: false,
  });
});

var swiper = new Swiper(".mySwiper", {
  speed: 500,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//  for sticky navbar

var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("header");

window.addEventListener("scroll", function (e) {
  last_scroll_position = window.scrollY;

  // Scrolling down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
    // header.removeClass('slideDown').addClass('slideUp');
    header.classList.remove("slideDown");
    header.classList.add("slideUp");

    // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
    // header.removeClass('slideUp').addClass('slideDown');
    header.classList.remove("slideUp");
    header.classList.add("slideDown");
  }

  new_scroll_position = last_scroll_position;
});

// for sticky navbar

// second swiper slider
var swiper = new Swiper(".mySwiperSecond", {
  slidesPerView: 2.2,
  spaceBetween: 35,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
