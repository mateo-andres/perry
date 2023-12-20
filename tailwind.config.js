/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
				hd: '1920px', // Resolución Full HD
				qhd: '2560px' // Resolución Quad HD
			},
			colors: {
				mainBlue: '#52D3D8',
				darkBlue: '#3887BE',
				navy: '#38419D',
				darkNavy: '#200E3A'
			},
			textColor: {
				white: '#FFFFFF', // Blanco para texto principal
				black: '#000000', // Negro para texto estándar
				textGray: '#5faf93', // Gris para texto secundario
				textBlue: '#248e9e', // Azul para texto secundario
				mainBlue: '#52D3D8',
				darkBlue: '#3887BE',
				navy: '#38419D',
				darkNavy: '#200E3A'
			},
			fontFamily: {
				sans: ['Open Sans', 'sans-serif']
			}
		}
	},
	plugins: [require('daisyui')]
};
