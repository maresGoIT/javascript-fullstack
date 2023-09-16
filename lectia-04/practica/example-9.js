/*
## Example 9 -Collection of courses (includes, indexOf, push, etc.)

Write functions to work with the `courses` collection of training courses:

- `addCourse(name)` - adds a course to the end of the collection
- `removeCourse(name)` - removes a course from the collection
- `updateCourse(oldName, newName)` - changes the name to a new one

```js

addCourse("Express");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse("CSS"); // ' You already have this course'

removeCourse("React");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse("Vue"); // 'Course with this name was not found'

updateCourse("Express", "NestJS");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
```
*/

function addCourse(courseName) {
  if (courses.indexOf(courseName) > -1) {
    console.log("Deja exista acest curs");

    return;
  }

  courses.push(courseName);
}

function removeCourse(courseName) {
  const courseIndex = courses.indexOf(courseName);

  if (courseIndex === -1) {
    console.log("Cursul nu exista");

    return;
  }

  courses.splice(courseIndex, 1);
}

function replaceCourse(oldCourse, newCourse) {
  const courseIndex = courses.indexOf(oldCourse);

  if (courseIndex === -1) {
    console.log("Cursul nu exista");

    return;
  }

  courses.splice(courseIndex, 1, newCourse);
}

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

console.log(courses);

addCourse("HTML");
removeCourse("JavaScript");
replaceCourse("HTML", "NodeJS");

console.log(courses);
