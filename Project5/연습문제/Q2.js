// Q2. 학생의 영어, 수학, 국어 점수를 입력받아 평균점수를 출력하는 함수를 정의하세요


// function calculateGrade(name, ...arr) {
//   let total = 0;
//   let avg = 0;
//   for (let x of arr) {
//     total += x;
//   }
//   for (let i of total) {
//     avg = total / i;
//   }
//   console.log(avg);
// }
// calculateGrade("철수", 85, 90, 78);
// calculateGrade("훈이", 80);

function calculateGrade(name, eng=0, mat=0, kor=0) {
  const sum = eng + mat + kor;
  const total = sum / 3;
  
  console.log(`${name}님의 평균 성적은 ${total.toFixed(2)}점입니다.`);
}
calculateGrade("철수", 85, 90, 78);
calculateGrade("훈이", 80);
