//1. 유저에게 한 변의 길이를 입력 받고, 정사각형의 넓이를 콘솔로 나타내기
// 결과) 한 변의 길이 ${}인 정사각형의 넓이:{}

const side = Number(window.prompt("정사각형의 한변의 길이 입력"));
window.console.log(`한 변의 길이 ${side}인 정사각형의 넓이:${side * side}`);

//2. 유저에게 밑변과 높이를 입력 받고, 삼각형의 넓이를 콘솔로 나타내기
// 결과) 밑변 ${}과 높이 ${}인 삼각형의 넓이:{}
const base = Number(window.prompt("삼각형의 밑변 입력"));
const height = Number(window.prompt("삼각형의 높이 입력"));
window.console.log(`밑변 ${base}과 높이 ${height}인 삼각형의 넓이:${base * height * 0.5}`);

//3. 유저에게 일본여행 갈겸, 원화를 입력 받고 엔화로 콘솔로 나타내기
// 결과) 1000000원은 ~~~엔 입니다!
const won = Number(window.prompt("원화입력:"));
const yen = won / 9.41;
window.console.log(`${won}원은 ${yen}엔 입니다!`);

//4. 유저에게 몇분을 입력 받고 몇초인지 콘솔로 나타내기
// 결과) 분: ~~ 초: ~~

const minute = Number(window.prompt("분 입력"));
const second = minute * 60;

window.console.log(`분:${minute} -> 초: ${second}`);
