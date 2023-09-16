/*

## Example 7 - forEach method

Make the code refactoring using `forEach` method and arrow functions.
*/

function logItems(items) {
  console.log(items);
  /* for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }*/

  /*
  items.forEach((fruit, index) => {
    console.log(`${index} - ${fruit}`);
  });
  */

  const printFruits = (fruit, index) => {
    console.log(`${index} - ${fruit}`);
  };

  items.forEach(printFruits);
}

//logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
