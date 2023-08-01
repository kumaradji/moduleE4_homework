// Родительская функция-конструктор
function Appliance(name) {
  // Сохраняем имя прибора в свойстве экземпляра
  this.name = name;
  
  // По умолчанию прибор выключен из розетки
  this.pluggedIn = false; 
}

// Добавляем методы в прототип родительского конструктора
Appliance.prototype.plugIn = function() {
  // Выводим сообщение о том, что прибор включен
  console.log(`${this.name} включен в розетку`);
  
  // Меняем состояние на "включен в розетку"
  this.pluggedIn = true;
}

Appliance.prototype.unplug = function() {
  // Выводим сообщение о том, что прибор выключен
  console.log(`${this.name} выключен из розетки`);
   
  // Меняем состояние на "выключен из розетки"
  this.pluggedIn = false;
}

// Конкретный прибор TV
function TV(name) {
  // Вызываем конструктор родителя
  Appliance.call(this, name);
  
  // Добавляем свойство только для TV
  this.channel = 1; 
}

// Создаем связь между прототипами
TV.prototype = Object.create(Appliance.prototype);

// Добавляем метод только для TV
TV.prototype.changeChannel = function(channel) {
  this.channel = channel;
  console.log(`Переключено на канал ${this.channel}`);
}


// Еще один конкретный прибор Radio
function Radio(name) {
  Appliance.call(this, name);
  
  // Свойство только для Radio
  this.station = 87.5;
}

// Связь между прототипами
Radio.prototype = Object.create(Appliance.prototype);

// Метод только для Radio
Radio.prototype.changeStation = function(station) {
  this.station = station;
  console.log(`Настроено на частоту ${this.station}MHz`); 
}

// Создаем экземпляры
const tv = new TV('Samsung');
const radio = new Radio('Panasonic');

// Используем методы экземпляров
tv.plugIn(); 
tv.changeChannel(5);

radio.plugIn();
radio.changeStation(105.2);