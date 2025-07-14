window.addEventListener('DOMContentLoaded', () => {
	postWrapper = document.querySelector('.posts')

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
})
