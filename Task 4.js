// Определить иерархию электроприборов. 
// Включить некоторые в розетку. Посчитать потребляемую мощность. 

// Таких приборов должно быть, как минимум, два 
// (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определить родительскую функцию с методами, которые 
// включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, 
// желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

//функция-конструктор "Электрические приборы" (родитель)
function ElectricalDevice(){
  this.type = 'electrical' //тип прибора одинаковый для всех (электрический)
};

// вынос функции "Включить-выключить прибор" за пределы функции-конструктора
ElectricalDevice.prototype.turnOnOrOffDevice = function(switchOnOrOf){
  if (switchOnOrOf === "on") {
    console.log('The device is turned on')
  }
  else if (switchOnOrOf === "off"){
    console.log('The device is turned off')
  }
  else {
     console.log('Incorrect command')
  }
};

// вынос функции "Расчет потребляемой энергии" за пределы функции-конструктора
ElectricalDevice.prototype.getPowerConsumption = function(power,consumption){
    let powerConsumption = power * consumption
    console.log(`Power consumption is ${powerConsumption}`)};

// Абстракция (создание дочерней функции-конструктора "Лампа")
function Lamp (name){
  this.name = name
};

Lamp.prototype = new ElectricalDevice();
Lamp.prototype.getLampIntensity = function (illuminationLevel, distance) {
  let lampIntensity = illuminationLevel * Math.pow(distance, 2)
  console.log(`Lamp Intensity is ${lampIntensity}`)
};


// Абстракция (создание дочерней функции-конструктора "Компьютер")
function Computer (manufacturer){
  this.manufacturer = manufacturer
};

Computer.prototype = new ElectricalDevice();
Computer.prototype.getMonitorDiagonal = function (diagonal) {
  let monitorDiagonal = diagonal * 2.54;
  console.log(`Monitor Diagonal is ${monitorDiagonal} centimeters`)
};


const device = new ElectricalDevice();
console.log(device.type)
device.turnOnOrOffDevice('on')
device.getPowerConsumption(200, 1)


const lamp = new Lamp('lamp');
console.log(lamp.type, lamp.name)
lamp.turnOnOrOffDevice('off')
lamp.getPowerConsumption(100, 1)
lamp.getLampIntensity (10, 3)


const computer = new Computer('Apple');
console.log(computer.type, computer.manufacturer)
computer.turnOnOrOffDevice('off')
computer.getPowerConsumption(100, 1)
computer.getMonitorDiagonal(15)
