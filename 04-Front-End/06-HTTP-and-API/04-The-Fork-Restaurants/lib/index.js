// Todo: Use the Fork Api to get a filtered list of restaurants, depending on the category selected (and as a bonus, the location)

const searchForm = document.getElementById("searchForm");
const ul = document.querySelector(".list-group");
const locationInput = document.getElementById("location");
const apiUrl = "https://the-fork-api.students.lewagon.co/api/v1/restaurants";

// Todo: select the HTML elements you need
const radioButtons = document.querySelectorAll(".form-check-input");

const insertData = (results) => {
  ul.innerHTML = "";

  if (results.length > 0) {
    results.forEach((restaurant) => {
      // <li class="list-group-item">What would you like to eat?</li>;
      ul.insertAdjacentHTML('beforeend', `<li class="list-group-item">${restaurant.name} in ${restaurant.address}</li>`);
    });
  } else {
    ul.innerHTML = '<p class="text-muted text-center">No restaurants found! Please select another category or location.</p>';
  }
};

const buildSearchUrl = () => {
  const category = Array.from(radioButtons).find(element => element.checked).value;
  const location = locationInput.value;
  return `${apiUrl}?category=${category}&location=${location}`;
};

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Todo: Find the category selected and build the URL you will send your request to

  // Todo: Replace "the-endpoint-url" with the URL you built
  const searchUrl = buildSearchUrl();

  fetch(searchUrl)
    .then(response => response.json())
    .then((data) => {
      // Todo: Insert results into the list
      insertData(data);
    });
});
