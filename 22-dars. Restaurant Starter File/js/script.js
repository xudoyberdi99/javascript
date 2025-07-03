window.addEventListener('DOMContentLoaded', () => {
	//Tabs
	const tabs = document.querySelectorAll('.tabheader__item')
	const tabContents = document.querySelectorAll('.tab_content')
	const tabParents = document.querySelector('.tabheader__items')

	function hideTabContent() {
		tabContents.forEach(tabContent => {
			tabContent.style.display = 'none'
		})

		tabs.forEach(tabItem => {
			tabItem.classList.remove('tabheader__item_active')
		})
	}

	function showTabContent(index = 0) {
		tabContents[index].style.display = 'flex'
		tabs[index].classList.add('tabheader__item_active')
	}

	hideTabContent()
	showTabContent()

	tabParents.addEventListener('click', event => {
		const target = event.target
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((tab, index) => {
				if (target === tab) {
					hideTabContent()
					showTabContent(index)
					console.log(tab)
				}
			})
		}
	})

	//Loader

	const loaderWrapper = document.querySelector('.loader-wrapper')
	setTimeout(() => {
		loaderWrapper.style.display = 'none'
	}, 2000)

	//Timer

	const deadline = '2025-12-31'

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date())
		const days = Math.floor(t / (1000 * 60 * 60 * 24))
		const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
		const seconds = Math.floor((t % (1000 * 60)) / 1000)

		return {
			total: t,
			days,
			hours,
			minutes,
			seconds,
		}
	}

	function formatNumber(number) {
		if (number >= 0 && number < 10) {
			return `0${number}`
		} else {
			return number
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000)

		updateClock()

		function updateClock() {
			const time = getTimeRemaining(endtime)

			days.textContent = formatNumber(time.days)
			hours.textContent = formatNumber(time.hours)
			minutes.textContent = formatNumber(time.minutes)
			seconds.textContent = formatNumber(time.seconds)

			if (time.totalTime <= 0) {
				clearInterval(timeInterval)
			}
		}
	}

	setClock('.timer', deadline)
})
