// const prompt = require('prompt-sync');
// const input = prompt({ sigint: true })

const input = require('prompt-sync')({ sigint: true });

let name = input("What is your name: ")


console.log("My name is " + name)

let ageString = input("how old are you")
let ageNumber = parseInt(ageString)
let ageRoundedUp = Math.round(ageNumber)

// print out "Hello " + name
if(ageRoundedUp < 18){
    // print out "You are not eligible for a DRIVING license"
}else{
    // print out "You are eligible for a DRIVING license, HURRAY!!!"
}
