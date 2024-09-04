// Q1. 사용자의 이름과 인삿말을 입력받아 인사를 만드는 함수를 정의하세요.
// 함수를 호출했을 때 다음과 같은 결과를 출력하세요.


function greet(name, greeting = "안녕하세요") {
  return `${greeting}, ${name}님!`;
}
console.log(greet("철수", "반갑습니다"));
console.log(greet("훈이"))
