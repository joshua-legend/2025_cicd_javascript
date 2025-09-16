// // 유저에게 mbti를 물어봄
// const mbti1 = prompt("e이에요 i이에요?");
// const mbti2 = prompt("s이에요 n이에요?");
// const mbti3 = prompt("t이에요 f이에요?");
// const mbti4 = prompt("j이에요 p이에요?");

// const mbti = {
//   e: "외향적",
//   i: "내향적",
//   s: "감각적",
//   n: "직관적",
//   t: "이성적",
//   f: "감성적",
//   j: "계획적",
//   p: "즉흥적",
// };

// alert(`${mbti[mbti1]} ${mbti[mbti2]} ${mbti[mbti3]} ${mbti[mbti4]}`);

// 유저에게 몇년생인지 물어보고
// 알럿으로 띠알려주기
const zodiac = +prompt("몇년생임?") % 12;
const animal = {
  0: "원숭이띠",
  1: "닭띠",
  2: "개띠",
  3: "돼지띠",
  4: "쥐띠",
  5: "소띠",
  6: "호랑이띠",
  7: "토끼띠",
  8: "용띠",
  9: "뱀띠",
  10: "말띠",
  11: "양띠",
};
alert(`당신은 ${animal[zodiac]}이군요!`);
