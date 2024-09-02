$(document).ready(function () {

  $(".select-theme1").click(function () {
    $(".theme1").show();
    $(".theme2, .theme3, .theme4").hide();
  });

  $(".select-theme2").click(function () {
    $(".theme2").show();
    $(".theme1, .theme3, .theme4").hide();
  });

  $(".select-theme3").click(function () {
    $(".theme3").show();
    $(".theme1, .theme2, .theme4").hide();
  });
  $(".reset").click(function () {
    $(".theme1, .theme2, .theme3, .theme4").show();
  });
 
});
