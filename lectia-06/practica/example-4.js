/*
## Example 4 - Destructuring

Rewrite the function so that it accepts a parameters object with properties
`companyName` and `stock` and display a report about the number of goods in the warehouse
of any companies.
*/

function getStockReport(arg) {
  const { companyName: numeNouCompany, stock } = arg;

  /* Echivalent cu:
  const numeNouCompany = arg.companyName;
  const stock = arg.stock;
  */

  let total = 0;
  const values = Object.values(stock);

  for (let i = 0; i < values.length; i++) {
    total = total + values[i];
  }

  return `${numeNouCompany} has ${total} items in stock`;
}

const obiectTrimisFunctiei = {
  companyName: "Cyberdyne Systems",
  stock: {
    repairBots: 200,
    defenceBots: 30,
    attackBots: 20,
    yellowBots: 10,
  },
};

console.log(getStockReport(obiectTrimisFunctiei)); // "Cyberdyne Systems has 200 items in stock"
