$(document).ready(function () {
  var currentFloor = 2;
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  var floorPath = $(".home-image path");
  var currentZero = $("body");



  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
    $(`[data-floor=${currentFloor}]`).toggleClass("current-floor");
  });





  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    };

  });



  counterDown.on("click", function () {
    if (currentFloor > 02) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });





  var intervalUp;
  counterUp.mousedown(function () {
    intervalUp = setInterval(do_Up, 150);
  }).mouseup(function () {
    clearInterval(intervalUp);
  }).mouseleave(function () {
    //this should help solve the problem that occurs when the mouse leaves the button while pressed down
    clearInterval(intervalUp);
  });

  function do_Up() {
    // whatever
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    };

  }

  var intervalDown;
  counterDown.mousedown(function () {
    intervalDown = setInterval(do_Down, 150);
  }).mouseup(function () {
    clearInterval(intervalDown);
  }).mouseleave(function () {
    //this should help solve the problem that occurs when the mouse leaves the button while pressed down
    clearInterval(intervalDown);
  });

  function do_Down() {
    // whatever
    if (currentFloor > 02) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }

  }



})


