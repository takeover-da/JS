/*
Q12. 상품의 재고를 관리하는 프로그램을 만들어 주세요.
1) 상품 목록 배열을 생성하세요.
2) 새로운 제품인 “바나나킥”을 목록에 추가하세요. (수량:50, 가격:1000)
3) 재고가 있는 제품의 이름을 변경하세요.
4) 재고가 10개가 넘는 제품은 가격의 10%를 할인 해주세요.
5) 모든 제품의 총 재고 가치를 계산하세요.
*/

// 제품 목록 배열 생성
const invertory = [
    { product: "감자칩", quantity: 10, price: 1500 },
    { product: "아이스크림", quantity: 0, price: 3000 },
    { product: "쿠키", quantity: 20, price: 2000 },
    { product: "탄산음료", quantity: 5, price: 1000 },
];

// 새로운 제품 "바나나킥" 추가
invertory.push({ product: "바나나킥", quantity: 50, price: 1000});
console.log("새로운 제품 추가:", invertory);

// 배열의 요소 값을 변경할 때는 MAP() 또는 FOREACH() 사용
// MAP()은 새로운 배열을 반환하고
// FOREACH()는 기존 배열을 수정하므로 간단한 변경은 FOREACH를 사용할것.

// 재고가 있는 제품의 이름을 변경
invertory.forEach((item) => {
    if(item.quantity > 0) {
        item.product = `(재고있음) ${item.product}`;
    }
});
console.log("재고가 있는 제품의 이름 변경:", invertory);

// 재고가 10개가 넘는 제품은 가격을 10% 할인
invertory.forEach((item) => {
    if(item.quantity > 10) {
        item.price = item.price * 0.9;
    }
});
console.log("재고가 10개가 넘는 제품의 가격 할인:", invertory);

// 모든 제품의 총 재고 가치 계산
const totalValue = invertory.reduce((total, item) => {
    return total + item.quantity * item.price;
}, 0);
console.log("전체 재고의 총 가치:", totalValue);