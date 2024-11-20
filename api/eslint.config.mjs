/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.js'],
		languageOptions: { sourceType: 'module' },
		rules: {
			semi: ['error', 'never'],
			indent: ['error', 'tab'],
			'linebreak-style': ['error', 'unix'],
			quotes: ['error', 'single'],
		},
	},
];