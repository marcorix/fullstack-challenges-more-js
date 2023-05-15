const sports = document.querySelectorAll('.clickable');


// sports.forEach((element) => {
//   element.addEventListener('click', () => {
//     element.classList.toggle('active');
//   });
// });

const toggleClass = (e) => {
  e.currentTarget.classList.toggle('active');
};

const bindElements = (element) => {
  element.addEventListener('click', toggleClass);
};

sports.forEach(bindElements);
