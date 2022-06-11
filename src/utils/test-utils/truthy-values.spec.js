const { assert } = require('chai');
const { truthyValues } = require('./truthy-values');

describe('truthyValues', () => {
  truthyValues.forEach((truthyValue) => {
    it(`checks ${truthyValue} as truthy value`, () => {
      assert.strictEqual(true, !!truthyValue);
    });
  });
});
