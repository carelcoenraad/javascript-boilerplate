const { assert } = require('chai');
const { falsyValues } = require('./falsy-values');

describe('falsyValues', () => {
  falsyValues.forEach((falsyValue) => {
    it(`checks ${falsyValue} as falsy value`, () => {
      assert.strictEqual(true, !falsyValue);
    });
  });
});
