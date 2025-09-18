const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1. 각 요소를 3배해서 출력하기
const quiz1 = (x) => {
  return x * 3;
};
const result1 = arr.map(quiz1);
console.log(result1);

//2. 각 요소에서 5보다 작으면 2배 크면 3배해서 출력하기
const quiz2 = (x) => {
  return x > 5 ? x * 3 : x * 2;
};
const result2 = arr.map(quiz2);
console.log(result2);

//3. 각 요소에서 홀수면 "💛" 아니면 "🍔" 해서 출력하기
const quiz3 = (x) => {
  return x % 2 == 1 ? "💛" : "🍔";
};
const result3 = arr.map(quiz3);
console.log(result3);

//4. 각 요소에서 뒤에 ":00" 붙혀서 출력하기
const quiz4 = (x) => {
  return x + ":00";
};
const result4 = arr.map(quiz4);
console.log(result4);
