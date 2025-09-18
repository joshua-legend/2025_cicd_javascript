// 1. 영화제목과 좌석[A1,D2,E5,...], 그리고 시작시간[21:00]을 넣으면
// 끝시간이 + 2시간 더해서 오브젝트 타입으로 돌려주는 💛함수 만들기💛
// 단, 타입 위배시 문자열 "에러입니다." 돌려주기

function makeTicket(title, seat, startTime) {
  if (typeof title != "string" || typeof seat != "string" || typeof startTime != "string") return "에러입니다.";
  return {
    title: title,
    seat: seat,
    startTime: startTime,
    endTime: String(parseInt(startTime) + 2) + ":00",
  };
}
