const year = window.prompt("몇년 생임?");
const month = window.prompt("몇월 생임?");
const date = window.prompt("몇일 생임?");
window.console.log(`당신의 태어난 때는 ${year}년 ${month}월 ${date}일 이시군요!`);

// 2. 초등학교, 중학교, 고등학교를 각각 프롬프트로 묻고
const element = window.prompt("어디 초등학교임?");
const middle = window.prompt("어디 중학교임?");
const high = window.prompt("어디 고등학교임?");
window.console.log(`
당신의 학교 이력
${element}초등학교
${middle}중학교
${high}고등학교
`);

// 3. 베스킨라빈스에서 좋아하는 아이스크림 3가지를 각각묻고
// 파인트 컵에 ~~맛 ~~맛 ~~맛을 담아서 드립니다!
const first_flavor = window.prompt("나니가스키?");
const second_flavor = window.prompt("나니가스키?");
const third_flavor = window.prompt("나니가스키?");
window.console.log(`파인트 컵에 ${first_flavor}맛 ${second_flavor}맛 ${third_flavor}맛을 담아서 드립니다!`);
