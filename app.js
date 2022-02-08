"use strict";

let startBtn = document.querySelector('#btn');


//Запуск программы
startBtn.addEventListener('click', function () {
    let totalNum = totalNumOfDigits();

    findAverage(totalNum);
});


//Получение значений от пользователя 
function totalNumOfDigits(num) {
    //Итератор для определения количества запросов для total
    num = +prompt('Введите общее количество чисел.', '');

    let total = [],
        eachNumber;

    //Цикл с вводом чисел пользователем
    for (let i = 0; i < num; i++) {
        eachNumber = +prompt(`Введите ${i + 1}-${declension(i + 1)} число:`);
        total.push(eachNumber);
    }

    return total;
}


//Нахождение среднего арифметического
function findAverage(nums) {
    let sumOfNums = nums.reduce((total, number) => {
        return total += number;
    });
    
    sumOfNums = sumOfNums / nums.length;

    alert(`Среднее арифметическое этих чисел - ${sumOfNums}`);
}



//Определяет какое склонение выбрать
//Работает до 23 чисел. Пока что.
function declension(el) {
    if (el === 3 || el === 23) {
        return 'е';
    }
    return 'ое';
}