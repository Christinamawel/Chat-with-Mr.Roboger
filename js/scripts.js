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
    const input = $("#number-input").val();
    if (input > 100) {
      $("#normal-robot").hide();
      $("#happy-robot").show();
    }
    $("#output").text(BeepBoop(input));
    $("#output-container").show();
    $("#intro").hide();
  })
})