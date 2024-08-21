/* object(객체) */

// 객체는 {}중괄호를 사용해서 작성할것
const user = {
    name: "둘리", //프로퍼티는 key-value 쌍형태
    age: 10,
    get_name: function () {
        console.log(this.name);
    },
};

// 객체의 프로퍼티를 꺼내는 방법
console.log(user.name);   //key 사용!
console.log(user["age"]);

