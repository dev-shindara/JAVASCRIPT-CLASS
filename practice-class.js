const input = require("prompt-sync")({ sigint: true });
console.log("WELCOME TO SHINDARA DRIVING LICENSE ISSUING APPLICATION")
// console.log("shindara omoloye")
let fullname = input("what is your fullname? ");
let age = Math.round(parseInt(input("how old are you? ")));
let drive = input("do you know how to drive a car? ");

console.log("hello " + fullname);
if (age < 18) {
  console.log("you are not eligible for a driving license ");
} else {
  console.log("you are eligible for a driving license,Hurray");
}
