# JavaScript Boilerplate

A JavaScript boilerplate project.

## Features

- [Commitlint](https://commitlint.js.org/)
- [EditorConfig](https://editorconfig.org/)
- [ESLint](https://eslint.org/)
- [Git hooks with Husky](https://github.com/typicode/husky)
- [Markdownlint](https://github.com/DavidAnson/markdownlint)
- [Prettier](https://prettier.io/)

## Configurations

### CommitLint

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional']
};
```

### ESLint

```javascript
module.exports = {
  env: {
    es2021: true,
    mocha: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended'
  ],
  root: true,
  rules: {
    'sort-keys': ['error', 'asc', { caseSensitive: false }]
  }
};
```

### Markdown Lint

```json
{
  "default": true,
  "line-length": false
}
```

### Prettier

```javascript
module.exports = {
  singleQuote: true,
  trailingComma: 'none'
};
```
