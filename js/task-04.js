// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// 1.Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// 2.Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// 3.Обновляй интерфейс новым значением переменной counterValue.


const counterValue = {
    value: 0,
    decrement(value) {
        this.value -= 1;
        },
    increment(value) {
        this.value += 1;
        },
}; //1+

const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);
const valueEl = document.querySelector(`#value`);

decrementBtn.addEventListener("click", onDecrementBtnClick); //2+
incrementBtn.addEventListener("click", onIncrementBtnClick); //2+

function onDecrementBtnClick() {
    counterValue.decrement();
    valueEl.textContent = counterValue.value; //3+
    console.log(`мінус один`);
};

function onIncrementBtnClick() {
    counterValue.increment();
    valueEl.textContent = counterValue.value; //3+
    console.log(`плюс один`);
};