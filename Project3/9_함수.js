/* 함수 선언식 */

// 매개변수와 반환값이 없는 함수 선언
function hello() {
    console.log("안녕하세요~");
}

// 함수 호출
hello();  //함수명();


// 매개변수와 반환값이 있는 함수 선언
function sum(x, y) {
    return x + y;
}

// 함수 호출
const result = sum(2, 3);
console.log(result);


/* 함수 표현식 */

// 변수 선언 = 함수
const hi = function(){
    console.log("안녕~");
}

// 함수 호출
hi();  //변수이름();


// 함수선언식으로 작성한 함수는 호이스팅 현상이 있음
A();

function A() {
    console.log("하잉~");
}


// 함수표현식은 순차적으로 코드를 읽기 때문에, 호출코드가 위에 있으면 에러남
B();

const B = function(){
    console.log("어서와~");
}