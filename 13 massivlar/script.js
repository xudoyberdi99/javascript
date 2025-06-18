/* Massivlar */

const colors = ['red', 'green', 'blue', 'yellow', 'orange']

// Pop va Push
// Pop - bu massivni oxiridagi elementi o'chiradi
// Push - bu massivni oxiriga yangi element qo'shadi

console.log("Oxirigi elementi o'chirish:", colors.pop())
console.log("Oxirigi yangi element qo'shish", colors.push('brown'))

console.log(colors)

// Shif va Unshift
// Pop - bu massivni oldidagi elementi o'chiradi
// Push - bu massivni oldiga yangi element qo'shadi

console.log("Oldidagi elementi o'chirish:", colors.shift())
console.log("Oldiga yangi element qo'shish", colors.unshift('gray'))

const cars = ['BMW', 'Merc', 'Audi', 'Suzuki', 'Subaru']

cars.sort()
console.log(cars)
