// 기본 타입: String, Number, Boolean, Undefined, Null[없음]
// 참조 타입: Object

// [key - value]
// key: 중복 안됨
// value: 중복되고 아무타입 가능
const coffee = {
  name: "아메리카노",
  price: 3000,
  bean: "스페셜원두",
};

const car = {
  name: "포터",
  brand: "현대",
  price: 30000000,
  color: "흰색",
};

console.log(car);
//조회
console.log(car.color); // dot 접근
console.log(car["color"]); // bracket 접근
console.log(car.capacity); // 존재하지 않으면 undefined

car.options = "날개"; // 추가

delete car.price; // 삭제
car.color = "민트색"; // 업데이트

//string,number,boolean,null,undefined, object
const course = {
  name: "자바스크립트",
  numbers: 12,
  time: "19:00~22:00",
  teacher: {
    name: "전수효",
    age: 21,
    mbti: "entj",
  },
};
console.log(course.teacher.name);
