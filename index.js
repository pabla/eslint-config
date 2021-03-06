'use strict';

module.exports = {
  env: {
    node: true,
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier', 'flowtype'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        jsxBracketSameLine: true,
        printWidth: 80,
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:flowtype/recommended',
  ],
};
