var q1Answer;
var q2Answer;
var q3Answer;
var favColor;

var result;

var determineTrack = function() {
  if (q1Answer && q2Answer && q3Answer){
    if (q3Answer === "mobile") {
      result = "3";
    }
    else if (q3Answer === "desktop") {
      result = "5";
    }
    else if (q2Answer === "small") {
      result = "1";
    }
    else if (q1Answer === "front-end") {
      result = "4";
    }
    else {
      result = "2";
    }
  }
  else {
    result = "6";
  }
  return result;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    q1Answer = $("input:radio[name=q1]:checked").val();
    q2Answer = $("input:radio[name=q2]:checked").val();
    q3Answer = $("input:radio[name=q3]:checked").val();
    favColor = $("#color").val();

    determineTrack();

    $(".track"+ result).show();
  });
});
