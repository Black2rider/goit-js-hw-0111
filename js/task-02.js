const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');//получение элемента

const item = ingredients.map(ingredient => {
  const items = document.createElement('li')
  items.textContent = ingredient
  return items
});

list.append(...item);
