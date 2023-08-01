/*
Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.
 */

function createObjectWithoutPrototype() {
  return Object.create(null);
}

//Использование
let obj = createObjectWithoutPrototype();

console.log(obj); // {}
console.log(Object.getPrototypeOf(obj)); // null