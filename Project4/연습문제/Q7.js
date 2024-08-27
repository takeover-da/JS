/*
Q7. 배열의 요소 중에서 20보다 큰 숫자를 찾고, 각 요소에 2를 곱한 결과를 만드세요.
배열: [10, 15, 20, 25, 30]
결과: [50, 60]
*/

var arr = [10, 15, 20, 25, 30];

var newarr = arr
    .filter(function (num) {
        return num > 20;
    })
    
    .map(function (num) {
        return num * 2;
    });

    console.log(newarr);