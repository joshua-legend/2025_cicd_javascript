//1. 유저에게 프롬프트로 나이를 입력받고 20살 보다 적으면
// 콘솔로 미성년자입니다. 아니면 성인입니다. 나타내기
const age = Number(window.prompt("몇살임?"));
const result = age >= 20 ? "성인입니다." : "미성년자입니다.";
window.console.log(result);

//2. 유저에게 키를 입력 받고, 140cm보다 작으면
// 해당 놀이기구는 탑승이 안됩니다. 넘으면 가능합니다. 나타내기
const height = Number(window.prompt("키몇임?"));
const result1 = height >= 140 ? "탑승 가능합니다." : "탑승이 안됩니다.";
window.console.log(result1);

//3. 유저에게 숫자(정수)를 입력받고, 0보다 크면 양수 입니다.
//아니면 0 또는 음수입니다. 나타내기
const num = Number(window.prompt("숫자를 입력하세요."));
const result2 = num > 0 ? "양수입니다." : "0 또는 음수입니다.";
window.console.log(result2);
