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

// $(function () {
//   var scroll = $(document).scrollTop();
//   var navHeight = $(".nav-area").outerHeight();
//   $(window).scroll(function () {
//     var scrolled = $(document).scrollTop();
//     if (scrolled > navHeight) {
//       $(".nav-area").addClass("animate");
//     } else {
//       $("nav-area").removeClass("animate");
//     }
//     if (scrolled > scroll) {
//       $("nav-area").removeClass("sticky");
//     } else {
//       $$("nav-area").addClass("sticky");
//     }
//     scroll = $(document).scrollTop();
//   });
// });
