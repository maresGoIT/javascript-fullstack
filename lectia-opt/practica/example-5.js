import { cars } from "./carsData.js";

/*
## Example 5 - Filter method

Let the `getCarsWithType` function return an array of cars whose type
coincide with the value of the `type` parameter.
*/
function getCarsWithType(array, type) {
  return array.filter((item) => item.type === type);
}

console.log(cars);
console.log(getCarsWithType(cars, "suv"));
