const input = require('prompt-sync')({ sigint: true });

function print(string) {
    console.log(string);
}


// console.log() === print;
// therefore console.log prints a word
// `${variableName}`
// if (condition) {

// }

const weather = input('What is the weather now? ');
print(`The weather is ${weather}`)


if (weather == 'hot') {
    console.log("On or Carry a fan or where a light cloth like singlet")
} else if (weather == "cold") {
    console.log("On a heater and where a thick cloth")
} else if (weather == "rainy") {

    console.log("look for an umbrella")

    let umbrellaAnswer = input("Did you find an umbrella [yes/no]? ")

    if (umbrellaAnswer == "yes") {
        console.log("Go out");
    } else if (umbrellaAnswer == "no") {

        console.log("look for a raincoat")

        let raincoatAnswer = input("Did you find a raincoat [yes/no]? ")

        if (raincoatAnswer == "yes") {
            console.log("Go out");
        } else {
            let eventAnswer = input("Is your event very important [yes/no]? ");

            if (eventAnswer == "yes") {
                console.log("Go under the rain");
            } else if (eventAnswer == "no") {
                console.log("Stay indoors");
            } else {
                console.log("I dont what you saying please start program again")
            }
        }

    } else {
        console.log("I dont understand what you are saying. start program again");
    }
} else {
    console.log(`I dont know what to do under this weather(${weather})`);
}