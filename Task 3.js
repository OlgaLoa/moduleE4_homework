// Написать функцию, которая создает пустой объект, но без прототипа.

function createNullObj(){
	return Object.create(null)
}
console.log(createNullObj());
