// 1.Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// 2.Если инпут пустой, в спане должна отображаться строка "Anonymous".

const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    nameOutputEl.textContent = event.currentTarget.value; //1+
    if(nameInputEl.value === "") {
        nameOutputEl.textContent = "Anonymous";   
    } //2+
}

