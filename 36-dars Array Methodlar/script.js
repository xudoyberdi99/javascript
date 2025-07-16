//Map massiv qaytaradi
const arr = ['BMW', 'Mercedes', 'Audi', 'Tesla']
const newArr = arr.map((item, index) => {
	return item.toUpperCase()
})

console.log(newArr)

//Reduce massivni bir qiymatga aylantiradi
const numbers = [1, 2, 3, 4, 5]
const result = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue
}, 0)
console.log(result)
