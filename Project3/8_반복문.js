/* while문 */


// 숫자 1~10 출력하기

let i = 1;  //초기화식

while (i <= 10) {  //조건식
    console.log(i)
    i++;  //증감식
}

// 동전교환기에 지폐를 넣고 교환하기
let inputPrice = 7000;
let coinUnit = 500;
let coinCount = 0;

while(inputPrice > 0){
    inputPrice = inputPrice - coinUnit;
    coinCount++;
}
console.log("7000원을 동전 " + coinCount + "개로 변경함..");


/* for문 */

// 초기화식, 조건식, 증감식
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 배열의 요소를 하나씩 꺼내기!
let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];

for (let i = 0; i < 5; i++){
    console.log(brands[i]);
}

// 음료수 자판기에서 음료 찾기

// 800원을 구매할 수 있는 음료수 찾기
let inputCoin = 800;
let outputList = [];

let productList = [
    {name: "솔의눈", price: 700},
    {name: "커피", price: 700},
    {name: "파워에이드", price: 1200},
    {name: "오렌지", price: 1000},
    {name: "보리차", price: 1200},
    {name: "밀키스", price: 800},
];

for (let i=0; i<productList.length; i++){

    if (productList[i].price <= inputCoin){
        console.log(productList[i]);
    }

}

/* for-in문 */
let arr = [3, 4, 5];

// 배열을 순회하면서 index를 꺼냄
for (let i in arr) {  //변수 in qoduf
    console.log(i + " " + arr[i]);
    // console.log(i);
}

/* for-of문 */
for (let v of arr) {
    //배열을 순회하면서 값을 꺼냄
    console.log(v);
}