"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function salary(userNumber) {
  const userSalary = Math.round(userNumber * 0.87 * 100) / 100;
  console.log(
    `Размер заработной платы за вычетом налогов равен ${userSalary}.`
  );
}

const userNum = +prompt("Введите размер вашей заработной платы");
if (Number.isNaN(userNum)) {
  alert("Значение задано неверно");
} else {
  salary(userNum);
}