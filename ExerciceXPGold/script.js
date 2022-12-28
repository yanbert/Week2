// ============== Exercice 1
let sentence = ["my", "favorite", "color", "is", "blue"];
console.log(sentence.join(" "));

// ============== Exercice 2
let str1 = "mix";
let str2 = "pod";

str1 = str1.split("");
let intermediate = str1[0];
str1[0] = str1[1];
str1[1] = intermediate;
str1 = str1.join("");

let str3 = [str1, str2].join(" ");
console.log(str3);

// ============== Exercice 3

let num1 = Number(prompt("Enter num1"));
let num2 = Number(prompt("Enter num2"));

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
