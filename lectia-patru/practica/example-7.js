/*## Example 7 - Average value

Write a `calAverage()` function that takes an arbitrary number of arguments
and returns their average. All arguments will be only numbers.
*/
function calAverage() {
  let suma = 0;

  for (let i = 0; i < arguments.length; i++) {
    suma = suma + arguments[i];
  }

  const average = suma / arguments.length;

  return average;
}

//console.log(calAverage(2, 5, 8, 9));
//console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
