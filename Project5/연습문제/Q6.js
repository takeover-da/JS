// Q6. 상품들의 가격을 계산하는 프로그램을 만들어주세요.
// 여러 상품을 인자로 입력받아, 평균 가격을 반환하는 함수를 정의하세요.
// 각 상품의 할인율을 적용하여 최종가격을 계산해야 합니다.
// 예: 새우깡의 최종가격: 1500 * 0.9 = 1350원


// { name: '새우깡', price: 1500, discount: 10},
// { name: '홈런볼', price: 2000, discount: 5},
// { name: '포카칩', price: 2500},
// { name: '칙촉', price: 3000, discount: 15},
// { name: '오잉', price: 1800}

function avg(name, price, discount) {
  let dis = price*0.9;
  let sum = 0;
  let total = sum/5;

  for (let x of price) {
    sum += x;
  }
  console.log(`${name}의 평균 가격은 ${}원 입니다. 전체 평균 가격은 ${total}원 입니다.`);
}
