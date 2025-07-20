// ESlint bizga xatolarni ko'rsatadi va to'g'rilashga yordam beradi
'use strict' //qatiy eski kodlarni ishlatmaslik uchun
localStorage.setItem('sammi-theme', 'light')

const theme = localStorage.getItem('sammi-theme')

if (theme === 'light') {
	document.body.style.backgroundColor = '#eee'
} else if (theme === 'dark') {
	document.body.style.backgroundColor = '#1f1f1f'
}

const form = document.querySelector('form'),
	postParent = document.querySelector('.posts')

form.addEventListener('submit', event => {
	event.preventDefault()

	const formData = new FormData(form)

	const object = {}

	formData.forEach((value, key) => {
		object[key] = value
	})

	const posts = []

	posts.push(object)

	const db = JSON.parse(localStorage.getItem('posts'))

	if (db) {
		localStorage.setItem('posts', JSON.stringify([...db, object]))
	} else {
		localStorage.setItem('posts', JSON.stringify([object]))
	}
})

getPosts()

function getPosts() {
	const posts = JSON.parse(localStorage.getItem('posts'))
	posts.forEach((item, index) => {
		const postElement = document.createElement('div')
		postElement.classList.add('post')
		postElement.innerHTML = `	<h4><b>#${index + 1}.</b>  ${item.title}</h4>
					<p>${item.body}</p>
		`
		postParent.append(postElement)
	})
}
