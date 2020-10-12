// TODO: Verify configuration
module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2019
  },
  root: true,
  rules: {
    'sort-keys': ['error', 'asc', { caseSensitive: false }]
  }
};
