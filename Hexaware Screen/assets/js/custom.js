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
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// third swiper slider

var swiper = new Swiper(".myswiperthird", {
  slidesPerView: 2.3,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//  four swiper slider

var swiper = new Swiper(".myswiperfour", {
  slidesPerView: 2.3,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// five swiper slider

var swiper = new Swiper(".myswiperfive", {
  slidesPerView: 3,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// six swiper slider

var swiper = new Swiper(".myswipersix", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// seven swiper slider

var swiper = new Swiper(".myswiperseven", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//  counter-number-animated

$(document).ready(function () {
  $(".counter").counterUp({
    delay: 1,
    time: 120,
  });
});

//  formValidation Contact form start

if ($(".formValidation").length) {
  $(".formValidation").bootstrapValidator({
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "form-remove",
      validating: "glyphicon glyphicon-refresh",
    },
  });
}

//  formValidation Contact form end
