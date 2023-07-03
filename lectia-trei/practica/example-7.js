/*
## Example 7 - Sorting an array with a loop

Write a script to sort an array of strings alphabetically by the first letter
of an element.
*/

const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

console.log(langs.sort());

console.log(langs);

for (let i = 0; i < langs.length; i++) {
  for (let j = 0; j < langs.length - i - 1; j++) {
    if (langs[j + 1] < langs[j]) {
      [langs[j + 1], langs[j]] = [langs[j], langs[j + 1]];
    }
  }
}

console.log(langs);
