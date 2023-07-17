/*
Foreach and arrow function
*/

const calсulateAverage = (...args) => {
  let total = 0;
  args.forEach((element) => {
    total += element;
  });

  return total / args.length;
};

console.log(calсulateAverage(10, 20, 30, 40));
