// 시간과 분을 입력 45분 일찍 시간이 설정 되도록 변경하는 프로그램
// 시간은 24시간제로 하고, 0시30분 = >23시45분
// parselnt() : 정수로 형변환 해주는 함수

let hour = Number(prompt("시간 입력 : "));
let min = Number(prompt("분 입력 : "));
let x = hour * 60 + min;

if (x < 45) {
  remaintime = 24 * 60 - x;
  h1 = Math.floor(remaintime / 60); // 1440 - 30 = 1410 / 60
  m1 = remaintime % 60;
  document.write("예약된 알람시간은 " + h1 + "시" + m1 + "분 입니다.");
} else {
  remaintime = x - 45;
  h1 = Math.floor(remaintime / 60);
  m1 = remaintime % 60;
  document.write("예약된 알람시간은 " + h1 + "시" + m1 + "분 입니다.");
}

/*
let hour = Number(prompt("시간 입력 ", ""));
let min = Number(prompt("분 입력 ", ""));
let totalMin = hour * 60 + min;

if(totalMin < 45) totalMin = 24 * 60 +min;
totalMin -= 45;
hour =parselnt(totalMin/60); //소수점 이하를 날리기위해 정수로 형번환
min = totalMin % 60;
doucument.write ("<h2> + `${hour}시 ${min}분` + </h2>")
*/
