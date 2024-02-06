module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Add your custom rules here
      'react/prop-types': 'off', // if you are using TypeScript, you don't need prop-types
      '@typescript-eslint/explicit-module-boundary-types': 'off', // allow implicit return type for React components
    },
  };
  