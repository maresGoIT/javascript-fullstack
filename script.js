console.log("incepe aici");
const test = {
  a: 12,
};

test.b = 16;
console.log("opreste aici");

test.b = 17;

for (let i = 0; i < test.b; i++) {
  console.log(i);
}
