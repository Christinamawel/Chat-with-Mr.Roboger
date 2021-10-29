//business Logic
let lastInput = "";

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

function angryBeepBoop(input) {
  console.log(input);
  console.log(lastInput);
  if (input === 69 || input === 666 || input === 420) {
    if (lastInput === "strikeTwo") {
      return "no-response"
    } else if (lastInput === "strikeOne") {
      return "very-angry"
    } else {
      return "angry"
    }
  } else {
    if (lastInput === "strikeTwo") {
      return "no-response"
    } else if (lastInput === "strikeOne") {
      return "forgive"
    } else {
      return "normal"
    }
  }
}

function lastInputChanger(output, input) {
  if (input !== 69 && output === "no-response" || input !== 666 && output === "no-response" || input !== 420 && output === "no-response") {
    lastInput = "strikeOne"
  } else if (output === "normal" || output === "forgive") {
    lastInput = ""
  } else if (output === "angry") {
    lastInput = "strikeOne"
  } else if (output === "very-angry" || output === "no-response") {
    lastInput = "strikeTwo"
  }
}

//UI Logic
$(document).ready(function() {
  $("form#number-form").submit(function(event){
    event.preventDefault();
    $(".response").hide();
    $(".robot").hide();
    const input = parseInt($("#number-input").val());

    if (angryBeepBoop(input) === "normal") {
      if (input < 80) {
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
      console.log("ran normal")
    } else if (angryBeepBoop(input) === "angry") {
      $("#angry").show();
      $("#angry-robot").show();
    } else if (angryBeepBoop(input) === "very-angry") {
      $("#very-angry").show();
      $("#angry-robot").show();
    } else {
      $("#no-response").show();
      $("#angry-robot").show();
    }

    if (angryBeepBoop(input) !== "no-response") {
    $("#output").text(BeepBoop(input));
    }
    $("#output-container").show();
    $("#intro").hide();
    lastInputChanger(angryBeepBoop(input), input);
  })
})