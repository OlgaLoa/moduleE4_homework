// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.


let prop = 'good';
const obj = {
  city: "Moscow",
  name: "Ivan",
  good: "word"
};

function checkPropertyInObject (prop, obj) {
  
  for (let key in obj ) {
    if (key == prop) {
       return console.log(true);
    }   
  } 
    return console.log(false);
}
checkPropertyInObject (prop, obj)


// 2-ой вариант
// let prop = 'good';
// const obj = {
//   city: "Moscow",
//   name: "Ivan",
//   good: "word"
// };

// function checkPropertyInObject (prop, obj) {
  
//     if (obj.hasOwnProperty(prop)) {
    
//       return true   
//   } 
//     return false;
// }
// console.log(checkPropertyInObject (prop, obj))
