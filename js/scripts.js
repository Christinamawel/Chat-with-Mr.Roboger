function BeepBoop(number) {
  let numberArray = [];
  const oneRegex = new RegExp("1");
  const twoRegex = new RegExp("2");

  for (i = 0; i <= number; i++) {
    numberArray.push(i.toString())
  }

  numberArray.forEach(function(num, index) {
    if (num.match(twoRegex)) {
      numberArray[index] = "Boop";
    } else if (num.match(oneRegex)) {
      numberArray[index] = "Beep!";
    }
  })

  return numberArray.join(", ")
}

console.log(BeepBoop(5));