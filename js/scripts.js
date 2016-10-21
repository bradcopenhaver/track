var q1Answer;
var q2Answer;
var q3Answer;
var favColor;

var result;

var determineTrack = function() {
  if (q1Answer && q2Answer && q3Answer){
    if (q1Answer === "front-end") {
      if (q3Answer === "mobile") {
        result = 3;
      }
      else if (q3Answer === "desktop") {
        result = 4;
      }
      else if (q2Answer === "small") {
        result = 1;
      }
      else {
        result = 4;
      }
    }
    else if (q3Answer === "mobile") {
      result = "3";
    }
    else if (q3Answer === "desktop") {
      result = "5";
    }
    else if (q2Answer === "big") {
      result = "2";
    }
    else {
      result = "1";
    }
  }
  else {
    result = "6";
  }
  return result;
}

var coloring = function() {
  $("#intro").addClass("color"+ favColor);
}
$(document).ready(function() {
  $(".disable :input").attr("disabled", true);
  $("#color").change(function(){
    favColor = $("#color").val();
    coloring();
  });
  $("form").submit(function(event) {
    event.preventDefault();


    q1Answer = $("input:radio[name=q1]:checked").val();
    q2Answer = $("input:radio[name=q2]:checked").val();
    q3Answer = $("input:radio[name=q3]:checked").val();
    favColor = $("#color").val();

    determineTrack();

    $(".track1").hide();
    $(".track2").hide();
    $(".track3").hide();
    $(".track4").hide();
    $(".track5").hide();
    $(".track6").hide();
    $(".output").hide();
    $(".track"+ result).show();
    $(".output").slideDown();
  });
});
