/*
Q10. 상품을 관리하는 프로그램을 만들어 주세요.
1) 상품 목록 배열을 생성하세요.
2) 상품들을 가격을 기준으로 오름차순 정렬하세요.
3) 가격이 50000원 이상 500000원 이하이고, 카테고리가 “전자제품”인 상품들을 찾으세요.
4) 상품의 가격을 한국 원화 형식(예: "₩1000")으로 변환하세요.
*/

// 상품 목록 배열
const products = [
    { name: "스마트폰", price: 799000, category: "전자제품" },
    { name: "노트북", price: 1200000, category: "전자제품" },
    { name: "헤드폰", price: 150000, category: "전자제품" },
    { name: "키보드", price: 100000, category: "악세서리" },
    { name: "마우스", price: 50000, category: "악세서리" },
    { name: "충전기", price: 30000, category: "악세서리" },
    { name: "블루투스 스피커", price: 90000, category: "전자제품" },
];

// 가격을 기준으로 오름차순 정렬하기
products.sort((a,b) => a.price - b.price);
console.log("정렬된 상품 목록:", products);

// 가격과 카테고리 기준으로 필터링하기
// 가격이 50,000원 이상 500,000원 이하인 상품만 포함
// 카테고리가 "전자제품"인 상품만 포함
const filteredProducts = products.filter(
    (product) =>
        product.price >= 50000 &&
    product.price <= 500000 &&
    product.category === "전자제품"
);
console.log("필터링된 상품 목록:", filteredProducts);

// 상품 객체 변환하기
// 가격을 한국 원화 형식으로 변환
const formattedProducts = filteredProducts.map((product) => {
    return {
        name: product.name,
        formatedPrice: `\${product.price}`,
        category: product.category,
    };
});
console.log("포멧된 상품 목록:", formattedProducts);