import { cars } from "./carsData.js";

const tempCars = [...cars];
const sortByAscendingAmount = (array) => {
  // Example 8: Ordine decrescatoare: return cars.sort((a, b) => b.amount - a.amount);
  // Modific array-ul initital: return array.sort((a, b) => a.amount - b.amount);
  return [...array].sort((a, b) => a.amount - b.amount);
};

console.table(sortByAscendingAmount(cars));
console.table(cars);

// Revenire la ordinea initiala
cars = [...tempCopy];
console.table(cars);
