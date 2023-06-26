/* Example 4 - Math class */
/* Write a script that prints to the console rounded up/down, etc. values of variable value.
Use the methods Math.floor(), Math.ceil() and Math.round().
Check what happens in the console for the values "27.3" and "27.9".*/
const value = 27.5;
console.log(`Floor ${Math.floor(value)}`);
console.log(`Ceil ${Math.ceil(value)}`);
console.log(`Round ${Math.round(value)}`);

console.log("---");
const valueLower = 27.2;
console.log(`Floor ${Math.floor(valueLower)}`);
console.log(`Ceil ${Math.ceil(valueLower)}`);
console.log(`Round ${Math.round(valueLower)}`);

console.log("---");
const valueUpper = 27.9;
console.log(`Floor ${Math.floor(valueUpper)}`);
console.log(`Ceil ${Math.ceil(valueUpper)}`);
console.log(`Round ${Math.round(valueUpper)}`);
