import { cars } from "./carsData.js";

const getCarByModel = (cars, model) => {
  return cars.find((car) => {
    return car.model === model;
  });
};

console.log(getCarByModel(cars, "Mazda 6"));
console.log(getCarByModel(cars, "CX-9"));
