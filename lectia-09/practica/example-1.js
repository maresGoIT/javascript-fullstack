/*
# Module 5 - Lesson 9 - Function call context and this

## Example 1 - Jewelry workshop

Write a `calcTotalPrice(stoneName)` method that takes the name of a stone,
calculates and returns the total cost of stones with that name, price, and
quantity from the `stones` property.
*/
const store = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const stone = this.stones.find((el) => el.name === stoneName);

    if (!stone) {
      console.log(`Nu avem piatra cu numele ${stoneName} pe stoc`);
      return;
    }

    return stone.price * stone.quantity;
  },
};

//console.log(store.calcTotalPrice("Emerald")); // 5200
console.log(store.calcTotalPrice("Diamond")); // 8100
// console.log(store.calcTotalPrice("Sapphire")); // 9800
// console.log(store.calcTotalPrice("Ruby")); // 1600
