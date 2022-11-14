// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.

// 1.Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// 2.Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
const symbolsOfInput = Number.parseInt(inputEl.dataset.length);

if(inputEl.value.length !== symbolsOfInput) {
        console.log('Кількість символів не відповідає вимогам! Спробуйте ще раз!');
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    } else {
        console.log(`Кількість символів відповідає вимогам!`);
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    }
}
