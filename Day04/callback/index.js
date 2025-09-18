//x: number,string, boolean, array, object, function
//콜백함수: 마술상자 안에 마술상자 넣기

// const ramen = () => {
//   console.log("물 넣고 끓이기");
//   console.log("면 넣기");
//   console.log("스프 넣기");
// };

// const eggFry = () => {
//   console.log("프라이펜에 기름 두르기");
//   console.log("계란 깨고 뿌리기");
//   console.log("뒤집기");
// };

// const kimchirice = () => {
//   console.log("김치 넣기");
//   console.log("밥 달달 볶기");
// };

// const jjajjang = () => {
//   console.log("물 받고 끓임");
//   console.log("면 끓이고 소스 넣기");
// };

// const cook = (recipe) => {
//   console.log("💛요리시작💛");
//   recipe();
//   console.log("💙요리끝💙");
// };

// cook(kimchirice);
// cook(ramen);
// cook(jjajjang);

//1.불🔥 //2.얼음🧊 //3. 번개⚡
const activate = (skill) => {
  console.log("스킬 준비!");
  skill();
  console.log("스킬 완료!");
};
const fire = () => {
  console.log("🔥");
};
const ice = () => {
  console.log("🧊");
};
const lightening = () => {
  console.log("⚡");
};
activate(ice);
activate(fire);
