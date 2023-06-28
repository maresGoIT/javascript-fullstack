/*
let counter = 0;

while (counter < 10) {
  console.log(`numaratorul: ${counter}`);
  counter += 1;
}
*/

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    continue;
  }

  console.log(`counter: ${i}`);
}
