const fruits = ["watermelon", "apple", "melon", "grape", "banana", "peach", "kiwi", "pineapple", "strawberry", "orange", "plum"];
//1. 배열의 요소들을 문자 길이로 바꾸기
const quiz1 = (x) => {
  return x.length;
};
const result1 = fruits.map(quiz1);
console.log(result1);

//2. 배열의 요소들이 6글자 이상이면 대문자화하기 아니면 소문자화
const quiz2 = (x) => {
  return x.length >= 6 ? x.toUpperCase() : x.toLowerCase();
};
const result2 = fruits.map(quiz2);
console.log(result2);

//3. 배열의 요소들이 a or e 가 들어가면 "꿀맛"으로 바꾸고 아니면 "노맛"으로 바꾸기
const quiz3 = (x) => {
  if (x.includes("a") || x.includes("e")) {
    return "꿀맛";
  } else {
    return "노맛";
  }
};
const result3 = fruits.map(quiz3);
console.log(result3);

//4. 배열의 요소들을 첫번째 글자만 대문자화하고 나머지 소문자화하기(ex) Watermelon)
const quiz4 = (x) => {
  return x[0].toUpperCase() + x.slice(1, x.length);
};
const result4 = fruits.map(quiz4);
console.log(result4);

//5. 배열의 요소들을 오브젝트 타입으로 {name:과일이름, length:과일이름길이} 으로 바꾸기
const quiz5 = (x) => {
  return { name: x, length: x.length };
};
const result5 = fruits.map(quiz5);
console.log(result5);
