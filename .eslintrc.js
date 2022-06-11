module.exports = {
  env: {
    mocha: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  root: true,
  rules: {
    'sort-keys': ['error', 'asc', { caseSensitive: false }]
  }
};
