<<<<<<< HEAD
<<<<<<< HEAD
/** @type { import("eslint").Linter.Config } */
=======
/** @type { import("eslint").Linter.FlatConfig } */
>>>>>>> 7a452f58cb61ed64cf66102480dd01b6b2494841
=======
/** @type { import("eslint").Linter.FlatConfig } */
>>>>>>> 7a452f58cb61ed64cf66102480dd01b6b2494841
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	]
};
