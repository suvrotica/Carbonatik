const plugin = require('tailwindcss/plugin');
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'dark-mode': "url('/path/to/dark/image.jpg')",
				'light-mode': "url('/path/to/light/image.jpg')"
			}),
			colors: {
				// neutral
				primary: {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#e5e5e5',
					300: '#d4d4d4',
					400: '#a3a3a3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717'
				}
			}
		}
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				'.dark-bg': {
					backgroundImage:
						"url('https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/b007d937821f91b1ad1f311f6f79fcb0-JKGcetgl0suJGyxueNJgV5Zrpnyi6a.jpg')"
				},
				'.dark-bg2': {
					backgroundImage:
						"url('https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/a568a59d-3096-48a0-ad37-20cfe8fd0d9d-A4ZAc7iqIrhme3Bh6obbtJKh5vDHG7.png')"
				},
				'.light-bg': {
					backgroundImage:
						"url('https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/3b6edf4e4afbccc06fd500fc261f6680-25ZGagzpQQSwP7GliJHCpv53oc2PYH.jpg')"
				}
			};

			addUtilities(newUtilities);
		})
	]
};
module.exports = config;
