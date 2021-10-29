function BeepBoop(number) {
  let numberArray = []
  const oneRegex = new RegExp("1")
  for (i = 0; i <= number; i++) {
    numberArray.push(i.toString())
  }
  console.log(numberArray)
  numberArray.forEach(function(num, index) {
    if (num.match(oneRegex)) {
      numberArray[index] = "Beep!"
    }
  })
  return numberArray.join(", ")
}

console.log(BeepBoop(5));