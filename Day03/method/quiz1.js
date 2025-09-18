//유저에게 프롬프트로 비밀번호 설정을 입력받고,
//1. 비밀번호 길이가 4에서 12글자까지만 허용, 틀리면 -> 비밀번호 길이가 맞지않습니다.
//2. 비밀번호에 @,!,# 중 하나가 포함되어야 허용, 틀리면 -> 비밀번호에 @,!,#이 없습니다.
//3. 비밀번호 시작이 it로 해야 허용, 틀리면 -> 비밀번호 시작이 it가 아닙니다.
//다 통과되면 올바르게 비밀번호 만들었습니다!💛

const password = prompt("비밀번호 설정 입력");

if (password.length < 4 || 12 < password.length) {
  console.log("비밀번호 길이가 맞지않습니다.");
} else if (!password.includes("@") && !password.includes("!") && !password.includes("#")) {
  console.log("비밀번호에 @,!,#이 없습니다.");
} else if (!password.startsWith("it")) {
  console.log("비밀번호 시작이 it가 아닙니다.");
} else {
  console.log("올바르게 비밀번호 만들었습니다!💛");
}

"coffee".includes("e") && "coffee".includes("f");
