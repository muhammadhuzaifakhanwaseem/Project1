$(document).ready(function(){
    $("#lmor").hover(function(){
        $("#lmor").css("border-bottom", "1px solid rgb(141, 141, 141)"),
        $("#lmor").css("cursor", "pointer"),
      $("#right").css("transform", "translateX(3px)");
      }, function(){
          $("#lmor").css("border-bottom", "0px solid white"),
      $("#right").css("transform", "translateX(-10px)");
    });
  });