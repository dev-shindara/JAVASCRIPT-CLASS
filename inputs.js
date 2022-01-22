// const prompt = require('prompt-sync');
// const input = prompt({ sigint: true })

const input = require('prompt-sync')({ sigint: true });

let name = input("What is your name: ")


console.log("My name is " + name)