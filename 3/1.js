"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/
const userNumber = Number(prompt("Введите число, которое надо возвести в куб"));

function cubeNumber(userNumber) {
  return userNumber ** 3;
}

console.log(cubeNumber(userNumber));
