//1. 점수를 입력받아 60점 이상이면 합격, 아니면 불합격 출력하기
// ex) 45 -> 불합격, 60 -> 합격
const score = Number(window.prompt("점수 입력:"));
const result = score >= 60 ? "합격" : "불합격";
window.console.log(result);

//2. 두 수를 입력받아 더 큰 수를 출력하기
// ex) 5 3 입력 -> 5
const first = Number(window.prompt("첫 번째 수 입력:"));
const second = Number(window.prompt("두 번째 수 입력:"));
const result1 = first > second ? first : second;
window.console.log(result1);

//3.숫자를 입력받아 양수, 음수, 0 중 하나를 출력하기
// ex) 0 -> 0, 10 -> 양수, -20 -> 음수
const num = Number(window.prompt("숫자 입력"));
const result2 = num > 0 ? "양수" : num < 0 ? "음수" : 0;

//4. 숫자를 입력받아 짝수인지 홀수인지 출력하기
// ex) 10 -> 짝수, -5 -> 홀수
const num1 = Number(window.prompt("숫자 입력"));
const result3 = num1 % 2 == 1 ? "홀수" : "짝수";
