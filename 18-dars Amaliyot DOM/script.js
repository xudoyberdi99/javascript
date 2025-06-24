//1-Topshiriq
const reklama = document.querySelector('.promo__adv')
const images = reklama.querySelectorAll('img')
images.forEach(imag => (imag.style.display = 'none'))

//2-topshiriq
const genre = document.querySelector('.promo__genre')
genre.innerHTML = 'Comedy'

//3-Topshiriq
const backgr = document.querySelector('.promo__bg')
backgr.style.backgroundImage = "url('../18-dars Amaliyot DOM/img/1.jpg')"

//4-topshiriq
const serialArr = ['Polat', 'Pusu', 'Qashqirlar makoni', 'pistirma']

const series = document.querySelector('.promo__interactive-list')

series.innerHTML = ''

serialArr.forEach((item, index) => {
	series.innerHTML += `
	<li class="promo__interactive-item">
		${index + 1}. ${item}
		<div class="delete"></div>
	</li>
	`
})

//5-topshiriq
const inputValue = document.querySelector('.adding__input')
addEventListener('submit', e => {
	e.preventDefault()
	const newItem = inputValue.value.trim()
	const check = document.getElementById('favorite')

	if (newItem) {
		serialArr.push(newItem)
		series.innerHTML += `
	<li class="promo__interactive-item">
		${serialArr.length}. ${newItem}
		<div class="delete"></div>
	</li>
	`
	}
	if (check) {
		console.log(`Siz ${newItem} serialini sevasiz`)
	}
	inputValue.value = ''
})

//6-topshiriq
series.addEventListener('click', e => {
	if (e.target.classList.contains('delete')) {
		const item = e.target.parentElement
		const index = Array.from(series.children).indexOf(item)
		serialArr.splice(index, 1)
		item.remove()
	}
})
