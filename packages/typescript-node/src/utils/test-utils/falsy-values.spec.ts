import { assert } from 'chai';
import { falsyValues } from './';

describe('falsyValues', () => {
  falsyValues.forEach((falsyValue) => {
    it(`checks ${falsyValue} as falsy value`, () => {
      assert.strictEqual(true, !falsyValue);
    });
  });
});
