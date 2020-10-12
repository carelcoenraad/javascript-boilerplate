// eslint-disable-next-line no-undef
module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  root: true,
  rules: {
    'sort-keys': ['error', 'asc', { caseSensitive: false }]
  }
};
