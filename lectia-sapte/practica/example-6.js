/*
## Example 6 - Inline Arrow Functions

Make the code refactoring using arrow functions.
*/
const each = (array, callback) => {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }

  return newArr;
};

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);

console.log(
  eachFunction([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);

// Hoisting
function eachFunction(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }

  return newArr;
}
