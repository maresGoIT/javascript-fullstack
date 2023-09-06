// console.log("before try catch");

// const data = '{"name":"John", "age":30, "car":null,}';

// try {
//   console.log(JSON.parse(data));
// } catch (error) {
//   console.error(error);
// }

// console.log("Restul codului meu");
// // try {
// //   const data = '{"name":"John", "age":30, "car":null,}';
// //   console.log(JSON.parse(data));
// // } catch (err) {
// //   console.error(err.message);
// // }

// for (let i = 0; i < 10; i++) {
//   try {
//     console.log("inainte " + i);
//     if (i === 5) throw new Error("i is 5");
//     console.log("dupa " + i);
//   } catch (err) {
//     console.error(err.message);
//   }
// }

//! =========================================
// import { save, load } from "./storage.js";

// const formData = {
//   email: "test@gmail.com",
//   message: "salut",
// };

// save("test", formData);

// const data = load("feedback-form-state").message;

// console.log(data);

//! =========================================

/*
Write a Todo-list where you can create, delete items and save the list in local storage
Styles and markup can be taken from here - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
*/

/*
- without local storage
    1. write the logic of adding a task by pressing the add button
        1.1. read the value from the input field
        1.2. we check for an empty term, if it is empty, we inform the user about it and do not add a task
        1.3. if there is a task, then we create a list item to which we add the text of the task
        1.4. add a cross to the list item
        1.5. clear the input field
    2. write the logic of the task state (completed or not)
        2.1. by clicking on the excess - toddle class check
    3. write the logic for removing a task from the list
        3.1. if we clicked on the cross - we delete the excess from the page

- with local storage
    1. we will store tasks in the form of an array of objects
        1.1. object with fields: text, isDone, ID. The ID is required to search for items, to delete items, and to update the status of items. 
        The identifier must be both in the element and in the object in the repository.
    2. when we add li to the page, we will add it to storage
    3. write the logic of the function that will retrieve data from storage and add them to the page in the form of extras
    4. write the logic for removing the task from the page and for updating the status of the task.
*/

// import { addNewTask, handleTaskBehavior, fillTasksList } from "./functions.js";

import { save, load } from "./storage.js";

const addBtn = document.getElementById("addBtn");
const myUL = document.getElementById("myUL");
const input = document.getElementById("myInput");

const TASKS_KEY = "tasks";
let tasks = {
  list: [],
};

addBtn.addEventListener("click", addNewTask);
myUL.addEventListener("click", handleTaskBehavior);
window.addEventListener("DOMContentLoaded", fillTasksList);

function fillTasksList() {
  const tasksFromLocalStorage = load(TASKS_KEY);

  if (!tasksFromLocalStorage || !tasksFromLocalStorage.list) {
    return;
  }

  tasks.list = [...tasksFromLocalStorage.list];

  console.dir(tasks);

  tasks.list.forEach((element) => {
    createNewTaskItem(element.text);
  });
}

function removeTask(e) {
  if (!e.target || !e.target.dataset.id) {
    return;
  }

  const taskId = e.target.dataset.id;
  const taskIndex = tasks.findIndex((el) => el.id === taskId);

  tasks.splice(taskIndex, 1);
  e.target.parentElement.remove();
}

function addNewTask() {
  const value = input.value;

  if (!value) {
    console.error("Trebuie sa adaugi text pentru task.");

    return;
  }

  createNewTaskItem(value);
  save(TASKS_KEY, tasks);
  input.value = "";
}

function createNewTaskItem(value) {
  try {
    createListItem(value);
    tasks.list.push({
      id: newTaskId,
      date: Date.now(),
      text: value,
      isDone: false,
    });

    myUL.append(newTask);
    console.log(`Adauga task cu valoarea: ${value}`);

    console.dir(tasks);
  } catch (error) {
    console.dir(error);
    console.error("Nu am putut adauga task-ul");
  }
}

function handleTaskBehavior(e) {
  const element = e.target;

  if (element.tagName === "LI") {
    const selectedTaskId = element.dataset.id;
    element.classList.toggle("checked");
    tasks.list.map((task) => {
      if (task.id === selectedTaskId) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
  }
}
