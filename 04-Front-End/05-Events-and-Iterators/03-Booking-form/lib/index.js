// TODO: write your code here!
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const submit = document.getElementById('submit');
const counter = document.getElementById('counter');
const priceInput = document.getElementById('price-input');
const unitPriceCents = document.getElementById("price").dataset.amountCents;

const decrementCounter = () => {
  const count = Number.parseInt(counter.innerText, 10);
  if (count >= 1) {
    counter.innerText = count - 1;
  }
};
const incrementCounter = () => {
  const count = Number.parseInt(counter.innerText, 10);
  counter.innerText = count + 1;
};

const updateForm = () => {
  priceInput.value = Number.parseInt(counter.innerText, 10)  * unitPriceCents;
  console.log(priceInput.value);
};


minusButton.addEventListener('click', (e) => {
  decrementCounter();
  updateForm();
});

plusButton.addEventListener('click', (e) => {
  incrementCounter();
  updateForm();
});
