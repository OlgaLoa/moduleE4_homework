// Переписать консольное приложение из предыдущего юнита на классы.

//Класс-родитель "Электрические приборы" (родитель)
class ElectricalDevice {
  constructor() {
  this.type = 'electrical' //тип прибора одинаковый для всех (электрический)
  }

// функция класса-родителя "Включить-выключить прибор" 
  turnOnOrOffDevice (switchOnOrOf) {
    if (switchOnOrOf === "on") {
      console.log('The device is turned on')
      }
    else if (switchOnOrOf === "off") {
      console.log('The device is turned off')
      }
    else {
       console.log('Incorrect command')
      }
    }

//функция класса-родителя "Расчет потребляемой энергии" 
  getPowerConsumption (power,consumption) {
    let powerConsumption = power * consumption
    console.log(`Power consumption is ${powerConsumption}`)
  }
};


//Дочерний класс "Лампа"
class Lamp extends ElectricalDevice { constructor(name,type) {
    super(type);
    this.name = name;
    }

//функция дочернего класса "Лампа"
    getLampIntensity (illuminationLevel, distance) {
        let lampIntensity = illuminationLevel * Math.pow(distance, 2)
        console.log(`Lamp Intensity is ${lampIntensity}`)
    };
};

  

//Дочерний класс "Компьютер"
class Computer extends ElectricalDevice { constructor(manufacturer,type) {
    super(type);
    this.manufacturer = manufacturer;
    };
//функция дочернего класса "Компьютер"
    getMonitorDiagonal (diagonal) {
       let monitorDiagonal = diagonal * 2.54;
       console.log(`Monitor Diagonal is ${monitorDiagonal} centimeters`)
    };
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
