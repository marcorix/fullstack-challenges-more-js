const showNewPrice = () => {
  // TODO: Add a price data attribute to the .card element in your HTML
  // TODO: Select the data attribute to get the new price
  // TODO: Replace the current price of 15€ with the new one!
  const burger = document.querySelector(".card");
  const newPrice = burger.dataset.price;
  burger.querySelector(".card-text").innerText = `${newPrice}$`;
};

showNewPrice(); // Do not remove!
