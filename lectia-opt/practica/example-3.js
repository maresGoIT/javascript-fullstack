/*
## Example 3 - Filter method

Let the `filterByPrice` function return an array of cars whose price is less
than the value of the `threshold` parameter.
*/

import { cars } from "./carsData.js";

const filterByPrice = (cars, threshold) => {
  return cars.filter((car) => car.price < threshold);
};

console.table(cars);
const carsUnder25k = filterByPrice(cars, 25000);

console.table(carsUnder25k);
console.log(`Sunt ${carsUnder25k.length} masini sub 25.000 EUR`);
// console.table(filterByPrice(cars, 25000));
