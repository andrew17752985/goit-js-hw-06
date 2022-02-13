
const dekrBtn = document.querySelector('button[data-action="decrement"]');
const inkrBtn = document.querySelector('button[data-action="increment"]');

const value = document.querySelector('#value');

let counterValue = 0;

inkrBtn.addEventListener('click', () => {
  counterValue += 1;
  value.innerText = counterValue;
});

dekrBtn.addEventListener('click', () => {
  counterValue -= 1;
  value.innerText = counterValue;
});