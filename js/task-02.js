const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createListOfLi(arr) {
  const listOfLi = [];

  arr.forEach(item => {
    const newLi = document.createElement("li");
    newLi.textContent = item;
    newLi.classList.add("item");
    listOfLi.push(newLi);
  });
  return listOfLi;
}

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...createListOfLi(ingredients));
