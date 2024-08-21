/*
Q9. 두 개의 정수를 입력 받아, 그 사이의 모든 숫자의 합을 반환하는 함수를 만드세요. 
입력: 3, 5 
반환: 12 (3 + 4 + 5)
*/


function sum(x, y) {

    let result = 0;
    
    for(let i=x; i<=y; i++){
        result += i;
    }
    
    return result;
}

const result = sum(3,5);

console.log(result);