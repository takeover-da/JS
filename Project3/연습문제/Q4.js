// Q.4-1
let x = 17;

if (x > 10 && x < 20){
    console.log(x);
}
console.log("");


// Q.4-2
let str = "ABCDEF";

if (str.length > 5){
    console.log(str);
}
console.log("");


// Q.4-3
const person = {
    age: 15,
    gender: "F",
    name: "둘리",
    address: "서울"
}

if (person.age < 20 && person.gender == "M"){
    console.log("남학생입니다.");
} else if(person.age < 20 && person.gender == "F") {
    console.log("여학생입니다.");
}
console.log("");


// Q.4-4
const arr = [5, 10, 8, 130, 44];

if (arr.includes(10)){
    console.log("배열에 10이 있습니다");
} else {
    console.log("10이 배열에 없습니다");
}