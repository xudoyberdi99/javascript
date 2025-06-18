//Callback
/* JavaScript callback funksiyasi bu boshqa funksiya ichida argument sifatida uzatiladigan va keyinchalik, odatda biror hodisa yoki jarayon tugagach chaqiriladigan funksiyadir. */
function abs(adc) {
	console.log('salom')

	adc()
}

function adc() {
	console.log('11111')
}

abs(adc)

/* Object*/

const person = {
	name: 'Xudoyberdi',
	year: 1999,
	hobbies: {
		sport: 'Football',
		games: 'countr strike',
	},
	sayHello: function () {
		console.log('salom')
	},
}

const {
	name,
	year,
	hobbies: { sport, games },
	sayHello,
} = person

console.log(sport)

console.log(year)
