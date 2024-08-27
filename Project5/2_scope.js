// 지역스코프와 전역스코프

// 지역스코프(local scope):
// 함수 안에 선언된 변수는 함수 안에서만 사용 가능
function myFunction() {  //스코프 시작
    let localVar = "볼보";
    console.log(localVar);  //localVar함수가 끝나면 메모리에서 사라짐
}  //스코프 끝
myFunction();

// carName는 함수 안에서만 사용할 수 있음
// console.log(localVar);

// 전역스코프(global scope):
// 전역컨텍스트, 함수 밖에 선언된 변수는 어디서나 사용가능
let globalVar = "기아";  //스크립트 내 모든 함수와 블록에서 접근가능

function myFunction2() {
    console.log(globalVar);
}

myFunction2();