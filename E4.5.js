//Задание 4.5.4 (HW-03)

// Класс Appliance - базовый класс для электроприборов
class Appliance {
  // Конструктор принимает имя прибора
  constructor(name) {
    this.name = name;
    // Метод pluggedIn проверяет, включен ли прибор
    this.pluggedIn  = function (pluggedIn) {
      if (pluggedIn === true) {
        console.log('${this.name} is switched on')
      } else {
        console.log('${this.name} is switched off')
      }
    }
  }
}

class TVset extends Appliance {
  // Конструктор вызывает конструктор базового класса
  // и добавляет свойство channel
  constructor(name, pluggedIn, channel) {
    super(name, pluggedIn);
    this.channel = channel;
  }
}

class Radio extends Appliance {
  // Конструктор вызывает конструктор базового класса
  // и добавляет свойство station
  constructor(name, pluggedIn, station) {
    super(name, pluggedIn);
    this.station = station;
  }
}

const tv = new TVset('Samsung', true, 2);
const radio = new Radio('Panasonic', true, 87.4);

console.log(tv.pluggedIn());
console.log(tv);
console.log(radio.switchedon());
console.log(radio)