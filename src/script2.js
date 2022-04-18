function resetBoxBrightness() {
    $("#box-1").css("filter", "brightness(50%)");
    $("#box-2").css("filter", "brightness(50%)");
    $("#box-3").css("filter", "brightness(50%)");
  }
  
  function renderBoxBrightness(i) {
    resetBoxBrightness();
    if (i == 1) {
      $("#box-1").css("filter", "brightness(100%)");
    } else if (i == 2) {
      $("#box-1").css("filter", "brightness(100%)");
      $("#box-2").css("filter", "brightness(100%)");
    } else if (i == 3) {
      $("#box-1").css("filter", "brightness(100%)");
      $("#box-2").css("filter", "brightness(100%)");
      $("#box-3").css("filter", "brightness(100%)");
    }
  }
  
  var myArray = [1, 2, 3];
  
  myArray.forEach(function (value, i) {
    $("#box-" + value).hover(
      function () {
        renderBoxBrightness(value);
      },
      function () {
        resetBoxBrightness();
      }
    );
  });