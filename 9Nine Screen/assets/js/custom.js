if ($(".formValidation").length) {
  $(".formValidation").bootstrapValidator({
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "form-remove",
      validating: "glyphicon glyphicon-refresh",
    },
  });
}

$(".slider").slick({
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  fadeSpeed: 1000,
});
