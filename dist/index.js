/*!
 * name: @jswork/next-sum
 * description: Gets the sum of the values in collection.
 * homepage: https://github.com/afeiship/next-sum
 * version: 1.0.0
 * date: 2020-11-20 16:54:53
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var getCallback = function (inPath) {
    var type = typeof inPath;
    switch (type) {
      case 'string':
        return function (_, value) {
          return nx.get(value, inPath);
        };
      case 'function':
        return inPath;
      default:
        return function (_, value) {
          return value;
        };
    }
  };

  nx.sum = function (inArray, inPath) {
    var callback = getCallback(inPath);
    return inArray.reduce(function (res, current, index, target) {
      var value = callback(index, current, target);
      return (res += value);
    }, 0);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sum;
  }
})();
