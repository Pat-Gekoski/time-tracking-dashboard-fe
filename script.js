const selectors = document.querySelectorAll('[data-day-selector]')

console.log(selectors)

const changeSelector = (selection) => {
	selectors.forEach((selector) => {
		selector.classList.remove('selected')
	})

	selection.classList.add('selected')
}

selectors.forEach((selector) => {
	selector.addEventListener('click', () => {
		changeSelector(selector)
	})
})
