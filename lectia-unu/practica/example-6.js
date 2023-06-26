/* Example 6 - String methods and chaining */
/* Write a script that calculates a person's body mass index.
For this you need to divide the weight in kilograms by the square of the person's height in meters.*/

let weight = "88,3";
let height = "1.75";

const weightAsNumber = Number.parseFloat(weight.replace(",", "."));
const heightAsNumber = Number.parseFloat(height);

// weight / height ^ 2
const bmi = weightAsNumber / Math.pow(heightAsNumber, 2);
const mesaj = `BMI pentru cineva cu inaltime ${heightAsNumber}, si greutate ${weightAsNumber} este ${bmi}`;

const element = document.getElementById("test");
element.innerText = mesaj;
