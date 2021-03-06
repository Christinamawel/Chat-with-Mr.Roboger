# _Chat with Mr.Roboger_
#### _A webpage with a chatty little robot_

![robot illustration](img/Robot-normal.png)

#### By _**Christina Welch**_
#### Robot Art By _**Joezhuang at vecteezy.com**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _JQuery_

## Description

Welcome! this little webpage features a simple lonely little robot who would like to be your friend. please type in some numbers into the input field and listen to what he has to say!

Thankyou!

## Setup/Installation Requirements

You can view this page here https://christinamawel.github.io/Chat-with-Mr.Roboger/

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _open Portfolio/index.html_

_if you are unsure how to clone repositorys from github see https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository_

## Tests

Describe: beepBoop()

Test: "It should return a string with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: "0"

Test: "It should return a string that counts down from 1 to 0 and replaces the 1 with "Beep!" when 1 is inputted"
code: beepBoop(1);
Expected Output: "0, Beep!"

Test: "It should return a string that counts down from 5 to 0 and replaces the 2 with "Boop" and the 3 with "Won't you be my neighbor?" when 5 is inputted"
code: beepBoop(5);
Expected Output: "0, Beep!, Boop, wont you be my neighbor?, 4, 5"

Test: "It should not allow the user to type a number greater than 1000"
code: beepBoop(1001);
Expected Output: "error"

Test: "It should not allow the user to type a number less than 0"
code: beepBoop(-5)
Expected Output "...boop?"

Test: "It should return all numbers counted down with the number containing one 1's changed to "Beep!""
code: beepBoop(10);
Expected Output: "0, Beep!, Boop, wont you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!"

Test: "It should return all numbers with 2's with "Boop!" and it should take precedence over the 1's when 12 is inputted"
code: beepBoop(12);
Expected Output: "0, Beep!, Boop, wont you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop"

Test : "It should return all numbers with 3's with "Won't you be my neighbor?" and it should take precedence over the 1's and 2's when 13 is inputted"
code: beepBoop(13);
Expected Output: "0, Beep!, Boop, wont you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop, wont you be my neighbor?"

## Known Bugs

no known bugs

## License

MIT

Copyright (c) _10/15/2021_ _Christina Welch_
