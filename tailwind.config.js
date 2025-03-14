/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		extend: {
			colors: {
				appBlue: 'hsl(246, 80%, 60%)',
				veryDarkBlue: 'hsl(226, 43%, 10%)',
				darkBlue: 'hsl(235, 46%, 20%)',
				darkBlueHover: 'hsl(235, 46%, 40%)',
				desaturatedBlue: 'hsl(235, 45%, 61%)',
				paleBlue: 'hsl(236, 100%, 87%)',
				work: 'hsl(15, 100%, 70%)',
				play: 'hsl(195, 74%, 62%)',
				study: 'hsl(348, 100%, 68%)',
				exercise: 'hsl(145, 58%, 55%)',
				social: 'hsl(264, 64%, 52%)',
				selfCare: 'hsl(43, 84%, 65%)',
			},
			fontFamily: {
				Rubik: ['Rubik', 'sans-serif'],
			},
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
}
