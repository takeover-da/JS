// Date: 날짜와 시간을 다루는 객체

// 현재 날짜와 시간을 기준으로 Date객체 생성
let now = new Date();
console.log(now);  //현재시간
console.log(now.toLocaleString());  //로컬시간대로 변경

// 특정 날짜와 시간을 지정해서 Date 객체 생성
// (연도, 월, 일, 시, 분, 초, 밀리초)
var date1 = new Date(2024, 1, 1, 10, 10, 10, 0);
// 월은 0부터 시작. 1은 2월
console.log(date1);

// 문자열을 사용하여 Date 객체 생성
var date2 = new Date("October 13, 2024 11:11:11");
console.log(date2.toLocaleString());

var date3 = new Date("2024-10-13T11:11:11");
console.log(date3.toLocaleString());

// 일과 시간 변경
date3.setDate(15);
date3.setHours(15);
console.log(date3.toLocaleString());

// 정적 메소드로 현재시간(밀리초 단위) 출력
console.log(Date.now());

// 현재 시간으로 Date 객체 생성 후 연도, 월, 일 등을 가져오기
var date4 = new Date();

var year = date4.getFullYear();  //연도
console.log("year", year);

var month = date4.getMonth();  //월
console.log("month", month);

var date = date4.getDate();  //일
console.log("date", date);

var day = date4.getDay();  //요일
console.log("day", day);

var hour = date4.getHours();  //시
console.log("hour", hour);

var minute = date4.getMinute();  //분
console.log("minute", minute);

var second = date4.getSecond();  //초
console.log("second", second);
