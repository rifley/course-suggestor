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
      $(".general").hide();
      $(".seekHelp").hide();
      $("h4").removeClass("highlight");
      $(".track").removeClass("highlight");
      $("#curious").hide();
      $("#pair").hide();
      if ( 1 < inputTwo && inputTwo < 4 ) {
        $("body").removeClass("lover");
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
        $(".general").hide();
        $(".seekHelp").hide();
        $("h4").removeClass("highlight");
        $(".track").removeClass("highlight");
        $("#curious").hide();
        $("#pair").hide();
        $("body").addClass("lover");
        $(".tracks").addClass("visible");

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
        $("h4").removeClass("highlight");
        $(".track").removeClass("highlight");
        $("#curious").hide();
        $("#pair").show();

      }


    }
    else if (inputOne === 4) {
      $(".general").hide();
      $("h4").removeClass("highlight");
      $(".track").removeClass("highlight");
      $("#curious").hide();
      $("#pair").hide();
      $(".seekHelp").show();

    }
    else {

      $("body").removeClass("lover");
      $(".seekHelp").hide();
      $("#curious").hide();
      $("#pair").hide();
      $(".general").show();
      $(".track").addClass("highlight");

    }
    if (inputFive===5) {

      $("#curious").show();
    }
  })
});
