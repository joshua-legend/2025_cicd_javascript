const fruits = ["watermelon", "apple", "melon", "grape", "banana", "peach", "kiwi", "pineapple", "strawberry", "orange", "plum"];

//1. 6글자 이상만 과일 남기기
//2. 알파벳 m이 들어가면 없애기
// const quiz1 = (x) => {
//   return x.length >= 6;
// };
// const result1 = fruits.filter(quiz1);
// console.log(result1);

// const quiz2 = (x) => {
//   return !x.includes("m");
// };
// const result2 = fruits.filter(quiz2);
// console.log(result2);

//3. a,e,i,o,u로 시작하는 과일은 살려주기
// const result3 = fruits.filter((x) => ["a", "e", "i", "o", "u"].some((v) => x.startsWith(v)));
// console.log(result3);

// a, p로 시작해서 e끝나는 찾기
const result4 = fruits.filter((x) => ["a", "p"].some((v) => x.startsWith(v))).filter((x) => x.endsWith("e"));
console.log(result4);
