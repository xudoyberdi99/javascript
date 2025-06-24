/*DOM (Document Object Model) — bu veb-sahifaning strukturaviy ko‘rinishidir */

// DOM dan elementlarni olish #1-usul

const boxById = document.getElementById('box')
const boxByClassName = document.getElementsByClassName('box')
const buttons = document.getElementsByTagName('button')

console.log(boxById)
console.log(boxByClassName)
console.log(buttons)

//DOM dan elementlarni olish #2-usul
const wrapper = document.querySelector('.wrapper')
const hearts = document.querySelectorAll('.heart')

console.log(wrapper)
console.log(hearts)
