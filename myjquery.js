$(document).ready(function(){
  $("#hot-button").click(function(){
    $("#hot-button").css("background-color","red");
  });

  $("#cold-button").click(function(){
    $("#cold-button").css("background-color","blue");
  });

  $("#mode_changer").click(function(){
    $("#mode_changer").fadeOut(1000);
  })


});