module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.eslint.json'],
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/require-default-props': [
      2,
      {
        functions: 'defaultArguments',
      },
    ],
    'react/jsx-props-no-spreading': [2, { html: 'ignore' }],
  },
};
