/*
Example 4

Let the `getCarsWithDiscount` function return an array of cars whose
onSale property is true.
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

const carsWithDiscount = makeCarsWithDiscount(cars, 0.4);
console.table(carsWithDiscount);
const carsOnSale = carsWithDiscount.filter((car) => car.onSale); // car.onSale === true, !car.onSale -> car.onSale === false

console.table(carsOnSale);
