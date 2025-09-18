//1. 홀수짝수를 알려주는 함수를 만들고
//함수를 이용해서 콘솔로그로 나타내기
function oddEven(x) {
  return x % 2 == 1 ? "홀수" : "짝수";
}

const a = oddEven(8);
const b = oddEven(12123123);
const c = oddEven(777777);
console.log(a);
console.log(b);
console.log(c);

//2. 어떠한 숫자를 넣었을 때 10보다 크면
//💛를 돌려주고, 작으면 😺를 돌려주는 함수를 만들고
//함수를 이용해서 콘솔로그로 나타내기

function heartOrCat(x) {
  if (x > 10) {
    return "💛";
  } else {
    return "😺";
  }
}
const d = heartOrCat(50);
const e = heartOrCat(-10);

//3. 어떠한 아이스크림 맛을 주면,
// ~~맛보다 바.로.너 를 돌려주는 함수 만들고
//함수를 이용해서 콘솔로그로 나타내기
function nanigasuki(x) {
  return `${x}맛보다 바로너`;
}
const f = nanigasuki("초코민토");

//4. x,y를 주었을 때, x가 y보다 크면 x의 y 제곱을 돌려주고
// 아니면 오브젝트 {first:x,second:y}로 돌려주는 함수 만들기

function quiz4(x, y) {
  if (x > y) {
    return x ** y;
  } else {
    return { first: x, second: y };
  }
}
//5. x,y,z를 주었을 때, 가장 큰수를 돌려주는 함수 만들기
function quiz5(x, y, z) {
  if (x >= y && x >= z) {
    return x;
  } else if (y >= x && y >= z) {
    return y;
  } else {
    return z;
  }
}

//6. year,month,date를 주었을 때,
// year-month-date로 돌려주는 함수 만들기
function quiz6(year, month, date) {
  return `${year}-${month}-${date}`;
}

//7. burger,side,drink를 매개변수 넣으면
// 오브젝트로 {main:burger,side:side,drink:drink} 나오도록 하기
function quiz7(burger, side, drink) {
  return { main: burger, side: side, drink: drink };
}

//8. krw와 nation를 매개변수 넣으면
// nation이 usa 원화를 달러화로 바꿔서 돌려주고
// natino이 jpy 원화를 엔화로 바꿔서 돌려주고
// nation이 thb 원화를 바트로 바꿔서 돌려주기
// 그외는 그냥 원화를 돌려주기

function quiz8(krw, nation) {
  if (nation == "usa") {
    return krw * 1.38;
  } else if (nation == "jpy") {
    return krw * 0.94;
  } else if (nation == "thb") {
    return krw * 0.43;
  } else {
    return krw;
  }
}
