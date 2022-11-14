// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль 
// при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(`.change-color`);
const spanEl = document.querySelector(`.color`);
const bodyEl = document.querySelector(`body`);

changeColorBtn.addEventListener(`click`, onChangeColorBtnClick);

function onChangeColorBtnClick() {
  spanEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor =`${spanEl.textContent}`;
}