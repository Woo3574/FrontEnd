// 자바스크립트의 조건문은 if, if ~ else, if ~ else, switch ~ case
// 반복문은 whlie, do ~ while, for(초기값;최종조건;증감값), for ~ in (객체 반복),
// for ~ of (리터러블 객체를 순회할 때 사용)
let num = new Date().getDay(); //요일중 몇번째인지를 의미 함
let day = null;
switch (num) {
  case 0:
    day = "일요일";
    break;
  case 1:
    day = "월요일";
    break;
  case 2:
    day = "화요일";
    break;
  case 3:
    day = "수요일";
    break;
  case 4:
    day = "목요일";
    break;
  case 5:
    day = "금요일";
    break;
  case 6:
    day = "토요일";
    break;
  default:
    console.log("잘못된 요일 입니다.");
}
console.log(`오늘은 ${day}입니다.`);

for (let i = 0; i < 100; i++) {
  console.log(i);
}
