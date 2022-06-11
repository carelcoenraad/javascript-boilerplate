// Example truthy values, inspired by https://developer.mozilla.org/en-US/docs/Glossary/Truthy
const truthyValues = [
  true,
  {},
  [],
  42,
  '0',
  'false',
  new Date(),
  -42,
  12n,
  3.14,
  -3.14,
  Infinity,
  -Infinity
];

module.exports = {
  truthyValues
};
