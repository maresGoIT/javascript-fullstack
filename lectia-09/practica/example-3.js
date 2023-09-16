/*
## Example 3 -Calculator

Create a `calculator` object with three methods:

- `read(a, b)`- takes two values and stores them as object properties.
- `add()` - returns the sum of the stored values.
- `mult()` - multiplies the stored values and returns the result.
*/
const calculator = {
  primulNumar: 0,
  alDoileaNumar: 0,
  read: function (a, b) {
    this.primulNumar = a;
    this.alDoileaNumar = b;
  },
  log() {
    console.log(
      `Valorile pentru a si b sunt ${this.primulNumar} si ${this.alDoileaNumar}`
    );
  },
  add() {
    return this.primulNumar + this.alDoileaNumar;
  },
  mult() {
    return this.primulNumar * this.alDoileaNumar;
  },
};

calculator.read(5, 3);
calculator.log();
console.log(calculator.add());
console.log(calculator.mult());
