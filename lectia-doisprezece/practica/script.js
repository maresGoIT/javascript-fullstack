/*
TOGGLE BUTTON
const button = document.querySelector(".toggle-button");
const icon = document.querySelector(".icon");

button.addEventListener("click", () => {
  icon.classList.toggle("icon--red");
});
*/
const button = document.querySelector("button.toggle-button");
const icon = document.querySelector(".icon");

const handleClick = () => {
  icon.classList.toggle("icon--green");
};

button.addEventListener("click", handleClick);

// setTimeout(() => button.removeEventListener("click", handleClick), 5000);

/*
SUBMIT FORM

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} and password of ${password.value}`
    );

    username.value = "";
    password.value = "";
  }
});
*/
const formEl = document.querySelector("form[name=login]"); //<form name="login" />
const formErrorEl = document.querySelector(".form-errors");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const { elements } = e.currentTarget;
  const username = elements.username.value;
  const password = elements.password.value;

  // if (!username || !password) {
  //   markFormWithError("Username-ul si parola sunt obligatorii.");
  // } else if (username.length > 15) {
  //   markFormWithError("Username-ul nu poate avea mai mult de 15 caractere.");
  // } else if (password.length < 8) {
  //   markFormWithError("Parola nu poate avea mai putin de 8 caractere");
  // } else {
  //   handleSuccess(username, password);
  // }

  if (!username || !password) {
    markFormWithError("Username-ul si parola sunt obligatorii.");

    return;
  }

  if (username.length > 15) {
    markFormWithError("Username-ul nu poate avea mai mult de 15 caractere.");

    return;
  }

  if (password.length < 8) {
    markFormWithError("Parola nu poate avea mai putin de 8 caractere");

    return;
  }

  handleSuccess(username, password);
});

function handleSuccess(username, password) {
  formEl.classList.remove("error");
  console.log(`Valorile primite sunt ${username} si parola: ${password}`);
}

function markFormWithError(mesaj) {
  if (!formEl.classList.contains("error")) {
    formEl.classList.add("error");
  }

  formErrorEl.textContent = mesaj;
}
