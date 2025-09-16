/* 
## 영화관 티켓 가격 계산기
사용자로부터 **영화 종류(1: 일반 12,000원 / 2: 3D 15,000원 / 3: IMAX 18,000원)**, **나이**, **간식(1.팝콘 5,000원 / 2.음료 2,000원 / 3. 없음 0원)**,
 **좌석 등급(1.일반 0원 / 2.프리미엄 5,000원 / 3.VIP 10,000원)**을 입력받으세요.
연령별 할인 규칙은 **7세 이하 50% 할인, 8세~19세 30% 할인, 65세 이상 무료**입니다.
입력된 정보를 바탕으로 **영화 기본 요금 → 연령별 할인 적용 → 간식 요금 추가 → 좌석 요금 추가** 순으로 계산하여, **최종 결제 금액을 출력하는 프로그램**을 작성하세요.0
*/

const movie_type = +prompt("영화 종류(1: 일반 12,000원 / 2: 3D 15,000원 / 3: IMAX 18,000원)");
const age = +prompt("나이 입력");
const snack_type = +prompt("간식(1.팝콘 5,000원 / 2.음료 2,000원 / 3. 없음 0원)");
const seat_type = +prompt("좌석 등급(1.일반 0원 / 2.프리미엄 5,000원 / 3.VIP 10,000원)");

const movie = {
  1: 12000,
  2: 15000,
  3: 18000,
};
const snack = {
  1: 5000,
  2: 2000,
  3: 0,
};
const seat = {
  1: 0,
  2: 5000,
  3: 10000,
};

if (age <= 7) {
  console.log(`최종 금액:${movie[movie_type] * 0.5 + snack[snack_type] + seat[seat_type]}`);
} else if (8 <= age && age <= 19) {
  console.log(`최종 금액:${movie[movie_type] * 0.7 + snack[snack_type] + seat[seat_type]}`);
} else if (65 <= age) {
  console.log(`최종 금액:${movie[movie_type] * 0 + snack[snack_type] + seat[seat_type]}`);
} else {
  console.log(`최종 금액:${movie[movie_type] * 1 + snack[snack_type] + seat[seat_type]}`);
}
