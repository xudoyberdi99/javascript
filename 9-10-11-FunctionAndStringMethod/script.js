mukammalSon(100)

function mukammalSon(n) {
	for (let i = 1; i <= n; i++) {
		let a = 0
		for (let j = 2; j <= i / 2; j++) {
			if (i % j == 0) {
				a += j
			}
		}
		if (a === i) {
			console.log(a)
		}
	}
}

// buluvchilari(125)

// function buluvchilari(n) {
// 	let a = 0
// 	for (let i = 1; i <= n / 2; i++) {
// 		if (n % i == 0) {
// 			a += i
// 		}
// 	}
// 	console.log(a)
// }
