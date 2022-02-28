/// !!! FUNCTION !!! ///
//1.Создайте функцию которая выводит в консоль “Hello World!”

// ! answer
// function hello(str) {
//   console.log(str);
// }
// hello("Hello World!");

//2.Создайте функцию которая возвращает сумму из двух чисел.

// ! answer
// function summary(a, b) {
//   return a + b;
// }
// console.log(summary(4, 6));

/// !!! RECURSION !!! ///
//3.Дано число 5, выведите все числа от 5 до 1 используя рекурсию.

// ! answer
// function checkTask(number) {
//   console.log(number);
//   if (number > 1) {
//     checkTask(number - 1);
//   }
// }
// checkTask(5);

//4.let arr = [“hello”, 25, true, {}]
//Напишите функцию, которая перебирает массив arr через рекурсию и выводит каждый элемент в консоли.
// ! answer
// let arr = ["hello", 25, true, {}];
// function show(arr, n = 0) {
//   if (n === arr.length) return;
//   console.log(arr[n]);
//   show(arr, n + 1);
// }

// show(arr);

/// !!! ARROW FUNCTION !!! ///
//5.Создайте стрелочную функцию с одним аргументом, если в этом аргументе храниться строка “Kubat” выведите  alert Hello Kubat, иначе выведите alert “Error”

// ! answer
// const checkTask = (word) => {
//   if (word === "Kubat") {
//     alert(`Hello ${word}!`);
//   } else {
//     alert("Error!");
//   }
// };
// checkTask("Kubat");

//6.В функцию передаются переменные first и second. Проверьте, что first делится без
//остатка на second. Если это так - возвращаете true, иначе возвращаете false.

// ! answer
// function checkTask(first, second) {
//   if (first % second === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// checkTask(5, 2);

/// !!! RegExp !!! ///
//7.Cоздайте валидатор для тел номера, дополнительно вытащите код страны. Пример для телефона: +996700405060

// ! answer
// let pattern = /^[+996]+[0-9]{9}/g;
// let number = +996700405060;
// console.log(pattern.test(number));

//8. Создайте функцию которая принимает строку (email адрес) и возвращает булево.
//Функция должна проверить правильно ли написан email. (Такие функции называются валидаторами)

// ! answer
// let pattern = /[A-Z0-9.%+-]+@[A-Z0-9]+.+[A-Z]{2,4}/gi;
// let mail = "chygnyz@mail.ru";
// console.log(pattern.test(mail));
