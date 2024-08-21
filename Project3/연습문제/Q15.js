/*
Q15. 숫자를 입력 받아, 팩토리얼을 계산하여 반환하는 함수를 만드세요
입력: 5 
반환: 120 (1*2*3*4*5)
*/

function factorial(n) {
    if(n == 1){
        return 1;
    }
    return n * factorial(n - 1);
}

let result = factorial(5);
console.log(result);

// 함수 호출 순서
// factorial(5)
// 5*factorial(4)
// factorial(3)
// factorial(2)
// factorial(1)

// 함수 완료 순서
// factorial(1)
// factorial(2)
// factorial(3)
// factorial(4)
// factorial(5)