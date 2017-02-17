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
      if ( 1 < inputFour && inputFour < 4 ) {
        if (inputTwo+inputThree === 2) {
          alert("microsoft");
        }
        else if (inputTwo+inputThree>2 && inputTwo+inputThree<5) {
          alert("PHP");
        }
        else {
          alert("ruby");
        }

      }
      else if (inputFour === 4) {
        $(".lover").show();
        alert("lover");
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
      $(".seekHelp").hide();
      $(".general").show();
    }
  })
});
