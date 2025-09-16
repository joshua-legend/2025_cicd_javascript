// short-circuit[단축평가]
// ||[or]
const a = false || "떡볶이";
const b = "순대" || false;
const c = 0 || "" || "콜라" || "제로콜라";
// 유저에게 닉네임을 입력받고
// 알럿으로 ~~~님 환영합니다!
// 만약에 닉네임을 빈문자로 입력하면
// 알럿으로 guest님 환영합니다!
// const nickname = window.prompt("닉네임 입력");
// window.alert(`${nickname || "guest"}님 환영합니다!`);

// &&[and]
const d = false && "떡볶이"; //false
const e = true && "떡볶이"; //"떡볶이"
false && window.alert("ㅎㅇ"); // 아무일도안일어남

// 유저에게 화장실비밀번호 입력을 받고
// 틀리면 아무일도 안일어나고,
// 맞으면 화장실문이 열렸습니다!

const password = +window.prompt("화장실 비밀번호");
password == 1215 && window.alert("화장실문이 열렸습니다~🎶");
