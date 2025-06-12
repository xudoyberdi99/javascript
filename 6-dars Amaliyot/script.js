const numberOfSeries = +prompt(`nechta serial ko'rdingiz`, '')

const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	privat: false,
}

const serial1 = prompt(`oxirgi ko'rgan serialingiz`, '')
const ball1 = +prompt(`nechi baho quyasiz`)

const serial2 = prompt(`oxirgi ko'rgan serialingiz`, '')
const ball2 = +prompt(`nechi baho quyasiz`, '')

seriesDB.series[serial1] = ball1
seriesDB.series[serial2] = ball2

console.log(seriesDB)
