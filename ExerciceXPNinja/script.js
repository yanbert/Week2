// ============== Exercice 1
5 >= 1;
// Prediction: true
// Actual: true
0 === 1;
// Prediction: false
// Actual: false
4 <= 1;
// Prediction: false
// Actual: false
1 != 1;
// Prediction: false
// Actual: false
"A" > "B";
// Prediction: false
// Actual: false
"B" < "C";
// Prediction: false
// Actual: false
"a" > "A";
// Prediction: false
// Actual: false
"b" < "A";
// Prediction: false
// Actual: false
true === false;
// Prediction: false
// Actual: false
true != true;
// Prediction: false
// Actual: false

// ============== Exercice 2
// let saisie = prompt("Saisissez une liste de nombre séparées par des virgules");
// console.log(eval(saisie.split(",").join("+")));

// ============== Exercice 3
// let saisie2 = prompt("Saissez une phrase contenant Nemo");
// if (saisie2.indexOf("Nemo") >= 1) {
//   console.log(`I found Nemo at ${saisie2.indexOf("Nemo")}`);
// } else {
//   console.log("Je ne trouve pas Nemo");
// }

// ============= Exercice 4

let saisie3 = Number(prompt("Saisissez un numéro"));

if (saisie3 < 2) {
  console.log("boom");
}

if (saisie3 > 2) {
  console.log("b" + "o".repeat(saisie3) + "");
}

if (saisie3 % 2 === 0) {
  console.log("boom!");
}
if (saisie3 % 5 === 0) {
  console.log("BOOM");
}

if (saisie3 % 2 === 0 && saisie3 % 5 === 0) {
  console.log("BOOM!!");
}
