// const eng = +window.prompt("님 영어점수");
// if (eng >= 90) {
//   window.console.log("A");
// } else if (eng >= 80) {
//   window.console.log("B");
// } else if (eng >= 70) {
//   window.console.log("C");
// } else if (eng >= 60) {
//   window.console.log("D");
// } else if (eng >= 50) {
//   window.console.log("E");
// } else {
//   window.console.log("ㅅㄱ");
// }

const user_num = +prompt("숫자 입력");

const isPositive = user_num > 0;
const isNegative = user_num < 0;
const isOdd = user_num % 2 != 0;
const isEven = user_num % 2 == 0;
if (isPositive && isOdd) {
  console.log("양의 홀수");
} else if (isPositive && isEven) {
  console.log("양의 짝수");
} else if (isNegative && isOdd) {
  console.log("음의 홀수");
} else if (isNegative && isEven) {
  console.log("음의 짝수");
} else {
  console.log("0");
}
