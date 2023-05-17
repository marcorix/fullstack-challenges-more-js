const batch = 752; // change to your own batch id
const baseUrl = "https://wagon-chat.herokuapp.com/";
const url = `${baseUrl}${batch}/messages`;
// Your turn to code!
const form = document.getElementById("comment-form");
const yourMessage = document.getElementById("your-message");
const yourName = document.getElementById("your-name");
const ul = document.querySelector(".list-unstyled");
const refresh = document.getElementById("refresh");

const refreshChat = () => {
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      ul.innerHTML = "";
      data.messages.forEach((message) => {
        const li = `<li>${message.content} (posted by ${message.author})</li>`;
        ul.insertAdjacentHTML('afterbegin', li);
      });
    });
};


const postMessage = () => {
  const requestDetails = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ author: yourName.value, content: yourMessage.value }),
  };

  fetch(url, requestDetails)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      refreshChat();
    });
};


form.addEventListener('submit', (e) => {
  e.preventDefault();
  postMessage();
});

refresh.addEventListener('click', refreshChat);

setInterval(refreshChat(), 5000);
