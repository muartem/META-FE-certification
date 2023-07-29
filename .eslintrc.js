module.exports = {
	env: {
		browser: true,
		es2023: true,
	},
	extends: [
		'airbnb-typescript',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaVersion: '2022',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react'],
	rules: {
		semi: ['warn', 'never'],
		indent: ['warn', 'tab'],
		'@typescript-eslint/semi': 0,
		'@typescript-eslint/indent': 0,
		'import/extensions': 0,
		'import/no-extraneous-dependencies': 0,
		'react/react-in-jsx-scope': 0,
	},
}
