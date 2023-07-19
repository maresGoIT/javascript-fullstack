/*
## Example 1 - Map method

Let the `getModels` function return an array of models (model field) of all
cars.
*/
import { cars } from "./carsData.js";

function getModels(carList) {
  // Safeguard Clause
  if (!carList && carList.length === 0) {
    return console.error("There is no car in the list.");
  }

  return carList.map((item) => item.model);
}

console.log(getModels(cars));
