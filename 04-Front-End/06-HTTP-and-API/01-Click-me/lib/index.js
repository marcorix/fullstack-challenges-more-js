const displayAlertOnButtonClick = () => {
  // TODO: Select the big green button
  const button = document.querySelector('button');
  console.log(button);
  // TODO: Bind the `click` event to the button
  button.addEventListener('click', () => {
    alert('Thank you!');
  });
  // TODO: On click, display `Thank you!` in a JavaScript alert!
};

displayAlertOnButtonClick(); // Do not remove!
