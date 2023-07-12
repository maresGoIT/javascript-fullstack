/*## Example 1 - Destructuring

Rewrite the function so that it takes one object of the parameter instead of a set
of independent arguments.
*/

//function calcBMI(weight, height);
//function calcBMI({weight, height});
function calcBMI(bmi) {
  const { weight, height } = bmi;
  const numericWeight = Number(weight.replace(",", "."));
  const numericHeight = Number(height.replace(",", "."));

  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

// It was
// console.log(calcBMI('88,3', '1.75'));

console.log(
  calcBMI({
    weight: "88,3",
    height: "1.75",
  })
);
