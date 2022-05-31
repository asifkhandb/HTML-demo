if ($(".formValidation").length) {
  $(".formValidation").bootstrapValidator({
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "form-remove",
      validating: "glyphicon glyphicon-refresh",
    },
  });
}
