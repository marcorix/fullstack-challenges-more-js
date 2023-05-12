const button = document.querySelector('#clickme');
button.addEventListener('click', (e) => {
  button.disabled = true;
  button.innerText = "Bingo!";
  const audio = new Audio("sound.mp3");
  audio.play();
});
