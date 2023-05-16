const agifyApiUrl = "https://api.agify.io/";

const displayAge = (event) => {
  event.preventDefault();
  const firstName = document.getElementById("first-name").value;
  // TODO: Display your age with an AJAX call instead of the console.log()
  fetch(`${agifyApiUrl}?name=${firstName}`)
    .then(res => res.json())
    .then((data) => {
      document.getElementById("your-age").innerText = `You are ${data.age} years old`;
    });
  console.log(firstName);
};

const form = document.getElementById("fetch-age");
form.addEventListener("submit", displayAge);
