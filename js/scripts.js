$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = ["person1", "mom", "food", "verb", "noun"];
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    // var person1Input = $("input#person1").val();
    // var momInput = $("input#mom").val();
    // var foodInput = $("input#food").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();
    //
    // $(".person1").text (person1Input);
    // $(".mom").text (momInput);
    // $(".food").text (foodInput);
    // $(".verb").text(verbInput);
    // $(".noun").text (nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
