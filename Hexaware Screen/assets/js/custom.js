$().ready(function () {
  $(".slick-carousel").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    infinite: false,
  });
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 249) {
      $(".header").addClass("fadeOutLeft");
      $(".header").removeClass("fadeInLeft");
      $(".header-sticky").addClass("fadeInDown");
      $(".header-sticky").removeClass("fadeOutUp");
      $(".header-sticky").addClass("animated");
    } else {
      $(".header").addClass("fadeInLeft");
      $(".header").removeClass("fadeOutLeft");
      $(".header-sticky").addClass("fadeOutUp");
      $(".header-sticky").removeClass("fadeInUp");
    }
  });
});
