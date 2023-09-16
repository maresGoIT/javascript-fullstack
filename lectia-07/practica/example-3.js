/*
Exemplul 3.

Write a function `each(array, callback)` that takes as its first parameter
array, and the second - a function that will be applied to each element of the array.
The each function must return a new array whose elements will be the results
of callback call.
*/

// array -> names
// callback -> uppercaseWord
function each(lista, callback) {
  const newArray = [];

  lista.forEach((element) => {
    // newArray.push(uppercaseWord(element)) -> Ion -> ION
    newArray.push(callback(element));
  });

  return newArray;
}

const names = ["Ion", "Vasile", "Alex", "Andrei"];

function uppercaseWord(word) {
  return word.toUpperCase();
}

console.log(each(names, uppercaseWord));
