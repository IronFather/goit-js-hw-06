// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 1.Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// 2.Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
// 3.Размеры самого первого <div> - 30px на 30px.
// 4.Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 5.Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

// 6.Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.

const inputEl = document.querySelector(`input`);
const createBtnEl = document.querySelector(`button[data-create]`);
const destroyBtnEl = document.querySelector(`button[data-destroy]`);
const boxesEl = document.querySelector(`#boxes`);
let edgeOfBox = 30; //3+

function createBoxes(amount) {
  const newBoxes = [];
  for (let i = 1; i <= amount; i += 1) {
    const element = document.createElement("div");
    element.style.width = `${edgeOfBox}px`;
    element.style.height = `${edgeOfBox}px`;
    element.style.backgroundColor = getRandomHexColor(); //5+
    edgeOfBox += 10; //4+
    newBoxes.push(element);
  }
  return newBoxes;
} //1+

createBtnEl.addEventListener("click", () => {
  const amount = inputEl.value;
  if (amount === "") {
    alert("Please, fill amount of boxes");
  } else {
    boxesEl.append(...createBoxes(amount)); //2+
    inputEl.value = "";
  }
});

function destroyBoxes() {
  const boxesForRemove = boxesEl.querySelectorAll("div");
  boxesForRemove.forEach((element) => element.remove());
  edgeOfBox = 30;
} //6+

destroyBtnEl.addEventListener("click", () => {
  destroyBoxes();
}); //6+