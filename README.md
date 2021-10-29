# _My Portfolio_

#### By _**Christina Welch**_

#### _A protfolio page to showcase my work_

## Technologies Used

* _HTML_
* _CSS_

## Description

Welcome to my portfolio webpage, a simple webpage to introduce myself and my work. Within the page will be links to my work as well as contact info.

Thankyou!

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _open Portfolio/index.html_

_if you are unsure how to clone repositorys from github see https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository_

_Because this is just a simple webpage you can also just look at it by simply clicking the github-pages link under Enviorments on the right and then clicking view deployment on the right._

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

Test: "It should not allow the user to type a number greater than 100"
code: beepBoop(101);
Expected Output: "Mr. Roboger can't count that high. please type in a smaller number."

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