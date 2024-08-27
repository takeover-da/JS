/*
Q8. 주어진 문자열에서 각 단어의 첫 글자를 대문자로 변환하세요.
문자열: “hello world welcome to programming”
새로운 문자열: “Hello World Welcome To Programming”
*/

var text = "hello world welcome to programming";

var arr = text.split(" ");
var newArr = [];

for (let word of arr) {
    newArr.push(word.charAt(0).toUpperCase() + word.slice(1));
}

var newText = newArr.join(" ");
console.log(newText);