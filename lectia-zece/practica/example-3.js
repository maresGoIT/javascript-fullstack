/*
## Example 3 - User

Write a class `User` which creates an object with properties `login` and `email`.

Declare private properties `#login` and `#email`, which can be accessed via
getter and setter of `login` and `email`.
*/
class User {
  #login;
  #email;

  constructor({ login, email }) {
    this.#login = login;
    this.#email = email;
  }

  get(prop) {
    if (prop === "login") {
      return this.#login;
    }

    if (prop === "email") {
      return this.#email;
    }
  }

  setLogin(newLogin) {
    if (newLogin.length > 30) {
      console.log("Lungimea maxima a numelui este de 30 de caracatere");

      return;
    }

    this.#login = newLogin;
  }
}

const mango = new User({
  login: "Mango",
  email: "mango@gmail.com",
});

console.log(mango.get("login")); // Mango
mango.setLogin("Andrei");
//mango.login = "Andrei";
console.log(mango.get("login"));
console.log(mango.get("email"));
