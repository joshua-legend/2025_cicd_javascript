const fruit = ["apple", "banana", "kiwi"];

const classroom = [
  { name: "A", capacity: 20, students: 18, lecture: "java" },
  { name: "B", capacity: 20, students: 19, lecture: "python" },
  { name: "C", capacity: 20, students: 20, lecture: "javascript" },
];

const wish = prompt("듣고 싶은 과목명 입력(java,python,javascript)");
if (classroom[0].lecture == wish) {
  classroom[0].students = classroom[0].students + 1;
} else if (classroom[1].lecture == wish) {
  classroom[1].students = classroom[1].students + 1;
} else if (classroom[2].lecture == wish) {
  alert("불가!");
} else {
  console.log("없는과목입니당. 옆 그린아케데미 ㄱ");
}
console.log(classroom);
