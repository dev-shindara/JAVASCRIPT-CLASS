const input = require("prompt-sync")({ sigint: true });
console.log("WELCOME TO SHINDARA DRIVING LICENSE ISSUING APPLICATION ✨✨✨");
// console.log("shindara omoloye")
let fullname = input("what is your fullname? ");
let age = Math.round(parseInt(input("how old are you? ")));
let drive = input("do you know how to drive a car? ");

console.log(`Hello ${fullname.toLowerCase()} 👋`);

if (drive.toLowerCase() == "yes") console.log("You know how to drive 🚗");
if (drive.toLowerCase() == "no") console.log("You dont know how to drive 🚨");

if (age < 18) {
  console.log("you are not eligible for a driving license 😔.");
} else if (age >= 18 && age < 50) {
  console.log("you are eligible for a driving license, Hurray 😊.");
} else if (age >= 50) {
  console.log(
    "you are eligible for a driving license, But you are quite old 👴."
  );
} else {
  console.log("I dont what you are saying 🤔.");
}
