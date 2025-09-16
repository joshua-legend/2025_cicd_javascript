const bus_track = +prompt("버스 노선 종류 선택(1.시내버스 2.광역버스 3.마을버스)");
const age = +prompt("승객의 나이 입력:");

if (age <= 8 || 65 <= age) {
  console.log("무료입니다.");
} else if (9 <= age && age <= 19) {
  if (bus_track == 1) {
    console.log(`시내 버스 요금:${1200 * 0.7}입니다.`);
  } else if (bus_track == 2) {
    console.log(`광역 버스 요금:${2000 * 0.7}입니다.`);
  } else if (bus_track == 3) {
    console.log(`마을 버스 요금:${1000 * 0.7}입니다.`);
  } else {
    console.log(`에러`);
  }
} else {
  if (bus_track == 1) {
    console.log(`시내 버스 요금:${1200 * 1}입니다.`);
  } else if (bus_track == 2) {
    console.log(`광역 버스 요금:${2000 * 1}입니다.`);
  } else if (bus_track == 3) {
    console.log(`마을 버스 요금:${1000 * 1}입니다.`);
  } else {
    console.log(`에러`);
  }
}
