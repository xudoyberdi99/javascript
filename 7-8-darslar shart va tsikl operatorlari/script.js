let numberOfSeries = +prompt(`nechta serial ko'rdingiz`, '')
// console.log(numberOfSeries)

while (numberOfSeries === 0) {
	numberOfSeries = +prompt(`nechta serial ko'rdingiz`, '')
	if (numberOfSeries != 0) {
		console.log(numberOfSeries)
		break
	}
}

if (numberOfSeries < 5) {
	alert('kam serial koryapsz')
} else if (numberOfSeries > 5 && numberOfSeries < 10) {
	alert('siz classik tomoshabin ekansz')
} else {
	alert('sizdan zuri yuq')
}

let randastur = [
	' ',
	'Java',
	'rus tili',
	'kino',
	'rus tilida kino',
	'kitob uqish',
	'javascript',
	' ',
]

let a = randastur[Math.floor(Math.random() * randastur.length)]

console.log(a)
