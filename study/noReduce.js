const _ = require('fxjs');
const L = require('fxjs/Lazy');

const users = [
  { name: 'AA', age: 10 },
  { name: 'BB', age: 20 },
  { name: 'CC', age: 30 },
  { name: 'DD', age: 40 },
  { name: 'EE', age: 50 },
];

// 복잡한 함수
console.log(
  _.reduce((total, u) => total + u.age, 0, users),
);

// 코드를 미리 잘라 사용하기
const ages = _.map((a) => a.age, users);
console.log(
  _.reduce((a, b) => a + b, 0, ages),
);

const add = (a, b) => a + b;

console.log(
  _.reduce(
    add,
    _.filter(
      (a) => a > 30,
      _.map((a) => a.age, users),
    ),
  ),
);

// map, filter, reduce를 함께 사용하는 법
const obj1 = {
  a: 1,
  b: undefined,
  c: 'CC',
  d: 'DD',
};

function query1(obj) {
  let res = '';
  // eslint-disable-next-line guard-for-in
  for (const k in obj) {
    const v = obj[k];
    if (v === undefined) {
      continue;
    }
    if (res !== '') {
      res += '&';
    }
    res += `${k}=${v}`;
  }
  return res;
}

function query2(obj) {
  return Object.entries(obj)
    .filter(([k, v]) => v !== undefined)
    .reduce((query, [k, v], i) => `${query}${i > 0 ? '&' : ''}${k}=${v}`, '');
}

function query3(obj) {
  return _.reduce(
    (a, b) => `${a}&${b}`,
    _.map(
      ([k, v]) => `${k}=${v}`,
      _.reject(
        ([k, v]) => v === undefined,
        Object.entries(obj),
      ),
    ),
  );
}

// 라이브러리를 사용하지 않고 내장함수만으로 가져오기
function nQuery3(obj) {
  return Object.entries(obj)
    .filter(([k, v]) => v !== undefined)
    .map(([k, v]) => `${k}=${v}`)
    .reduce((a, b) => `${a}&${b}`);
}

console.log(query1(obj1));
console.log(query2(obj1));
console.log(query3(obj1));
console.log(nQuery3(obj1));

const split = _.curry((sep, str) => str.split(sep));

const query = query3(obj1);

// queryToObject
const queryToObject = _.pipe(
  split('&'),
  _.map(split('=')),
  _.map(([k, v]) => ({ [k]: v })),
  _.reduce(Object.assign),
);

console.log(queryToObject(query));
