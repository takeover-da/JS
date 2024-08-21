// 대입연산자
let x = 1;  //x에 1을 저장

// 비교연산자
console.log(1 == 2);  //값이 같으면 참
console.log(1 != 2);  //값이 다르면 참
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 < 2);
console.log(1 <= 2);

console.log(1 == "1");  //값만 비교
console.log(1 === "1"); //값과 자료형 모두 비교

// 산술연산자
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);

// 문자열결합연산자
console.log("좋은 " + "하루 되세요!");

// 부호 연산자
console.log(-x);
console.log(x);

// 증감 연산자
console.log(++x); //먼저 연산되어 2 (1)
console.log(x++); //나중에 연산되어 2 (1+1)
console.log(--x); //먼저 연산되어 2 (3-1)
console.log(x--); //나중에 연산되어 2 (2)
console.log(x);

// 논리 연산자
console.log(true && true);
console.log(true && false);
console.log(true || true);
console.log(true || false);
console.log(!true);

// 삼항 연산자
let point = 92;
// 점수가 90점 이상이면 pass 아니면 fail
let grade = point >= 90 ? "pass" : "fail";
console.log(grade);

// typeof 연산자: 값의 타입을 확인하는 연산자
console.log(typeof "42");           //string
console.log(typeof 42);             //number
console.log(typeof 1.123);          //number
console.log(typeof true);           //boolean
console.log(typeof function(){});   //function
console.log(typeof undefined);      //undefined
console.log(typeof null);           //object
console.log(typeof {});             //object
console.log(typeof []);             //object




