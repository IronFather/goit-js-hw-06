// Задание 1
// В HTML есть список категорий ul#categories.
// Напиши скрипт который:
// 1.Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2.Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

// Number of categories

const categoriesEl = document.querySelector("#categories");
const liItemsEl = document.querySelectorAll("li.item");

    console.log(`Number of categories: ${categoriesEl.children.length}`); //1+

// Category and its elements

liItemsEl.forEach((liItem) => {
  const h2El = liItem.querySelector("h2");
  const ulEl = liItem.querySelector("ul");

    // console.log(" ");
    console.log(`Category: ${h2El.textContent}`); //2+
    console.log(`Elements: ${ulEl.children.length}`); //2+
});