//유저에게 프롬프트로 단어를 입력받고
//대문자화 해서 콘솔로 출력하기
// const word = prompt("단어 입력");
// console.log(word.toUpperCase());

//1. 단어를 입력하고 10글자 이상이면
//콘솔로 단어가 깁니다. 아니면 콘솔로 대문자화해서 나타내기
const word1 = prompt("단어 입력");
if (word1.length >= 10) {
  console.log("단어가 깁니다.");
} else {
  console.log(word1.toUpperCase());
}

//2. 영어문장을 입력해서 콘솔로 배열로 나타내기
const sentence = prompt("영어 문장입력");
console.log(sentence.split(" "));

//3. 유저에게 단어를 입력받고
const word2 = prompt("단어 입력");
if (word2 == word2.toUpperCase()) {
  console.log(word2.toLowerCase());
} else {
  console.log(word2.toUpperCase());
}
//4. 유저에게 이메일을 입력받고, @가 포함하면
const email = prompt("이메일 입력");
if (email.includes("@")) {
  console.log("이메일이 올바릅니다.");
} else {
  console.log("이메일 아님ㅅㄱ");
}
