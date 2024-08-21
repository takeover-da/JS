/*
Q14. 다양한 값으로 구성된 배열을 입력 받아, 그 중에서 문자열만 골라서 새로운 배열로 반환하는 함수를 만드세요
입력: [1, "apple", true, "banana", 42, "cherry"] 
반환: ["apple", "banana", "cherry"]
*/

const arr = [1, "apple", true, "banana", 42, "cherry"];

function str(x) {

    let result = [];
    
    for(i=0; i<arr.length; i++){
        if(typeof arr[i] === 'string'){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(str());