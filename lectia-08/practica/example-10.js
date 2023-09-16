import { cars } from "./carsData.js";

const getTotalAmount = (cars) => {
  return cars.reduce((total, car) => {
    return total + car.amount;
  }, 0);
};

console.log(getTotalAmount(cars));
