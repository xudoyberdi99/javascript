const btns = document.querySelectorAll('button')
const wrapper = document.querySelector('.wrapper')

wrapper.addEventListener('click', event => {
	if (event.target && event.target.tagName === 'BUTTON') {
		console.log('event.target')
	}
})
// btns.forEach(item => {
// 	item.addEventListener('click', () => {
// 		console.log('CLICKED')
// 	})
// })

// console.log(btns[0].classList.value)
// console.log(btns[0].classList.item(0))
// console.log(btns[0].classList.add('yellow'))
// console.log(btns[0].classList.remove('blue'))
// console.log(btns[0].classList.toggle('blue'))
// console.log(btns[0].classList.toggle('blue'))

// wrapper.addEventListener('click', event => {
// 	if (event.target && event.target.matches('button.blue')) {
// 		console.log('CLICK')
// 	}
// })

// const button = document.createElement('button')
// button.classList.add('blue')
// button.textContent = 6
// wrapper.append(button)

// if (btns[1].classList.contains('red')) {
// 	console.log('Element contain red class')
// }

// btns[0].addEventListener('click', () => {
// if (btns[0].classList.contains('red')) {
// 	btns[0].classList.remove('red')
// } else {
// 	btns[0].classList.add('red')
// }

// 	btns[1].classList.toggle('red')
// })
