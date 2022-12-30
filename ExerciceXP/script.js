// ================ Exercice 1
let favoriteFood = "Foutou";
let favoriteMeal = "petit dej";

console.log(`Je mange du ${favoriteFood} à chaque ${favoriteMeal}`);

// ================ Exercice 2
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries[0];
/******************************************************
Correcteur: Yannick GOUGUIA

Revoir cet exercice, peut mieux faire, 
Imagniez que vous ayez un tableau de 100 éléments, vous ne pourriez pas le faire le manuellement

*****************************************************/
console.log(
  `I watched 3 series : ${myWatchedSeries[0]}, ${myWatchedSeries[1]}, ${myWatchedSeries[2]}`
);
myWatchedSeries[myWatchedSeries.indexOf("the big bang theory")] = "friends";
myWatchedSeries.push("Dexter");    // Un vrai connaisseur 😂😂😂
myWatchedSeries.splice(0, 0, "Breaking Bad");    // Un vrai connaisseur 😂😂😂
myWatchedSeries.splice(myWatchedSeries.indexOf("money heist"), 1);
console.log(myWatchedSeries);

// ================ Exercie 3
let temp_ceil = 37;
var temp_farein = (temp_ceil * 9) / 5 + 32;
console.log(`${temp_ceil} °C is ${temp_farein}°F.`);

// ================ Execice 4

let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: It will output 45, because 34 and 21 are numbers
// Actual: 45

a = 2;

console.log(a + b); //second expression
// Prediction: It will output 23, because 2 and 21 are numbers
// Actual: 23

console.log(c);
// Prediction: It will output undefined, because 2 doesn't have any value
// Actual: undefined

// ================ Exercice 5

typeof 15;
// Prediction: number
// Actual: number

typeof 5.5;
// Prediction: number
// Actual: number

typeof NaN;
// Prediction: number
// Actual: number

typeof "hello";
// Prediction: string
// Actual: string

typeof true;
// Prediction: boolean
// Actual: boolean

typeof (1 != 2);
// Prediction: boolean
// Actual: boolean

"hamburger" + "s";
// Prediction: "hamburger5"
// Actual:

"hamburgers" - "s";
// Prediction: "hamburgerss"
// Actual:

"1" + "3";
// Prediction: "13"
// Actual: "13"

"1" - "3";
// Prediction: "13"
// Actual: "13"

"johnny" + 5;
// Prediction: "johnny5"
// Actual: "johnny5"

"johnny" - 5;
// Prediction: "johnny5"
// Actual: "johnny5"

99 * "hello";
// Prediction: "99hello"
// Actual:

1 != 1;
// Prediction: false
// Actual: false

1 == "1";
// Prediction: true
// Actual: true

1 === "1";
// Prediction: false
// Actual: false

// ================= Exercice 6

5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction:
// Actual: 54

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

"Java" + "Script"
// Prediction:JavaScript
// Actual:JavaScript

" " + " "
// Prediction:
// Actual:

" " + 0
// Prediction: " 0"
// Actual: " 0"

true + true
// Prediction: 2
// Actual: 2

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual:1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual:false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: "Bobbill"
// Actual: "Bobbill"
