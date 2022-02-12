function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const span = document.querySelector(".color");
const body = document.body;
const button = document.querySelector('.change-color');
button.addEventListener("click", myFunction);

function myFunction() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.innerHTML = color;
}

