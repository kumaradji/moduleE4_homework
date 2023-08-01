/*
Задание 2
Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.
 */

function hasProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}

//Использование
let user = {
  name: "John",
  age: 30
};

console.log(hasProperty(user, "name")); // true
console.log(hasProperty(user, "email")); // false