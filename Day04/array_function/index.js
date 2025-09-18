const arr = [1, 3, 5, 7, 9];

// arr
// push,pop,shift,unshift
// map: 안에 있는 요소를 바꾸는 함수
// filter: 안에 있는 요소를 조건에 의하여 걸르기
// some,every

const first = (x) => {
  return x == 1;
};
const quiz1 = arr.some(first); // true
const second = (x) => {
  return x == 5;
};
const quiz2 = arr.some(second); // true
const third = (x) => {
  return x % 2 == 0;
};
const quiz3 = arr.some(third); // true
