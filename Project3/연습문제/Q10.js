/* 
Q10. 숫자 배열을 입력 받아, 배열에서 가장 큰 숫자를 반환하는 함수를 만드세요.
입력: [ -1, 5, 10, -3 ] 
반환: 10 
*/


function num(arr){

    //최대값
    let max = arr[0];

    for(i=1; i<arr.length; i++) {  //한개씩 비교하기위한 for
        // -1 5 
        // 5 10 
        // 10 -3
        // 두값을 비교한 후에 큰값을 max값에 교체한다

        // 현재 max값을 배열의 요소로 교체
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

const result = arr([-1, 5, 10, -3]);

console.log(result);

/*
이 배열의 최대값? 10

*/


