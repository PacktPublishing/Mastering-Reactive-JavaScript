var assert = require('assert');
describe('Math test', function() {
  it('should return -1 when evaluating the minimum between -1 and 1', function() {
    assert.equal(-1, Math.min(-1,1));
  });
  it('should return 1 when evaluating the maximum between -1 and 1', function() {
    assert.equal(1, Math.max(-1,1));
  });
});
