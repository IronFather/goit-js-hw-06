// Number of categories

const categoriesEl = document.querySelector("#categories");
const liItemsEl = document.querySelectorAll("li.item");

    console.log(`Number of categories: ${categoriesEl.children.length}`);

// Category and her elements

liItemsEl.forEach((liItem) => {
  const h2El = liItem.querySelector("h2");
  const ulEl = liItem.querySelector("ul");

    // console.log(" ");
    console.log(`Category: ${h2El.textContent}`);
    console.log(`Elements: ${ulEl.children.length}`);
});