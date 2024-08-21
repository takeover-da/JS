/*
Q13. 정수를 입력 받아, 그 숫자의 구구단을 출력하는 함수를 만드세요
입력: 2
*/


function i(x) {

    let i = x;
    
    for(let j = 1; j <= 9; j++) {
    
        let result = i*j;
    
        console.log(i + ' * ' + j + ' = ' + result);    
    }
}

i(2);