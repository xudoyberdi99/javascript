const person = {
	name: 'Asl',
	age: 22,
	hobbies: {
		games: 'UFC',
		sport: 'Football',
	},
}

// const secondPerson = person

// secondPerson.name = 'Yusuf'
// secondPerson.age = 18

// console.log(person)
// console.log(secondPerson)

// #1. Iteratsiya

const copyobject = obj => {
	const cloneObject = {}

	for (let key in obj) {
		cloneObject[key] = obj[key]
	}

	return cloneObject
}

const secondPerson = copyobject(person)

secondPerson.name = 'Yusuf'
secondPerson.age = 18
secondPerson.hobbies.games = 'blur'

console.log(person)
console.log(secondPerson)

// #2.Object assign
console.log('##################################################')

const thirdPerson = Object.assign({ isMarried: false }, person)
thirdPerson.name = 'Shahlo'
thirdPerson.age = 12

console.log(person)
console.log(secondPerson)
console.log(thirdPerson)

// #3. spread operatori yordamida clonlash ES-8 dan qo'shilgan
console.log('####################################################')

const copyPerson = { ...person }
copyPerson.name = 'Shahlo'
copyPerson.age = 12

console.log(person)
console.log(secondPerson)
console.log(thirdPerson)
console.log(copyPerson)

// Arraylarni clonlash
// #1.Slice yordamida clonnlash
console.log('############################################################')

const cars = ['BMW', 'MERS', 'AUDI']
const copyArr = cars.slice()

console.log(cars)
console.log(copyArr)

//#2.Spread operatori yordamida
const copyArr2 = [...cars]

console.log(cars)
console.log(copyArr)
console.log(copyArr2)
