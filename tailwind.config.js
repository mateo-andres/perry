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
				azul: {
					100: '#52D3D8',
					200: '#3887BE',
					300: '#38419D',
					400: '#200E3A'
				},
				sombra: {
					100: '#F1F6F9',
					200: '#9BA4B5',
					300: '#394867',
					400: '#212A3E'
				}
			},
			textColor: {
				white: '#FFFFFF', // Blanco para texto principal
				black: '#000000',
				azul: {
					100: '#52D3D8',
					200: '#3887BE',
					300: '#38419D',
					400: '#200E3A'
				}
			},
			fontFamily: {
				sans: ['Open Sans', 'sans-serif'],
				inconsolata: ['inconsolata', 'Consolas']
			}
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#52d3d8',
					secondary: '#3887be',
					accent: '#38419d',
					neutral: '#9ba4b5',
					'base-100': '#f1f6f9',
					info: '#60a5fa',
					success: '#22c55e',
					warning: '#facc15',
					error: '#f87171'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
