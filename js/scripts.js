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
      $("#output").text(inputOne);
      if ( 1 < inputTwo && inputTwo < 4 ) {
        $("body").removeClass("lover");
        if (inputThree === 1) {

          alert("cSharp");
        }
        else if (inputThree===2 && inputFour===3) {
          alert("Ruby");
        }
        else if (inputThree===2 && inputFour===2) {
          alert("Java")
        }
        else if (inputThree===3) {
          alert("PHP");
        }

      }
      else if (inputTwo === 4) {
        $("body").addClass("lover");
        if (inputThree === 1) {

          alert("cSharp");
        }
        else if (inputThree===2 && inputFour===3) {
          alert("Ruby");
        }
        else if (inputThree===2 && inputFour===2) {
          alert("Java")
        }
        else if (inputThree===3) {
          alert("PHP");
        }

      }

      else {
        $(".groupComfort").show();
        alert("here");
      }


    }
    else if (inputOne === 4) {
      $(".general").hide();
      $(".seekHelp").show();
    }
    else {
      $(".general").show();
      $(".seekHelp").hide();
      $("#outputTest").addClass("greenBackground")
    }
  })
});
