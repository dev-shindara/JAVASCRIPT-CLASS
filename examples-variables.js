let hello = "Hello World"; // this is a "string" data type
let numberNine = 9 // this is a "number" data type
let b = false; // this is a "boolean (boolean means true or false)" data type
let points = 0.3; // this is a "number or float" data type
let character = "b"; // this is a "string" data type
let phone = "My Samsung Phone"; // this is a "string" data type
// string, number, boolean, array, objects, null, undefined

let valuesAndDataType = [
        { variableName: "hello", value: hello, dataType: typeof hello },
        { variableName: "numberNine", value: numberNine, dataType: typeof numberNine },
        { variableName: "b", value: b, dataType: typeof b },
        { variableName: "points", value: points, dataType: typeof points },
        { variableName: "character", value: character, dataType: typeof character },
        { variableName: "phone", value: phone, dataType: typeof phone },
    ] // this is an array of objects

// // console.table(valuesAndDataType) // this is printing a table consist of values and data types

// Brackets [()]
// Of or Multiplication (*)
// Division (/)
// Multiplication or Of (*)
// ADDITION (+)
// Subtract (-)
// Power or Raise to Power (**)
// Modulus (%)


// average = Sum of X / n of X


let student1 = 10;
let student2 = 11;
let student3 = 12;
let student4 = 16;
console.log("This is student 4 age before he changed his age   " + student4)
student4 = 12;
console.log("This is student 4 age after he changed his age   " + student4)
let student5 = 8;
let totalAge = (student1 + student2 + student3 + student4 + student5);
let averageAge = totalAge / 5;

console.log("The total age of the students in the class is: " + totalAge);
console.log("The average age of the students in the class is: " + averageAge);