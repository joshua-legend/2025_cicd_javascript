const venti = [
  { name: "iced americano", price: 2000, shots: 2 },
  { name: "iced latte", price: 3000, shots: 2 },
  { name: "iced mocha", price: 3000, shots: 2 },
  { name: "strawberry latte", price: 4000, shots: 0 },
  { name: "mango ade", price: 3500, shots: 0 },
];

//1. 전체에 shots 하나 올려서 돌려주기
const quiz1 = (x) => {
  x.shots = x.shots + 1;
  return x;
};
const result1 = venti.map(quiz1);
console.log(result1);

//2. 가격이 3500원 이상이면 +500원 아니면 +200원해서 돌려주기
const quiz2 = (x) => {
  const plusMoney = x.price >= 3500 ? 500 : 200;
  x.price = x.price + plusMoney;
  return x;
};
const result2 = venti.map(quiz2);
console.log(result2);

//3. 전체 이름 앞에 venti를 붙혀서 돌려주기
const quiz3 = (x) => {
  x.name = "venti " + x.name;
  return x;
};
const result3 = venti.map(qui3);
console.log(result3);
