/*****************************
* CODING CHALLENGE 1
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

// Mark 
let markMass = 80;
let markHeight = 1.8;
let markBMI = markMass / (markHeight * markHeight);

// John
let johnMass = 62;
let johnHiehgt = 1.5;
let johnBMI = johnMass / (johnHiehgt * johnHiehgt)

// Calculate for BMI 

console.log("Is Mark's BMI higher than John's? " + (markBMI > johnBMI));