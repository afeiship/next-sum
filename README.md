# next-sum
> Gets the sum of the values in collection.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-sum
```

## usage
```js
import '@feizheng/next-sum';

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [
  { key: '1', value: 111 },
  { key: '2', value: 222 },
  { key: '3', value: 333 },
  { key: '4', value: 444 }
];
const arr3 = [
  { key: 1, value: 111 },
  { key: 2, value: null },
  { key: 3, value: 2 },
  { key: 3, value: 'abc555' }
];

// simple
nx.sum(arr1);   // 15
nx.sum(arr2, 'value'); // 1110

// with callback
nx.sum(arr3, function (_, item) {
  var val = parseInt(item.value, 10);
  return val ? val : 0;
});

// 113
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-sum/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-sum
[version-url]: https://npmjs.org/package/@feizheng/next-sum

[license-image]: https://img.shields.io/npm/l/@feizheng/next-sum
[license-url]: https://github.com/afeiship/next-sum/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-sum
[size-url]: https://github.com/afeiship/next-sum/blob/master/dist/next-sum.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-sum
[download-url]: https://www.npmjs.com/package/@feizheng/next-sum
