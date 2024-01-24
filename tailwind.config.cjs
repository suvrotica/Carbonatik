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
			fontFamily: {
				lato: ['Lato', 'sans-serif']
			},
			fontWeight: {
				thin: '100',
				light: '300'
				// ... other weights if needed
			},
			colors: {
				neutral: {
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
		require('@tailwindcss/typography'),
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
				'.dark-bg3': {
					backgroundImage:
						"url('https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/4110b4a3fedefd18163a515c994d2df4-J8QCt7X1ENxjwTP97C77nvHohyGUjR.jpg')"
				},
				'.dark-bg4': {
					backgroundImage:
						"url('https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/6f0f489e48ce87218c50e2a7dceea056-6Rfv694ofHmIsEyFDD2D342TJmrSzW.jpg')"
				},
				'.dark-bg5': {
					backgroundImage:
						"url('https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/bdeb87bada790c243a2489601abf98b8-HoE2NJnx9eItgPbb4wIHsKWJu1NCgz.jpg')"
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
