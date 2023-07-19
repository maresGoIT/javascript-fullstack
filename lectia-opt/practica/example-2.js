/*
## Example 2 - Map method

Let the `makeCarsWithDiscount` function return a new array of objects with a changed
value of the `price` property depending on the discount passed.
*/
import { cars } from "./carsData.js";

const makeCarsWithDiscount = (cars, discount) => {
  return cars.map((car) => {
    const priceWithDiscount = car.price - car.price * discount;

    return {
      ...car,
      price: priceWithDiscount,
    };
  });
};

console.table(cars);
//console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));
