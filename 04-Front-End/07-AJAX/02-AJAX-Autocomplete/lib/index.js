// TODO: Autocomplete the input with AJAX calls.
const ul = document.getElementById('results');
const input = document.getElementById("search");

const updateUl = (words) => {
  ul.innerHTML = "";
  words.forEach((word) => {
    ul.insertAdjacentHTML('beforeend', `<li>${word}</li>`);
  });
};

input.addEventListener('keyup', () => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${input.value}`)
    .then(res => res.json())
    .then(data => updateUl(data.words));
});
