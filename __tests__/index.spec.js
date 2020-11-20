(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.sum calc pure array', function () {
      var arr = [1, 2, 3, 4, 5];
      expect(nx.sum(arr)).toBe(15);
    });

    test('nx.sum array with object', () => {
      var arr = [
        { key: '1', value: 111 },
        { key: '2', value: 222 },
        { key: '3', value: 333 },
        { key: '4', value: 444 }
      ];

      var res = nx.sum(arr, 'value');
      expect(res).toBe(1110);
    });

    test('nx.sum calc function', () => {
      var arr = [
        { key: 1, value: 111 },
        { key: 2, value: null },
        { key: 3, value: 2 },
        { key: 3, value: 'abc555' }
      ];

      var res = nx.sum(arr, function (_, item) {
        var val = parseInt(item.value, 10);
        return val ? val : 0;
      });
      expect(res).toBe(113);
    });
  });
})();
