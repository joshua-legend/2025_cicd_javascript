//array
const a = ["orange", "mango", "apple", "peach", "kiwi"];
console.log(a[1]); // mango
console.log(a[5]); // undefined
a[5] = "grape"; // 다섯번째 추가임
delete a[0];
console.log(a);
