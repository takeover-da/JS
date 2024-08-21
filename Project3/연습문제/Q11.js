/*
Q11. 배열을 입력 받아, 모두 같은 자료형으로 이루어져 있는지 확인하는 함수를 만드세요.
입력: [“a", “b", “c"] 
반환: true
*/


const arr = ["a", "b", "c"];

function str(x) {

    let result = [];

    for(i=0; i<arr.length; i++){
        if(typeof arr[i] === arr[i]) {
            console.log("true");
        } else {
            console.log("false")
        }
    }
    return result;
}
console.log(str);

