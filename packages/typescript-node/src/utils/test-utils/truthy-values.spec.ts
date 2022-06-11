import { assert } from 'chai';
import { truthyValues } from './';

describe('truthyValues', () => {
  truthyValues.forEach((truthyValue) => {
    it(`checks ${truthyValue} as truthy value`, () => {
      assert.strictEqual(true, !!truthyValue);
    });
  });
});
