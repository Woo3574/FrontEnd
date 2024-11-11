// 주민 등록 번호(020222-3164414)를 입력 받아 성별, 나이 출력 하기 (웹에 출력 하기)
// 문자열을 자르는 함수는 jumin.substring(0, 2) // 문자열에서 0번째에서 2번 인덱스 미만 까지 자름
// 문자열에서 해당 인덱스의 문자를 추출 jumin.chatAt(5); // 문자열에서 5번 인덱스의 문자 추출
// const date = new Date ();
// date.getFullYear(); // 2024
// 주민등록번호 입력 오류 체크 하기 (길이 체크, "-" 포함 여부 확인 )
// 특정 문자열 포함여부 확인은 indexOf("-")사용

// let bornNumber = prompt("주민등록번호를 입력하세요 : 예시 (020222-3164414)");
// let gender = bornNumber.charAt(7);
// console.log(gender);
// if (gender == 1 || gender == 3) {
//   document.write("남성");
// } else if (gender == 2 || gender == 4) {
//   document.write("여성");
// } else {
//   document.write("잘못입력하셨습니다.");
// }

// let age = bornNumber.substring(0, 2);
// age = Number(age);
// const currentYear = new Date().getFullYear(); // 현재 년도
// const result = currentYear - 2000 + (100 - age);
// document.write(result);

let jumin = null;
while (true) {
  jumin = prompt("주민등록번호 : ", "");
  if (jumin.length != 14 || jumin.indexOf("-") == -1) {
    alert("입력 오류 : 주민등록번호에는 " - "을 포함해야 합니다.");
  }
  break;
}
const genderCode = jumin.charAt(7);
const birthYearPrefix = genderCode === "1" || genderCode === "2" ? "19" : "20";
const birthYear = Number(birthYearPrefix + jumin.substring(0, 2));
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
const genderStr = genderCode === "1" || genderCode === "3" ? "남성" : "여성";

document.write(`<p class ='box'> 성별 : ${genderStr} <br> 나이: ${age} </p>`);
