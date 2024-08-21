/* if문 */

var year = 2024;

if (year == 2024) {
    console.log("정답입니다!");
}

if (year == 2021) {
    console.log("정답!");
} else {
    console.log("오답!");
}

var year = 2021;

if (year == 2024) {
    console.log("year는 2024과 같습니다");
} else if (year < 2024) {
    console.log("year는 2024보다 작다")
} else {
    console.log("year는 2024보다 큼")
}

// if문으로 버스 프로그램 만들기
let age = 57;  //승객의 나이

if (age <= 7) {
    busFare = 0;
} else if (age >= 8 && age <= 13) {
    busFare = 450;
} else if (age >= 14 && age <= 19) {
    busFare = 720;
} else if (age >= 20 && age < 70) {
    busFare = 1200;
} else {
    busFare = 0;
}

console.log(busFare);

// switch문
const rank = 5;

switch (rank) {
    case 1:
        console.log("금메달");
        break;
    case 2:
        console.log("은메달");
        break;
    case 3:
        console.log("동메달");
        break;
    default:
        console.log("땡~");
        break;
}

