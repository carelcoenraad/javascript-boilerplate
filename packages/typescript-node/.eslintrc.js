module.exports = {
  env: {
    mocha: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:jsdoc/recommended'
  ],
  parser: '@typescript-eslint/parser',
  root: true,
  rules: {
    'sort-keys': ['error', 'asc', { caseSensitive: false }]
  }
};
