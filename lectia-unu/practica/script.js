/* Example 1 - Mathematical operators */
/* Display the total number of apples and grapes on the screen. The difference between apples and grapes. */
const apples = 47;
const grapes = 135;

/* Example 2 - Combined operators */
let students = 100;
students = students + 50;

/* Example 3 - Operators Priority */
/* Disassemble operators priority in the variable value assignment instruction result. */
const result = 108 + 223 - 2 * 5;

/* Example 4 - Math class */
/* Write a script that prints to the console rounded up/down, etc. values of variable value.
Use the methods Math.floor(), Math.ceil() and Math.round().
Check what happens in the console for the values "27.3" and "27.9".*/
const value = 27.5;

/* Example 5 - Template lines */
/* Compose a phrase using the template strings A has B bots in stock, where A, B - variables inserted into a line. */
const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const message = ``;
// Print "Cyberdyne Systems has 200 bots in stock"

/* Example 6 - String methods and chaining */
/* Write a script that calculates a person's body mass index. 
For this you need to divide the weight in kilograms by the square of the person's height in meters.*/
let weight = "88,3";
let height = "1.75";

const bmi = "";
// console.log(bmi); // 28.8
// Use toFixed(1)

/* Example 7 - Comparison operators and type casting */
/*
console.log(5 > 4);

console.log(10 >= '7');

console.log('2' > '12');

console.log('2' < '12');

console.log('4' == 4);

console.log('6' === 6);

console.log('false' === false);

console.log(1 == true);

console.log(1 === true);

console.log('0' == false);

console.log('0' === false);

console.log('Papaya' < 'papaya');

console.log('Papaya' === 'papaya');

console.log(undefined == null);

console.log(undefined === null);
*/

/* Example 8 - Logical operators */
/*
console.log(true && 3);

console.log(false && 3);

console.log(true && 4 && 'kiwi');

console.log(true && 0 && 'kiwi');

console.log(true || 3);

console.log(true || 3 || 4);

console.log(true || false || 7);

console.log(null || 2 || undefined);

console.log((1 && null && 2) > 0);

console.log(null || (2 && 3) || 4);
*/

/* Example 9 - Default value and null merge operator */
const myText = ""; // An empty string (which is also a falsy value)

const notFalsyText = myText || "Hello world";
// Hello world

const preservingFalsy = myText ?? "Hi neighborhood";
// '' (as myText is neither undefined nor null)

/* Example 10 - The % Operator and String Methods */
/* Write a script that will convert the value of totalMinutes (number of minutes) to 
string in hour and minute format HH:MM.

70 will show 01:10
450 will show 07:30
1441 will show 24:01*/
/* const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`); */
