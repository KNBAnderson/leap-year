// business logic
function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// user interface logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = isLeapYear(year);

    $(".year").text(year);

    if (isNaN(year)){
      $(".notANumber").show();
      $(".number").hide();
    } else if (!result) {
      $(".number").show();
      $(".notANumber").hide();                // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".number").show();
      $(".notANumber").hide();
      $(".not").text("");
    }
    $("#result").show();
  });
});
