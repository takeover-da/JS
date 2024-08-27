// Q.13
const now = new Date();
const date =
    now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

console.log("현재 날짜와 시간:", date + " " + time);

// Q.14
const startDate = new Date("2024-01-01");
const add = 10;

// 날짜 계산
startDate.setDate(startDate.getDate() + add);
console.log("10일 후 날짜:", startDate.toLocaleString());

// Q.15
const currentTime = new Date();

// 1시간 30분 더하기
currentTime.setHours(currentTime.getHours() + 1);
currentTime.setMinutes(currentTime.getMinutes() + 30);

console.log("1시간 30분 후의 시간:", currentTime.toLocaleString());