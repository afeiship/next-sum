var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-sum');

describe('next/sum', function() {
  test('sum pure array', function() {
    var arr1 = [1, 2, 3, 4];

    var rs1 = nx.sum(arr1);

    assert.equal(rs1, 10);
  });

  test('sum pure objecr', function() {
    var obj1 = {
      a: 1,
      b: 2,
      c: 3
    };

    var rs1 = nx.sum(obj1);
    assert.equal(rs1, 6);
  });

  test('sum pure object with callback1', function() {
    var obj1 = {
      a: 1,
      b: 2,
      c: 3,
      d: 0.3,
      e: 0.5
    };

    var rs1 = nx.sum(obj1, function(key, value) {
      return value < 1;
    });
    assert.equal(rs1, 0.8);
  });

  test('sum pure object with callback1, callback2 (0.1 + 0.2 != 0.3)', function() {
    var obj1 = {
      a: 1,
      b: 2,
      c: 3,
      d: 0.1,
      e: 0.2
    };

    var rs1 = nx.sum(
      obj1,
      function(key, value) {
        return value < 1;
      },
      function(c, n) {
        return 10 * c + 10 * n;
      }
    );

    assert.equal(rs1 / 10, 0.3);
  });
});
