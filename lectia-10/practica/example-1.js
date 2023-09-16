/*
# Module 5 - Lesson 10 - Prototypes and classes

## Example 1 - Blogger

Write a `Blogger` class to create a blogger object with the following properties:

- `email` - mail, line
- `age` - age, number
- `numberOfPosts` - number of posts, number
- `topics` - an array of topics the blogger specializes in

The class expects one parameter - object of settings with the same name properties.

Add a `getInfo()` method that returns string:
`User ${mail} is ${age} years old and has ${number of posts} posts`.

Add the `updatePostCount(value)` method, which in the `value` parameter takes
number of posts to add to the user.
*/

class Blogger {
  constructor({ name, email, age, numberOfPosts, topics }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const test = new Blogger({
  name: "Mango",
  email: "mango@mail.com",
  age: 24,
  numberOfPosts: 20,
  topics: ["tech", "cooking", "javascript"],
});

console.log(test.getInfo());
test.updatePostCount(6);
console.log(test.getInfo());

const andrei = new Blogger({
  name: "Andrei",
  email: "andrei@mail.com",
  age: 19,
  numberOfPosts: 17,
  topics: ["sports", "gaming", "health"],
});

console.log(andrei.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
andrei.updatePostCount(4);
console.log(andrei.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
