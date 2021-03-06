/*!
 * name: @jswork/next-sum
 * description: Gets the sum of the values in collection.
 * homepage: https://github.com/afeiship/next-sum
 * version: 1.0.2
 * date: 2021-01-09 16:40:28
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
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
