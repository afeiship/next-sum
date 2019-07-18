/*!
 * name: next-sum
 * url: https://github.com/afeiship/next-sum
 * version: 1.0.0
 * date: 2019-07-18T11:47:00.244Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.sum = function(inTarget) {
    var arg1 = arguments[1];
    var arg2 = arguments[2];
    var values = [];

    nx.each(inTarget, function(key, value) {
      if (arg1) {
        if (arg1.call(inTarget, key, value)) {
          values.push(value);
        }
      } else {
        values.push(value);
      }
    });

    return values.reduce(function(current, next) {
      return arg2 ? arg2.call(values, current, next) : current + next;
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sum;
  }
})();

//# sourceMappingURL=next-sum.js.map
