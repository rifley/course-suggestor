$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputOne = parseInt($("#questionOne").val());
    var inputTwo = parseInt($("#questionTwo").val());
    var inputThree = parseInt($("#questionThree").val());
    var inputFour = parseInt($("#questionFour").val());

    if (inputOne > 3) {
      $("#output").text(inputOne);
    }
    else {
      alert("Hey");
    }
  })
});
