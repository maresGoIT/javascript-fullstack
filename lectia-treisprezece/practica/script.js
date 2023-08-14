// EXERCISE 1

// const sectionEl = document.querySelector(".section-exercise");
// const divEl = document.querySelector(".section-exercise div");
// const paragraphEl = document.querySelector(".section-exercise p");

// document.addEventListener("click", () => {
//   console.log("Click pe document");
// });

// sectionEl.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("Ai apasat pe sectiune.");
// });

// divEl.addEventListener("click", () => {
//   console.log("Ai apasat pe div.");
// });

// paragraphEl.addEventListener("click", () => {
//   console.log("Ai apasat pe paragraf.");
// });

// EXERCISE 2
const data = {
  quantity: 0,
  price: 0,
  calcTotalPrice() {
    return (this.quantity * this.price).toFixed(2);
  },
};

const formEl = document.querySelector("#form");
const priceEl = document.querySelector("#price");
const quantityEl = document.querySelector("#quantity");
const amountDisplayEl = document.querySelector("#amount");
const totalDisplayEl = document.querySelector("#total");

// Query Selector functioneaza exact ca si selectorii in CSS
// const labelEl = document.querySelector(".form label:last-of-type");
// console.log(labelEl);

formEl.addEventListener("change", (e) => {
  if (e.target === priceEl) {
    console.log(
      "Pret modificat " +
        priceEl.value +
        " pentru produsul si cantitatea " +
        quantityEl.value
    );

    console.log(
      `Pret modificat ${priceEl.value} pentru produsul si cantitatea ${quantityEl.value}`
    );

    data.price = priceEl.value;
  }

  if (e.target === quantityEl) {
    console.log("Cantitate modificata");
    data.quantity = quantityEl.value;
  }

  amountDisplayEl.textContent = quantityEl.value;
  totalDisplayEl.textContent = data.calcTotalPrice();
});
