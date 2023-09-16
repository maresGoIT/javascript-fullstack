/* Example 5 - Template lines */

/* Compose a phrase using the template strings A has B bots in stock, where A, B - variables inserted into a line. */
const companyName = "Guvernul Romaniei";
const repairBots = 150;
const defenceBots = 50;
const total = repairBots + defenceBots;

const message = `${companyName} has ${total} bots in stock`;
console.log(message);
// Print "Cyberdyne Systems has 200 bots in stock"
