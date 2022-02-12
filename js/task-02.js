const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
});
const ul = document.querySelector('#ingredients');
ul.append(...ingredientsList);
