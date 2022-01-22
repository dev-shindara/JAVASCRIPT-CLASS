const input = require("prompt-sync")({ sigint: true });

let number = 12;

let guess = input("guess a number ");

if (guess == 12) {
  console.log("correct");
} else {
  console.log("wrong try again");
}
