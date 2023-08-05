const listElement = document.getElementById("list");

if (!listElement) {
  console.log("Elementul nu a fost gasit");
} else {
  console.log(listElement.children.length);
}

/*
# Task 1

const technologies = ["Javascript", "Python", "CSS", "HTML"];

1. Get container element
2. Create a cycle for sorting array elements
3. Create a li tag
4. Write the text from the array inside the list items
5. Place li inside ul
6. Place ul tag with items on the page
*/

/*
# Task 2

Starting from this colors array, create buttons dynamically;

1. Iterate trough the array;
2. Create a button and set color for the button; (style.backgroundColor, classList.add(""))
3. Set the text of the button
4. Add the button to the UI

const colors = [
  {
    label: "red",
    color: "#ff0000",
  },
  {
    label: "green",
    color: "#00ff00",
  },
  {
    label: "yellow",
    color: "#fff00f",
  },
];
*/
