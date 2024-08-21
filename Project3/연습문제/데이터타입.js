// Q.1
const member = {
    아이디: "user1",
    패스워드: "123",
    등급: "VIP",
    이름: "고길동",
    전화번호: "010-123-1234"
}
///////////////////////////

const item = {
    제품명: "노트북",
    가격: 1200000,
    상세설명: "이것은 제품입니당~",
    카테고리: "PC"
}
////////////////////////////

const order = {
    제품명: "제품1",
    수량: 300,
    총주문금액: 1005000,
    주문자: "또치",
    주문일자: "2024-8-20",
    배송지: "인천"
}
///////////////////////////

// Q.2
const person = {
    age: 30,
    name: "둘리",
    address: "서울"
}
person.age = 10;
person.name = "또치";
person.address = "인천";

console.log(person);
////////////////////////////

const product = {
    name: "노트북",
    price: 1500000,
    brand: "삼성"
}
product.price = 2000000;
product.brand = "LG";

console.log(product);
/////////////////////////////

// Q.3
const foodList = ['Pizza', 'Hamburger', 'Chicken', 'Steak'];

console.log(foodList[0], foodList[3]);

// 답?
const food1 = foodList[0];
const food2 = foodList[foodList.length -1];

const result = food1 + ' ' + food2;

console.log(result);