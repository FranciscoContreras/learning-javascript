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

/*****************************
 * * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, 
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 
and 123 points.

1. Calculate the average score for each team

2. Decide which teams wins in average (highest average score), and print the 
winner to the console. Also include the average score in the output.

3. Then change the scores to show different winners.
 Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. 
Like before, log the average winner to the console. 
HINT: you will need the && operator to take the decision. 
If you can't solve this one, just watch the solution, it's no problem :)

5. Like before, change the scores to generate different winners, 
keeping in mind there might be draws.

GOOD LUCK 😀
*/

// Calcualte averages

/* let johnTeamAverage = (89 + 120 + 103) / 3; 

let miketeamAverage = (116 + 94 + 123) / 3;

let maryTeamAverage = (97 + 134 + 105) / 3;

if (johnTeamAverage > miketeamAverage && johnTeamAverage > maryTeamAverage) {
    console.log("John's team had the highest average with: " + johnTeamAverage); 
} else if (miketeamAverage > johnTeamAverage && miketeamAverage > maryTeamAverage) {
    console.log("Mike's team had the highest average with: " + miketeamAverage); 
} else if (maryTeamAverage > johnTeamAverage && maryTeamAverage > miketeamAverage) {
    console.log("Mary's team had the highest average with: " + maryTeamAverage); 
} else {
    console.log("All the teams had the same average.")
} */


/* 
    * Functions
*/

// ? DRY Priciple, Dont Repeat Yourself
/* function calcualteAge(birthYear) {
    return 2020 - birthYear;  
}

let fransAge = calcualteAge(1992); 

console.log(fransAge);

function yearsToRetire(birthYear, firstName) {
    let age = calcualteAge(birthYear);
    let retirement = 65 - age; 
    
    if (retirement > 0) {
        console.log(firstName + " retires in " + retirement + " years");
    } else {
        console.log(firstName + " is already in retirment"); 
    }
}

yearsToRetire(1948, 'Francisco');  */

/* 
    * Functions statements & Expressions
*/

// ? Function declation 
// function whatDoYouDo (job, firstName) 


// ? Fuction Expression
/* let whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + " teaches kids how to code";

        case "driver": 
            return firstName + " is a driver. ";

        case 'designer': 
            return firstName + " is a branding designer";

        default:
            return firstName + " does something else.";
    }
}

console.log(whatDoYouDo('teacher', "John")); 
console.log(whatDoYouDo('retired', "Mark")); */

/* 
    * Arrays
*/

/* let names = ['John', 'James', 'Jane']; 
let years = new Array(1990, 1969, 1948); // Almost never used, but another way to use arrays

// How to retrive data from array
console.log(names[2]);
console.log(names.length); 

// How to mutate data from array
names[1] = 'Ben'; 
names[names.length] = "Mary";  
console.log(names); 

// Different data types
let john = ['john', 'smith', 1992, 'teacher', false]; 

john.push('blue'); // adds to the end
john.unshift('Mr'); // adds to the beginning

console.log(john); 

john.pop(); // removes element from the end
john.shift(); // removes the first element
console.log(john); 

console.log(john.indexOf(1992)); // return position of requested element

let isDesigner = john.indexOf('designer') === -1 ? 
'John is not a designer' : "John IS a designer";

console.log(isDesigner);  */

