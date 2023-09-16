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

const technologies = ["Javascript", "Python", "CSS", "HTML"];
const containerEl = document.querySelector("#container");
const listEl = document.createElement("ul"); // -> <ul></ul>

/*
const firstElFromList = document.createElement("li");
firstElFromList.innerText = technologies[0];
listEl.append(firstElFromList);

for (let i = 1; i < technologies.length; i++) {
  const li = document.createElement("li"); // -> <li></li>
  li.innerText = technologies[i]; // <li>Python</li>
  firstElFromList.after(li);
}


const newList = document.createElement("ul");
const newListItem = document.createElement("li");
newListItem.textContent = "Test";

newList.append(newListItem);
listEl.after(newList);
*/
containerEl.append(listEl);

technologies.forEach((technology) => {
  const li = document.createElement("li"); // -> <li></li>

  li.innerText = technology; // <li>Python</li>
  listEl.prepend(li); //<ul><li>Javascript</li><li>Python</li></ul>
});

/*
technologies.forEach((technology) => {
  const li = document.createElement("li"); // -> <li></li>

  li.innerText = technology; // <li>Python</li>
  listEl.append(li); //<ul><li>Javascript</li><li>Python</li></ul>
});
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
/*
const colors = [
  {
    label: "Primary Button",
    value: "#ff0000",
    isPrimary: true,
  },
  {
    label: "Click Me",
    value: "#00ff00",
    isPrimary: false,
  },
  {
    label: "Yellow",
    value: "#fff00f",
    isPrimary: false,
  },
];

const containerEl = document.querySelector("#container");

colors.forEach((color) => {
  const buttonEl = document.createElement("button"); // -> <button></button>
  containerEl.append(buttonEl);

  buttonEl.textContent = color.label;

  if (color.isPrimary) {
    buttonEl.innerHTML = `<span onclick="alert(123)"><a href="https://google.com">${color.label}</a></span>`;
    buttonEl.classList.add("primary-button");
  } else {
    buttonEl.style.backgroundColor = color.value;
  }
});
*/
