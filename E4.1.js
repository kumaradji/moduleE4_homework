/*
Задание 1
Написать, функцию, которая принимает в качестве аргумента объект и
выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.

 */

function printOwnProps(obj) {

  //Используем цикл for..in чтобы перебрать все ключи объекта
  for (let key in obj) {
    //Проверяем, что ключ является собственным свойством объекта с помощью hasOwnProperty
    if (obj.hasOwnProperty(key)) {
      //Если да - выводим в консоль ключ и значение по этому ключу
      console.log(key);
      console.log(obj[key]);
    }
  }

}

//Использование
let user = {
  name: "John",
  age: 30
};

printOwnProps(user);

// Выведет:
// name
// John
// age
// 30