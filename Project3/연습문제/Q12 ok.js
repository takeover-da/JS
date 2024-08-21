/*
Q12. 문자열 배열과 특정 문자열을 입력 받아, 특정값이 있는지 확인하고 있으면 true 없으면 false를
반환하는 함수를 만드세요.
입력: ["apple", "banana", "cherry"], "banana" 
반환: true
*/


const fruit = ["apple", "banana", "cherry"];

function f(x) {

    for(let i =0; i < fruit.length; i++){
    
        if(fruit.includes(x)){
            return true;
    
        } else {
            return false;
        }
    }
}

console.log(fruit.includes("banana"));