$('#survey-form').submit(() => {
  $('.container').css("display", "none");
  $("#title").css("font-size", "36px");
  $("#title").text("Thank you for your participation");
  return false;
});