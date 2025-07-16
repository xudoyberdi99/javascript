window.addEventListener('DOMContentLoaded', () => {
	postWrapper = document.querySelector('.posts')

	//Metod GET
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then(response => response.json())
		.then(data => {
			data.forEach((item, index) => {
				const postElement = document.createElement('div')
				postElement.classList.add('post')
				postElement.innerHTML += `
					<h4><b>#${index + 1}.</b>  ${item.title}</h4>
					<p>${item.body}</p>
				`
				postWrapper.append(postElement)
			})
		})
		.catch(err => {
			console.log('Error:', err)
		})
		.finally(() => {
			console.log('Finally')
		})

	// Metod POST
	const postData = document.querySelector('form')

	postData.addEventListener('submit', e => {
		e.preventDefault()

		const formData = new FormData(postData)
		const data = Object.fromEntries(formData.entries())

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data)
				const postElement = document.createElement('div')
				postElement.classList.add('post')
				postElement.innerHTML += `
					<h4><b>#New Post</b>  ${data.title}</h4>
					<p>${data.body}</p>
				`
				postWrapper.prepend(postElement)
			})
			.catch(err => {
				console.log('Error:', err)
			})
			.finally(() => {
				postData.reset()
			})
	})
})
