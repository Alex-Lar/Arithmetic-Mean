"use strict";

//Инициализация переменных
let startBtn = document.querySelector('#btn');



startBtn.addEventListener('click', function () {
    let totalNum = totalNumOfDigits();



    alert(totalNum);
});


function totalNumOfDigits(num) {
    //Итератор для определения количества запросов для total
    num = parseInt(prompt('Введите общее количество чисел.', ''));

    let total = [],
        eachNumber;

    //Цикл с вводом чисел пользователем
    for (let i = 0; i < num; i++) {
        eachNumber = parseInt(prompt(`Введите ${i + 1}-${declension(i + 1)} число:`));
        total.push(eachNumber);
    }

    return total;
}


//Определяет какое склонение выбрать
//Работает до 23 чисел. Пока что.
function declension(el) {
    if (el === 3 || el === 23) {
        return 'е';
    } 
    return 'ое';
}