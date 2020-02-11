/*****************************
* * CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. 
(Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

/* // Mark 
let markMass = 80;
let markHeight = 1.8;
let markBMI = markMass / (markHeight * markHeight);

// John
let johnMass = 62;
let johnHiehgt = 1.5;
let johnBMI = johnMass / (johnHiehgt * johnHiehgt)

// Calculate for BMI 

console.log("Is Mark's BMI higher than John's? " + (markBMI > johnBMI)); */

// * If Else Statments 

/* let firstName = 'John'; 
let civilStatus = 'single'; 

if (civilStatus === 'married'){
    console.log(firstName + ' is married!'); 
} else {
    console.log(firstName + " will hopefully marry soon...");
}

let isMarried = true; 
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + " will hopefully marry soon...");
}
 */

/* // Mark
let markMass = 80;
let markHeight = 1.8;
let markBMI = markMass / (markHeight * markHeight);

// John
let johnMass = 82;
let johnHiehgt = 2;
let johnBMI = johnMass / (johnHiehgt * johnHiehgt)

if (johnBMI > markBMI) {
    console.log("John's BMI is greater than Mark."); 
} else {
    console.log("Mark's BMI is greater than John's.")
} */

/* // * Boolean Logic

let firstName = 'Francisco'; 
let age = 27; 

if (age < 16) {
    console.log(firstName + " is a boy."); 
} else if (age >= 13 && age < 20) {
    console.log( firstName + ' is  a teenager.')
} else {
    console.log(firstName + " is a man."); 
} */

/* 
    * The Tenrary Operator 
*/

/* let firstName = 'Francisco'; 

let age = 38; 

- // ? The question mark is like the "If" statement, the following ":" is the
- // ? "else" statement in an if/else statement 

age >= 18 ? console.log(firstName + " drinks beer") 
: console.log(firstName + " drinks joice"); 

- // ? assisning the Ternary operator within or to a variable 
let drink = age >= 18 ? "beer" : "juice";

console.log(drink) */

// * The if statement

// if (age >= 18) {
//     let drink = "beer";
// } else {
//     let drink = "joice"; 
// }

/* 
    * The Switch Statement
*/

/* let job = 'instructor'; 

switch (job) {
    case "teacher":
    case "instructor":
        console.log(firstName + ' teaches kids how to code.');
        break;
    case "driver":
        console.log(firstName + ' teaches kids how drive.');
        break; 
    case "designer": 
        console.log(firstName + ' teaches kids how to design.');
        break; 
    default:
        console.log(firstName + ' does something else.');
} */

// ? The statement that is true is the one that will be executed
/* switch (true) {
    case age < 13:
        console.log(firstName + " is a boy"); 
        break;
    case age >= 13 && age < 20: 
        console.log(firstName + " is a teenager"); 
        break; 
    case age >= 20 && age < 30: 
        console.log(firstName + " is a young man");
        break;
    default:
        console.log(firstName + " is a man"); 
        break;
} */


/* 
    * Truthy and falsy values and equality operators 
*/

// ? falsy values: undefined, null, -0, "", NaN
// ? Not exactly false but will evaluate to false

// ? truthy values: Not falsy avlues

/* let height;

height = 23; 

if (height || height === '' ) {
    console.log("Valiable is defined"); 
} else {
    console.log("Variable has NOT been defined"); 
}

* Equality Operators

if (height === "23") {
    console.log('The == operator does type coercion!'); 
} */