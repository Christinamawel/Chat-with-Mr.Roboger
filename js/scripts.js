//business Logic

function BeepBoop(number) {
  let numberArray = [];
  const oneRegex = new RegExp("1");
  const twoRegex = new RegExp("2");
  const threeRegex = new RegExp("3");

  if (number > 1000) {
    return "Mr. Roboger can't count that high. please type in a smaller number."
  }

  for (i = 0; i <= number; i++) {
    numberArray.push(i.toString())
  }

  numberArray.forEach(function(num, index) {
    if (num.match(threeRegex)) {
      numberArray[index] = "Won't you be my neighbor?";
    } else if (num.match(twoRegex)) {
      numberArray[index] = "Boop";
    } else if (num.match(oneRegex)) {
      numberArray[index] = "Beep!";
    }
  })

  return numberArray.join(", ")
}

console.log(BeepBoop(1001));

//UI Logic
$(document).ready(function() {
  $("form#number-form").submit(function(event){
    event.preventDefault();
    $(".response").hide();
    $(".robot").hide();
    const input = $("#number-input").val();

    if (input == 69 || input == 666 || input == 420) {
      $("#angry").show();
      $("#angry-robot").show();
    } else if (input < 80) {
      $("#pleasant").show();
      $("#normal-robot").show();
    } else if (input < 200) {
      $("#opinion").show();
      $("#normal-robot").show();
    } else if (input < 500) {
      $("#kind").show();
      $("#happy-robot").show();
    } else if (input < 700) {
      $("#show").show();
      $("#normal-robot").show();
    } else {
      $("#compliment").show();
      $("#happy-robot").show();
    }

    $("#output").text(BeepBoop(input));
    $("#output-container").show();
    $("#intro").hide();
  })
})