// В HTML есть пустой список ul#ingredients.
// В JavaScript есть массив строк.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:
// 1.Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2.Добавит название ингредиента как его текстовое содержимое.
// 3.Добавит элементу класс item.
// 4.После чего вставит все <li> за одну операцию в список ul#ingredients.

function createListOfLi(arr) {
  const listOfLi = [];

  arr.forEach(item => {
    const newLi = document.createElement("li"); //1+
    newLi.textContent = item; //2+
    newLi.classList.add("item"); //3+
    listOfLi.push(newLi);
  });
  return listOfLi;
}

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...createListOfLi(ingredients)); //4+
