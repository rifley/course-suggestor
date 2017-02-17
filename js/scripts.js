$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputOne = parseInt($("#questionOne").val());
    var inputTwo = parseInt($("#questionTwo").val());
    var inputThree = parseInt($("#questionThree").val());
    var inputFour = parseInt($("#questionFour").val());
    var inputFive = parseInt($("#questionFive").val());
    console.log(inputOne);
    if (inputOne !== 1 && inputOne !== 4) {

      if ( 1 < inputTwo && inputTwo < 4 ) {
        $("body").removeClass("lover");
        $("#outputTest").hide();
        if (inputThree === 1) {
          $("#cSharp").addClass("highlight");
        }
        else if (inputThree===2 && inputFour===3) {
          $("#ruby").addClass("highlight");
        }
        else if (inputThree===2 && inputFour===2) {
          $("#java").addClass("highlight");
        }
        else if (inputThree===3) {
          $("#php").addClass("highlight");
        }

      }
      else if (inputTwo === 4) {
        $("#outputTest").hide();
        $("body").addClass("lover");
        if (inputThree === 1) {
          $("#cSharp").addClass("highlight");
        }
        else if (inputThree===2 && inputFour===3) {
          $("#ruby").addClass("highlight");
        }
        else if (inputThree===2 && inputFour===2) {
          $("#java").addClass("highlight");
        }
        else if (inputThree===3) {
          $("#php").addClass("highlight");
        }

      }

      else {
        $("body").removeClass("lover");
        $(".general").hide();
        $(".seekHelp").hide();
        $(".groupComfort").show();
        alert("here");
      }


    }
    else if (inputOne === 4) {
      $(".general").hide();
      $(".seekHelp").show();
    }
    else {
      $("#outputTest").show();
      $("#outputTest").addClass("greenBackground")
      $("body").removeClass("lover");
      $(".general").show();
      $(".seekHelp").hide();

    }
    if (inputFive===5) {

      $("#curious").show();
    }
  })
});
